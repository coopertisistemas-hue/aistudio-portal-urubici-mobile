export type EstablishmentGroup = 'Destaque' | 'Premium' | 'Verificado' | 'Padrão';

export interface Establishment {
  id: string;
  name: string;
  description: string | null;
  address: string | null;
  neighborhood: string | null;
  phone: string | null;
  whatsapp: string | null;
  instagram?: string | null;
  facebook?: string | null;
  catalog_url?: string | null;
  online_store_url?: string | null;
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
  featured?: boolean;
  isPremium?: boolean;
  isVerified?: boolean;
}

export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  if (establishment.featured) {
    return 'Destaque';
  }
  
  if (establishment.isPremium) {
    return 'Premium';
  }
  
  if (establishment.isVerified) {
    return 'Verificado';
  }
  
  return 'Padrão';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Destaque': [],
    'Premium': [],
    'Verificado': [],
    'Padrão': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  // Ordenar alfabeticamente dentro de cada grupo
  Object.keys(groups).forEach(key => {
    const groupKey = key as EstablishmentGroup;
    groups[groupKey].sort((a, b) => {
      const nameA = a.name?.toLowerCase() || '';
      const nameB = b.name?.toLowerCase() || '';
      return nameA.localeCompare(nameB, 'pt-BR');
    });
  });
  
  return groups;
}
