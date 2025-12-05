export type EstablishmentGroup = 'Chaveiros' | 'Carimbos' | 'Serviços de Segurança' | 'Outros Serviços';

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
  
  if (type === 'chaveiro') {
    return 'Chaveiros';
  }
  
  if (type === 'carimbo' || type === 'carimbos') {
    return 'Carimbos';
  }
  
  if (type === 'segurança' || type === 'seguranca') {
    return 'Serviços de Segurança';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('chaveiro') || searchText.includes('chave') || searchText.includes('fechadura')) {
    return 'Chaveiros';
  }
  
  if (searchText.includes('carimbo')) {
    return 'Carimbos';
  }
  
  if (searchText.includes('segurança') || searchText.includes('seguranca') || searchText.includes('alarme') || searchText.includes('cofre')) {
    return 'Serviços de Segurança';
  }
  
  return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Chaveiros': [],
    'Carimbos': [],
    'Serviços de Segurança': [],
    'Outros Serviços': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
