export type EstablishmentGroup = 'Oficinas Mecânicas' | 'Oficinas Elétricas' | 'Funilaria e Pintura';

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
  
  if (type === 'oficina elétrica' || type === 'eletrica' || type === 'elétrica') {
    return 'Oficinas Elétricas';
  }
  
  if (type === 'funilaria' || type === 'pintura' || type === 'funilaria e pintura') {
    return 'Funilaria e Pintura';
  }
  
  if (type === 'oficina mecânica' || type === 'mecanica' || type === 'mecânica') {
    return 'Oficinas Mecânicas';
  }
  
  const searchText = `${establishment.name} ${establishment.description || ''} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('elétrica') || searchText.includes('eletrica') || searchText.includes('parte elétrica')) {
    return 'Oficinas Elétricas';
  }
  
  if (searchText.includes('funilaria') || searchText.includes('pintura') || searchText.includes('lataria')) {
    return 'Funilaria e Pintura';
  }
  
  return 'Oficinas Mecânicas';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Oficinas Mecânicas': [],
    'Oficinas Elétricas': [],
    'Funilaria e Pintura': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
