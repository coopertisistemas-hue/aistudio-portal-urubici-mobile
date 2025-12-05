import type { ScrapedPlace } from '../types/scraping.types';

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
 * Mapeia dados scraped para o formato da tabela places
 * Tipo fixo: 'attraction' (todos os lugares de "Onde Ir" são atrações)
 */
export function mapToPlace(scraped: ScrapedPlace) {
  const slug = generateSlug(scraped.name);
  
  return {
    slug,
    name: scraped.name,
    short_description: scraped.description?.substring(0, 200) || null,
    full_description: scraped.description || null,
    type: 'attraction', // Tipo fixo para lugares turísticos
    category_slug: null, // Removido: não temos categorias cadastradas ainda
    subcategory: scraped.subcategory || null,
    neighborhood: null,
    price_range: null,
    cuisine_type: null,
    rating: scraped.rating || null,
    review_count: 0,
    coordinates: null,
    address: scraped.address || 'Urubici, SC',
    phone: scraped.phone || null,
    website: scraped.website || null,
    whatsapp: scraped.whatsapp || null,
    opening_hours: null,
    amenities: scraped.features || [],
    tags: scraped.tags || [],
    special_tags: [],
    image_url: scraped.images?.[0] || null,
    gallery_urls: scraped.images || [],
    distance_from_center: null,
    duration: null,
    difficulty: null,
    entry_fee: null,
    price_range_detail: null,
    capacity: null,
    room_count: null,
    check_in_time: null,
    check_out_time: null,
    specialties: [],
    faqs: null,
    featured: false,
    active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}
