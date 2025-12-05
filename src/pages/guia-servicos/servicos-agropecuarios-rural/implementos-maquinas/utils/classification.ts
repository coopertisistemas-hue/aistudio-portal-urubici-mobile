export type EstablishmentGroup = 'Tratores' | 'Implementos Agrícolas' | 'Máquinas e Equipamentos';

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
}

export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  const type = establishment.type?.toLowerCase() || '';
  
  if (type === 'tratores') {
    return 'Tratores';
  }
  
  if (type === 'implementos') {
    return 'Implementos Agrícolas';
  }
  
  if (type === 'máquinas' || type === 'maquinas') {
    return 'Máquinas e Equipamentos';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  if (searchText.includes('trator') || searchText.includes('tratores')) {
    return 'Tratores';
  }
  
  if (searchText.includes('implemento') || searchText.includes('plantadeira') || searchText.includes('grade') || searchText.includes('pulverizador')) {
    return 'Implementos Agrícolas';
  }
  
  return 'Máquinas e Equipamentos';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Tratores': [],
    'Implementos Agrícolas': [],
    'Máquinas e Equipamentos': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
