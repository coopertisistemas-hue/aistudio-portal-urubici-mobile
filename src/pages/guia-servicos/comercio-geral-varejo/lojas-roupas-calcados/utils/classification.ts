export type EstablishmentGroup = 'Lojas de Roupas' | 'Lojas de Calçados' | 'Lojas de Acessórios';

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
  const name = establishment.name?.toLowerCase() || '';
  const type = establishment.type?.toLowerCase() || '';
  const category = establishment.category?.toLowerCase() || '';
  const subcategory = establishment.subcategory?.toLowerCase() || '';
  const tags = establishment.tags?.map(t => t.toLowerCase()).join(' ') || '';
  const description = establishment.description?.toLowerCase() || '';
  
  const searchText = `${name} ${type} ${category} ${subcategory} ${tags} ${description}`;
  
  // Classificação por calçados
  if (
    searchText.includes('calçado') || 
    searchText.includes('sapato') || 
    searchText.includes('tênis') || 
    searchText.includes('bota') ||
    searchText.includes('sandália') ||
    searchText.includes('chinelo')
  ) {
    return 'Lojas de Calçados';
  }
  
  // Classificação por acessórios
  if (
    searchText.includes('acessório') || 
    searchText.includes('bolsa') || 
    searchText.includes('bijuteria') ||
    searchText.includes('joia') ||
    searchText.includes('relógio') ||
    searchText.includes('óculos')
  ) {
    return 'Lojas de Acessórios';
  }
  
  // Classificação por roupas (padrão)
  return 'Lojas de Roupas';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Lojas de Roupas': [],
    'Lojas de Calçados': [],
    'Lojas de Acessórios': []
  };
  
  // Classificar e agrupar
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  // Ordenar alfabeticamente cada grupo
  (Object.keys(groups) as EstablishmentGroup[]).forEach((groupKey) => {
    groups[groupKey].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  });
  
  return groups;
}
