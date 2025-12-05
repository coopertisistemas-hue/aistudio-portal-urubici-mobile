import type { ScrapedEstablishment, ScrapedMedicalEstablishment } from '../types/scraping.types';

/**
 * Gera slug a partir do nome
 */
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Determina a categoria do estabelecimento baseado no tipo
 * Valores válidos do enum: ONDE_IR, ONDE_FICAR, ONDE_COMER
 */
function mapCategory(type: string): 'ONDE_IR' | 'ONDE_FICAR' | 'ONDE_COMER' {
  const typeMap: Record<string, 'ONDE_IR' | 'ONDE_FICAR' | 'ONDE_COMER'> = {
    'onde_ficar': 'ONDE_FICAR',
    'onde_comer': 'ONDE_COMER',
    'o_que_fazer': 'ONDE_IR',
    'guia_medico': 'ONDE_IR'
  };
  
  return typeMap[type] || 'ONDE_IR';
}

/**
 * Mapeia dados scraped para o formato da tabela establishments
 */
export function mapToEstablishment(scraped: ScrapedEstablishment, cityId: string) {
  return {
    name: scraped.name,
    category: mapCategory(scraped.type),
    city_id: cityId,
    phone: scraped.phone || null,
    whatsapp: scraped.whatsapp || null,
    email: scraped.email || null,
    website: scraped.website || null,
    address: scraped.address || 'Urubici, SC',
    description: scraped.description || null,
    images: scraped.images || [],
    is_featured: false,
    status: 'PENDING' as const,
    owner_id: null,
    latitude: null,
    longitude: null,
    moderation_status: 'pending',
    moderated_at: null,
    moderated_by: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

/**
 * Mapeia dados scraped para o formato da tabela medical_establishments
 */
export function mapToMedicalEstablishment(scraped: ScrapedMedicalEstablishment) {
  const slug = generateSlug(scraped.name);
  
  // Garante que todos os campos obrigatórios tenham valores válidos
  const name = scraped.name?.trim() || 'Estabelecimento Médico';
  const type = scraped.specialty?.trim() || scraped.category?.trim() || 'clínica';
  
  // Extrai o endereço do objeto ScrapedAddress
  let address = 'Urubici, SC';
  if (scraped.address) {
    if (typeof scraped.address === 'string') {
      address = scraped.address.trim();
    } else if (scraped.address.fullAddress) {
      address = scraped.address.fullAddress.trim();
    } else {
      // Monta o endereço a partir das partes disponíveis
      const parts = [
        scraped.address.street,
        scraped.address.neighborhood,
        scraped.address.city || 'Urubici',
        scraped.address.state || 'SC'
      ].filter(Boolean);
      
      if (parts.length > 0) {
        address = parts.join(', ');
      }
    }
  }
  
  // Processa as imagens corretamente
  const images = Array.isArray(scraped.images) ? scraped.images.map(img => img.url).filter(Boolean) : [];
  const featured_image = images.length > 0 ? images[0] : null;
  const gallery_images = images.length > 1 ? images.slice(1) : [];
  
  // Processa accepts_insurance como array de strings
  const acceptsInsuranceArray = scraped.acceptsInsurance 
    ? (Array.isArray(scraped.acceptsInsurance) ? scraped.acceptsInsurance : ['Sim'])
    : [];
  
  return {
    name,
    slug,
    type,
    description: scraped.description?.trim() || null,
    specialties: Array.isArray(scraped.services) ? scraped.services.filter(s => s?.trim()) : [],
    address,
    neighborhood: typeof scraped.address === 'object' ? (scraped.address.neighborhood?.trim() || null) : null,
    phone: scraped.contact?.phone?.trim() || null,
    whatsapp: scraped.contact?.whatsapp?.trim() || null,
    email: scraped.contact?.email?.trim() || null,
    website: scraped.contact?.website?.trim() || null,
    opening_hours: scraped.openingHours || null,
    emergency_service: scraped.emergencyService || false,
    accepts_insurance: acceptsInsuranceArray,
    featured_image,
    gallery_images,
    latitude: scraped.coordinates?.latitude || null,
    longitude: scraped.coordinates?.longitude || null,
    rating: null,
    review_count: 0,
    verified: false,
    featured: false,
    status: 'active',
  };
}
