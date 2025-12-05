export type EstablishmentGroup = 'Buffets Completos' | 'Espaços para Festas' | 'Decoração e Organização' | 'Serviços de Buffet';

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
  const searchText = `${establishment.name} ${establishment.description || ''} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  // Buffets Completos
  if (
    searchText.includes('buffet completo') ||
    searchText.includes('buffet infantil') ||
    searchText.includes('buffet casamento') ||
    searchText.includes('buffet eventos') ||
    searchText.includes('buffet festas')
  ) {
    return 'Buffets Completos';
  }
  
  // Espaços para Festas
  if (
    searchText.includes('espaço') ||
    searchText.includes('salão') ||
    searchText.includes('chácara') ||
    searchText.includes('sítio') ||
    searchText.includes('local para festa') ||
    searchText.includes('casa de festa')
  ) {
    return 'Espaços para Festas';
  }
  
  // Decoração e Organização
  if (
    searchText.includes('decoração') ||
    searchText.includes('decorador') ||
    searchText.includes('organização') ||
    searchText.includes('cerimonial') ||
    searchText.includes('wedding planner') ||
    searchText.includes('event planner')
  ) {
    return 'Decoração e Organização';
  }
  
  // Serviços de Buffet (padrão)
  return 'Serviços de Buffet';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Buffets Completos': [],
    'Espaços para Festas': [],
    'Decoração e Organização': [],
    'Serviços de Buffet': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
