export type EstablishmentGroup = 'Autoescolas' | 'CFC - Centro de Formação de Condutores' | 'Cursos de Direção Defensiva' | 'Outros Serviços';

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
  const searchText = `${establishment.name} ${establishment.type || ''} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''} ${establishment.description || ''}`.toLowerCase();
  
  // CFC - Centro de Formação de Condutores
  if (searchText.match(/\b(cfc|centro de formacao|centro formacao|formacao de condutores)\b/)) {
    return 'CFC - Centro de Formação de Condutores';
  }
  
  // Cursos de Direção Defensiva
  if (searchText.match(/\b(direcao defensiva|direcao segura|curso defensivo|reciclagem|atualizacao)\b/)) {
    return 'Cursos de Direção Defensiva';
  }
  
  // Autoescolas (padrão)
  if (searchText.match(/\b(autoescola|auto escola|escola de direcao|habilitacao|cnh|carteira)\b/)) {
    return 'Autoescolas';
  }
  
  return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Autoescolas': [],
    'CFC - Centro de Formação de Condutores': [],
    'Cursos de Direção Defensiva': [],
    'Outros Serviços': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
