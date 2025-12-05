export type EstablishmentGroup = 'Supermercados' | 'Mercearias' | 'Mini-mercados';

export interface Establishment {
  id: string;
  name: string;
  description: string | null;
  address: string | null;
  neighborhood: string | null;
  phone: string | null;
  whatsapp: string | null;
  services_offered: string[] | null;
  category?: string | null;
  subcategory?: string | null;
  type?: string | null;
  tags?: string[] | null;
  rating?: number | null;
  google_rating?: number | null;
  google_reviews_count?: number | null;
  business_hours?: any | null;
  map_url?: string | null;
  online_ordering_url?: string | null;
}

export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  const type = establishment.type?.toLowerCase() || '';
  
  if (type === 'supermercado') {
    return 'Supermercados';
  }
  
  if (type === 'minimercado' || type === 'mini-mercado' || type === 'mini mercado') {
    return 'Mini-mercados';
  }
  
  if (type === 'mercearia') {
    return 'Mercearias';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('supermercado')) {
    return 'Supermercados';
  }
  
  if (searchText.includes('mini mercado') || searchText.includes('minimercado') || searchText.includes('mini-mercado')) {
    return 'Mini-mercados';
  }
  
  return 'Mercearias';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Supermercados': [],
    'Mercearias': [],
    'Mini-mercados': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}