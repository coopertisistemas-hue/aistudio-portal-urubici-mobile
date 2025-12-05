import { ScrapedPlace, ScrapingResult } from '../types/scraping.types';

const BASE_URL = 'https://urubici.com.br';

/**
 * Extrai texto limpo de um elemento HTML
 */
function extractText(html: string, selector: string): string {
  const regex = new RegExp(`${selector}[^>]*>([^<]+)<`, 'i');
  const match = html.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * Extrai todas as ocorrências de um padrão
 */
function extractAll(html: string, pattern: RegExp): string[] {
  const matches = html.matchAll(pattern);
  return Array.from(matches, m => m[1] || m[0]);
}

/**
 * Extrai imagens de uma página
 */
function extractImages(html: string): Array<{ url: string; alt?: string; isPrimary?: boolean }> {
  const images: Array<{ url: string; alt?: string; isPrimary?: boolean }> = [];
  
  // Procura por imagens em diferentes padrões
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

/**
 * Extrai informações de contato
 */
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

/**
 * Extrai endereço da página
 */
function extractAddress(html: string) {
  const addressPattern = /(?:endereço|localização|local)[:\s]*([^<]+)</gi;
  const addresses = extractAll(html, addressPattern);
  
  return {
    fullAddress: addresses[0] || undefined,
    city: 'Urubici',
    state: 'SC',
  };
}

/**
 * Cria slug a partir do nome
 */
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Faz scraping de uma página de detalhe
 */
async function scrapeDetailPage(url: string, category?: string): Promise<ScrapedPlace | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    // Extrai título/nome
    const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const name = titleMatch ? titleMatch[1].trim() : '';

    if (!name) {
      return null;
    }

    // Extrai descrição
    const descPattern = /<(?:p|div)[^>]*class=["'][^"']*(?:description|content|text)[^"']*["'][^>]*>([^<]+)</gi;
    const descriptions = extractAll(html, descPattern);
    const description = descriptions.join(' ').trim();

    // Extrai imagens
    const images = extractImages(html);

    // Extrai contato
    const contact = extractContact(html);

    // Extrai endereço
    const address = extractAddress(html);

    const place: ScrapedPlace = {
      name,
      description: description || undefined,
      shortDescription: description ? description.substring(0, 200) : undefined,
      address,
      contact,
      images,
      category: category || 'Atração Natural',
      urlOriginal: url,
      slug: createSlug(name),
      section: 'onde_ir',
    };

    return place;
  } catch (error) {
    console.error(`Erro ao fazer scraping de ${url}:`, error);
    return null;
  }
}

/**
 * Scraper principal para a seção "Onde Ir"
 */
export async function scrapeOndeIr(): Promise<ScrapingResult> {
  const result: ScrapingResult = {
    section: 'onde_ir',
    totalItems: 0,
    successCount: 0,
    errorCount: 0,
    items: [],
    errors: [],
  };

  try {
    // URLs das subcategorias de "Onde Ir"
    const subcategories = [
      { url: `${BASE_URL}/onde-ir/cachoeiras`, category: 'Cachoeiras' },
      { url: `${BASE_URL}/onde-ir/canions-estradas-cenicas`, category: 'Cânions e Estradas Cênicas' },
      { url: `${BASE_URL}/onde-ir/grutas-cavernas`, category: 'Grutas e Cavernas' },
      { url: `${BASE_URL}/onde-ir/mirantes-montanhas`, category: 'Mirantes e Montanhas' },
      { url: `${BASE_URL}/onde-ir/parques-areas-protegidas`, category: 'Parques e Áreas Protegidas' },
      { url: `${BASE_URL}/onde-ir/patrimonio-cultura`, category: 'Patrimônio e Cultura' },
    ];

    for (const subcategory of subcategories) {
      try {
        const response = await fetch(subcategory.url);
        if (!response.ok) continue;

        const html = await response.text();

        // Extrai links de cards/itens
        const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
        const links = extractAll(html, linkPattern);

        // Filtra apenas links relevantes (que parecem ser de detalhes)
        const detailLinks = links.filter(link => 
          link.includes('/onde-ir/') && 
          !link.includes('#') &&
          link !== subcategory.url
        );

        result.totalItems += detailLinks.length;

        // Faz scraping de cada página de detalhe
        for (const link of detailLinks) {
          const fullUrl = link.startsWith('http') ? link : `${BASE_URL}${link}`;
          const place = await scrapeDetailPage(fullUrl, subcategory.category);

          if (place) {
            result.items.push(place);
            result.successCount++;
          } else {
            result.errorCount++;
            result.errors.push({
              url: fullUrl,
              error: 'Falha ao extrair dados',
            });
          }

          // Delay para não sobrecarregar o servidor
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
