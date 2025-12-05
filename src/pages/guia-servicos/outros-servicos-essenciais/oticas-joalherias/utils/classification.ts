export type EstablishmentGroup = 'Óticas' | 'Joalherias' | 'Relojoarias';

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
  
  if (type === 'ótica' || type === 'otica') {
    return 'Óticas';
  }
  
  if (type === 'joalheria') {
    return 'Joalherias';
  }
  
  if (type === 'relojoaria' || type === 'relógios' || type === 'relogios') {
    return 'Relojoarias';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('ótica') || searchText.includes('otica') || searchText.includes('óculos') || searchText.includes('oculos') || searchText.includes('lente')) {
    return 'Óticas';
  }
  
  if (searchText.includes('joalheria') || searchText.includes('joia') || searchText.includes('ouro') || searchText.includes('prata') || searchText.includes('aliança')) {
    return 'Joalherias';
  }
  
  if (searchText.includes('relógio') || searchText.includes('relogio') || searchText.includes('relojoaria')) {
    return 'Relojoarias';
  }
  
  return 'Óticas';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Óticas': [],
    'Joalherias': [],
    'Relojoarias': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
