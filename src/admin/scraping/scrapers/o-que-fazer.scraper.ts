import { ScrapedEstablishment, ScrapingResult } from '../types/scraping.types';

const BASE_URL = 'https://urubici.com.br';

function extractText(html: string, selector: string): string {
  const regex = new RegExp(`${selector}[^>]*>([^<]+)<`, 'i');
  const match = html.match(regex);
  return match ? match[1].trim() : '';
}

function extractAll(html: string, pattern: RegExp): string[] {
  const matches = html.matchAll(pattern);
  return Array.from(matches, m => m[1] || m[0]);
}

function extractImages(html: string): Array<{ url: string; alt?: string; isPrimary?: boolean }> {
  const images: Array<{ url: string; alt?: string; isPrimary?: boolean }> = [];
  
  const imgPatterns = [
    /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi,
    /<img[^>]+alt=["']([^"']*)["'][^>]*src=["']([^"']+)["']/gi,
    /<img[^>]+src=["']([^"']+)["']/gi,
  ];

  imgPatterns.forEach(pattern => {
    const matches = html.matchAll(pattern);
    for (const match of matches) {
      const url = match[1] || match[2];
      const alt = match[2] || match[1] || '';
      
      if (url && !url.includes('logo') && !url.includes('icon')) {
        images.push({
          url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
          alt: alt,
          isPrimary: images.length === 0,
        });
      }
    }
  });

  return images;
}

function extractContact(html: string) {
  const phonePattern = /(?:telefone|fone|tel|phone)[:\s]*([0-9\s\(\)\-]+)/gi;
  const whatsappPattern = /(?:whatsapp|wpp)[:\s]*([0-9\s\(\)\-]+)/gi;
  const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const websitePattern = /(?:site|website)[:\s]*(?:href=["'])?([^"'\s<>]+)/gi;

  const phones = extractAll(html, phonePattern);
  const whatsapps = extractAll(html, whatsappPattern);
  const emails = extractAll(html, emailPattern);
  const websites = extractAll(html, websitePattern);

  return {
    phone: phones[0] || undefined,
    whatsapp: whatsapps[0] || undefined,
    email: emails[0] || undefined,
    website: websites[0] || undefined,
  };
}

function extractAddress(html: string) {
  const addressPattern = /(?:endereço|localização|local)[:\s]*([^<]+)</gi;
  const addresses = extractAll(html, addressPattern);
  
  return {
    fullAddress: addresses[0] || undefined,
    city: 'Urubici',
    state: 'SC',
  };
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function scrapeDetailPage(url: string, category?: string): Promise<ScrapedEstablishment | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const name = titleMatch ? titleMatch[1].trim() : '';

    if (!name) {
      return null;
    }

    const descPattern = /<(?:p|div)[^>]*class=["'][^"']*(?:description|content|text)[^"']*["'][^>]*>([^<]+)</gi;
    const descriptions = extractAll(html, descPattern);
    const description = descriptions.join(' ').trim();

    const images = extractImages(html);
    const contact = extractContact(html);
    const address = extractAddress(html);

    const establishment: ScrapedEstablishment = {
      name,
      description: description || undefined,
      shortDescription: description ? description.substring(0, 200) : undefined,
      address,
      contact,
      images,
      category: category || 'Atividade',
      type: 'activity',
      urlOriginal: url,
      slug: createSlug(name),
      section: 'o_que_fazer',
    };

    return establishment;
  } catch (error) {
    console.error(`Erro ao fazer scraping de ${url}:`, error);
    return null;
  }
}

export async function scrapeOQueFazer(): Promise<ScrapingResult> {
  const result: ScrapingResult = {
    section: 'o_que_fazer',
    totalItems: 0,
    successCount: 0,
    errorCount: 0,
    items: [],
    errors: [],
  };

  try {
    const subcategories = [
      { url: `${BASE_URL}/o-que-fazer/aventura-parques`, category: 'Aventura e Parques' },
      { url: `${BASE_URL}/o-que-fazer/bem-estar-natureza`, category: 'Bem-estar e Natureza' },
      { url: `${BASE_URL}/o-que-fazer/cachoeiras-banhos-rio`, category: 'Cachoeiras e Banhos de Rio' },
    ];

    for (const subcategory of subcategories) {
      try {
        const response = await fetch(subcategory.url);
        if (!response.ok) continue;

        const html = await response.text();

        const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
        const links = extractAll(html, linkPattern);

        const detailLinks = links.filter(link => 
          link.includes('/o-que-fazer/') && 
          !link.includes('#') &&
          link !== subcategory.url
        );

        result.totalItems += detailLinks.length;

        for (const link of detailLinks) {
          const fullUrl = link.startsWith('http') ? link : `${BASE_URL}${link}`;
          const establishment = await scrapeDetailPage(fullUrl, subcategory.category);

          if (establishment) {
            result.items.push(establishment);
            result.successCount++;
          } else {
            result.errorCount++;
            result.errors.push({
              url: fullUrl,
              error: 'Falha ao extrair dados',
            });
          }

          await new Promise(resolve => setTimeout(resolve, 500));
        }
      } catch (error) {
        result.errors.push({
          url: subcategory.url,
          error: error instanceof Error ? error.message : 'Erro desconhecido',
        });
      }
    }
  } catch (error) {
    result.errors.push({
      url: BASE_URL,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    });
  }

  return result;
}
