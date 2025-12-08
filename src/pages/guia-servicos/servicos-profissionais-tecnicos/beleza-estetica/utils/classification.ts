export type EstablishmentGroup =
  | 'Salões de Beleza'
  | 'Barbearias'
  | 'Manicures e Esmalterias'
  | 'Clínicas de Estética'
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
  image_url?: string | null;
}

export function classifyEstablishment(establishment: Establishment): EstablishmentGroup {
  const text = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();

  if (text.match(/barbearia|barbeiro|barba|corte masculino|grooming/)) {
    return 'Barbearias';
  }

  if (text.match(/manicure|pedicure|unha|esmalteria|nail|alongamento/)) {
    return 'Manicures e Esmalterias';
  }

  if (text.match(/estética|estetica|massagem|depilação|depilacao|limpeza de pele|spa|sobrancelha|cílios|cilios|biomedicina|botox|preenchimento/)) {
    return 'Clínicas de Estética';
  }

  if (text.match(/salão|salao|corte|cabelo|cabeleireiro|coiffeur|mechas|luzes|coloração/)) {
    return 'Salões de Beleza';
  }

  return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Salões de Beleza': [],
    'Barbearias': [],
    'Manicures e Esmalterias': [],
    'Clínicas de Estética': [],
    'Outros Serviços': []
  };

  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });

  return groups;
}