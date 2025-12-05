export type EstablishmentGroup = 'Cursos Técnicos' | 'Cursos de Informática' | 'Cursos de Idiomas' | 'Cursos de Beleza e Estética' | 'Cursos de Gastronomia' | 'Outros Cursos';

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
  
  if (type === 'curso técnico' || type === 'curso tecnico') {
    return 'Cursos Técnicos';
  }
  
  if (type === 'curso de informática' || type === 'curso de informatica') {
    return 'Cursos de Informática';
  }
  
  if (type === 'curso de idiomas') {
    return 'Cursos de Idiomas';
  }
  
  if (type === 'curso de beleza' || type === 'curso de estética' || type === 'curso de estetica') {
    return 'Cursos de Beleza e Estética';
  }
  
  if (type === 'curso de gastronomia') {
    return 'Cursos de Gastronomia';
  }
  
  const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();
  
  // Cursos Técnicos
  if (searchText.includes('senai') || searchText.includes('senac') || searchText.includes('técnico') || searchText.includes('tecnico') || 
      searchText.includes('mecânica') || searchText.includes('mecanica') || searchText.includes('enfermagem') || 
      searchText.includes('eletrônica') || searchText.includes('eletronica') || searchText.includes('eletrotécnica') || 
      searchText.includes('eletrotecnica')) {
    return 'Cursos Técnicos';
  }
  
  // Cursos de Informática
  if (searchText.includes('informática') || searchText.includes('informatica') || searchText.includes('programação') || 
      searchText.includes('programacao') || searchText.includes('design') || searchText.includes('office') || 
      searchText.includes('computador') || searchText.includes('ti ') || searchText.includes('web')) {
    return 'Cursos de Informática';
  }
  
  // Cursos de Idiomas
  if (searchText.includes('idioma') || searchText.includes('inglês') || searchText.includes('ingles') || 
      searchText.includes('espanhol') || searchText.includes('francês') || searchText.includes('frances') || 
      searchText.includes('alemão') || searchText.includes('alemao') || searchText.includes('língua') || 
      searchText.includes('lingua')) {
    return 'Cursos de Idiomas';
  }
  
  // Cursos de Beleza e Estética
  if (searchText.includes('beleza') || searchText.includes('estética') || searchText.includes('estetica') || 
      searchText.includes('cabeleireiro') || searchText.includes('manicure') || searchText.includes('maquiagem') || 
      searchText.includes('depilação') || searchText.includes('depilacao') || searchText.includes('massagem')) {
    return 'Cursos de Beleza e Estética';
  }
  
  // Cursos de Gastronomia
  if (searchText.includes('gastronomia') || searchText.includes('culinária') || searchText.includes('culinaria') || 
      searchText.includes('confeitaria') || searchText.includes('panificação') || searchText.includes('panificacao') || 
      searchText.includes('cozinha') || searchText.includes('chef')) {
    return 'Cursos de Gastronomia';
  }
  
  return 'Outros Cursos';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Cursos Técnicos': [],
    'Cursos de Informática': [],
    'Cursos de Idiomas': [],
    'Cursos de Beleza e Estética': [],
    'Cursos de Gastronomia': [],
    'Outros Cursos': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  return groups;
}
