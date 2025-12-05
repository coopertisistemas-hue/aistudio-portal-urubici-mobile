export type EstablishmentGroup = 'Imobiliárias' | 'Corretores Autônomos' | 'Administradoras de Imóveis';

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
  
  if (type === 'imobiliaria' || type === 'imobiliária') {
    return 'Imobiliárias';
  }
  
  if (type === 'corretor' || type === 'corretor autonomo' || type === 'corretor autônomo') {
    return 'Corretores Autônomos';
  }
  
  if (type === 'administradora' || type === 'administradora de imoveis' || type === 'administradora de imóveis') {
    return 'Administradoras de Imóveis';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('imobiliaria') || searchText.includes('imobiliária')) {
    return 'Imobiliárias';
  }
  
  if (searchText.includes('corretor') || searchText.includes('corretora')) {
    return 'Corretores Autônomos';
  }
  
  if (searchText.includes('administradora')) {
    return 'Administradoras de Imóveis';
  }
  
  return 'Imobiliárias';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Imobiliárias': [],
    'Corretores Autônomos': [],
    'Administradoras de Imóveis': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
