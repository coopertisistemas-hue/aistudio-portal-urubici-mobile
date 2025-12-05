import { ScrapedMedicalEstablishment, ScrapingResult } from '../types/scraping.types';

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

function extractServices(html: string): string[] {
  const servicesPattern = /(?:serviços|especialidades|atendimentos)[:\s]*<ul[^>]*>(.*?)<\/ul>/gis;
  const match = html.match(servicesPattern);
  
  if (match) {
    const liPattern = /<li[^>]*>([^<]+)<\/li>/gi;
    return extractAll(match[1], liPattern);
  }
  
  return [];
}

function extractInsurancePlans(html: string): string[] {
  const plansPattern = /(?:convênios|planos)[:\s]*<ul[^>]*>(.*?)<\/ul>/gis;
  const match = html.match(plansPattern);
  
  if (match) {
    const liPattern = /<li[^>]*>([^<]+)<\/li>/gi;
    return extractAll(match[1], liPattern);
  }
  
  return [];
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapCategoryToSpecialty(category: string): string | undefined {
  const specialtyMap: Record<string, string> = {
    'Médicos e Especialistas': 'Medicina Geral',
    'Odontologia': 'Odontologia',
    'Psicologia e Terapias': 'Psicologia',
    'Fisioterapia e Reabilitação': 'Fisioterapia',
    'Biomedicina Estética': 'Biomedicina Estética',
    'Bem-estar e Estética': 'Estética',
  };

  return specialtyMap[category] || category;
}

async function scrapeDetailPage(url: string, category?: string): Promise<ScrapedMedicalEstablishment | null> {
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
    const services = extractServices(html);
    const insurancePlans = extractInsurancePlans(html);

    const establishment: ScrapedMedicalEstablishment = {
      name,
      description: description || undefined,
      shortDescription: description ? description.substring(0, 200) : undefined,
      address,
      contact,
      images,
      category: category || 'Saúde',
      specialty: category ? mapCategoryToSpecialty(category) : undefined,
      urlOriginal: url,
      slug: createSlug(name),
      services,
      acceptsInsurance: insurancePlans.length > 0,
      insurancePlans: insurancePlans.length > 0 ? insurancePlans : undefined,
      section: 'guia_medico',
    };

    return establishment;
  } catch (error) {
    console.error(`Erro ao fazer scraping de ${url}:`, error);
    return null;
  }
}

export async function scrapeGuiaMedico(): Promise<ScrapingResult> {
  const result: ScrapingResult = {
    section: 'guia_medico',
    totalItems: 0,
    successCount: 0,
    errorCount: 0,
    items: [],
    errors: [],
  };

  try {
    const subcategories = [
      { url: `${BASE_URL}/guia-medico/medicos-especialistas`, category: 'Médicos e Especialistas' },
      { url: `${BASE_URL}/guia-medico/odontologia`, category: 'Odontologia' },
      { url: `${BASE_URL}/guia-medico/psicologia-terapias`, category: 'Psicologia e Terapias' },
      { url: `${BASE_URL}/guia-medico/fisioterapia-reabilitacao`, category: 'Fisioterapia e Reabilitação' },
      { url: `${BASE_URL}/guia-medico/farmacias-drogarias`, category: 'Farmácias e Drogarias' },
      { url: `${BASE_URL}/guia-medico/clinicas-centros-diagnostico`, category: 'Clínicas e Centros de Diagnóstico' },
      { url: `${BASE_URL}/guia-medico/especialidades-diagnosticos`, category: 'Especialidades e Diagnósticos' },
      { url: `${BASE_URL}/guia-medico/emergencias-servicos-publicos`, category: 'Emergências e Serviços Públicos' },
      { url: `${BASE_URL}/guia-medico/planos-saude-convenios`, category: 'Planos de Saúde e Convênios' },
      { url: `${BASE_URL}/guia-medico/biomedicina-estetica`, category: 'Biomedicina Estética' },
      { url: `${BASE_URL}/guia-medico/bem-estar-estetica`, category: 'Bem-estar e Estética' },
      { url: `${BASE_URL}/guia-medico/academias-fitness`, category: 'Academias e Fitness' },
      { url: `${BASE_URL}/guia-medico/atendimento-online`, category: 'Atendimento Online' },
    ];

    for (const subcategory of subcategories) {
      try {
        const response = await fetch(subcategory.url);
        if (!response.ok) continue;

        const html = await response.text();

        const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
        const links = extractAll(html, linkPattern);

        const detailLinks = links.filter(link => 
          link.includes('/guia-medico/') && 
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
