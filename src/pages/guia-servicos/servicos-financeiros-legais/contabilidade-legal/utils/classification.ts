export type EstablishmentGroup = 
  | 'Escritórios de Contabilidade' 
  | 'Escritórios de Advocacia' 
  | 'Outros Serviços';

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

const CLASSIFICATION_RULES = {
  'Escritórios de Contabilidade': ['escritório de contabilidade', 'contabilidade', 'contabil', 'contador'],
  'Escritórios de Advocacia': ['escritório de advocacia', 'advocacia', 'advogad', 'jurídic']
};

function matchesKeywords(text: string, keywords: string[]): boolean {
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword));
}

export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  const type = establishment.type?.toLowerCase() || '';
  
  // Check type field first
  for (const [group, keywords] of Object.entries(CLASSIFICATION_RULES)) {
    if (matchesKeywords(type, keywords)) {
      return group as EstablishmentGroup;
    }
  }
  
  // Check other fields
  const searchText = [
    establishment.name,
    establishment.category || '',
    establishment.subcategory || '',
    establishment.tags?.join(' ') || ''
  ].join(' ');
  
  for (const [group, keywords] of Object.entries(CLASSIFICATION_RULES)) {
    if (matchesKeywords(searchText, keywords)) {
      return group as EstablishmentGroup;
    }
  }
  
  return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Escritórios de Contabilidade': [],
    'Escritórios de Advocacia': [],
    'Outros Serviços': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
