export type EstablishmentGroup = 'Agropecuárias' | 'Clínicas Veterinárias' | 'Pet Shops';

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

// Constantes de classificação
const CLASSIFICATION_RULES = {
  veterinary: {
    types: ['clínica veterinária', 'clinica veterinaria', 'veterinária', 'veterinaria'],
    keywords: ['veterinári', 'veterinari', 'clínica vet', 'clinica vet']
  },
  petShop: {
    types: ['pet shop', 'petshop'],
    keywords: ['pet shop', 'petshop', 'banho', 'tosa']
  },
  agricultural: {
    types: ['agropecuária', 'agropecuaria'],
    keywords: ['agropecuári', 'agropecuari', 'ração', 'racao', 'insumo', 'agrícola', 'agricola']
  }
} as const;

// Utilitários
function normalizeText(text: string): string {
  return text.toLowerCase().trim();
}

function buildSearchText(establishment: Establishment): string {
  const parts = [
    establishment.name,
    establishment.category || '',
    establishment.subcategory || '',
    establishment.description || '',
    establishment.tags?.join(' ') || ''
  ];
  return normalizeText(parts.join(' '));
}

function matchesType(type: string, validTypes: readonly string[]): boolean {
  const normalizedType = normalizeText(type);
  return validTypes.some(validType => normalizedType === validType);
}

function containsKeywords(text: string, keywords: readonly string[]): boolean {
  return keywords.some(keyword => text.includes(keyword));
}

function containsPetKeywords(text: string): boolean {
  return text.includes('pet') && (text.includes('banho') || text.includes('tosa'));
}

// Classificação por tipo direto
function classifyByType(type: string): EstablishmentGroup | null {
  if (matchesType(type, CLASSIFICATION_RULES.agricultural.types)) {
    return 'Agropecuárias';
  }
  
  if (matchesType(type, CLASSIFICATION_RULES.veterinary.types)) {
    return 'Clínicas Veterinárias';
  }
  
  if (matchesType(type, CLASSIFICATION_RULES.petShop.types)) {
    return 'Pet Shops';
  }
  
  return null;
}

// Classificação por palavras-chave
function classifyByKeywords(searchText: string): EstablishmentGroup {
  if (containsKeywords(searchText, CLASSIFICATION_RULES.veterinary.keywords)) {
    return 'Clínicas Veterinárias';
  }
  
  if (containsKeywords(searchText, CLASSIFICATION_RULES.petShop.keywords) || containsPetKeywords(searchText)) {
    return 'Pet Shops';
  }
  
  if (containsKeywords(searchText, CLASSIFICATION_RULES.agricultural.keywords)) {
    return 'Agropecuárias';
  }
  
  // Padrão: Agropecuárias
  return 'Agropecuárias';
}

// Função principal de classificação
export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  // Tentar classificar por tipo direto
  const type = establishment.type || '';
  const typeClassification = classifyByType(type);
  if (typeClassification) {
    return typeClassification;
  }
  
  // Classificar por palavras-chave no conteúdo
  const searchText = buildSearchText(establishment);
  return classifyByKeywords(searchText);
}

// Agrupamento de estabelecimentos
export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Agropecuárias': [],
    'Clínicas Veterinárias': [],
    'Pet Shops': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
