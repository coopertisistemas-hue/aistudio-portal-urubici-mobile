export type EstablishmentGroup = 'Materiais de Construção' | 'Ferramentas e Equipamentos' | 'Tintas e Acabamentos' | 'Material Elétrico' | 'Material Hidráulico' | 'Outros Materiais';

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
  
  // Materiais de Construção
  if (searchText.match(/\b(cimento|areia|tijolo|telha|bloco|pedra|brita|cal|argamassa|concreto|laje|viga|pilar)\b/)) {
    return 'Materiais de Construção';
  }
  
  // Ferramentas e Equipamentos
  if (searchText.match(/\b(ferramenta|furadeira|serra|martelo|chave|alicate|parafusadeira|esmerilhadeira|equipamento|betoneira|andaime)\b/)) {
    return 'Ferramentas e Equipamentos';
  }
  
  // Tintas e Acabamentos
  if (searchText.match(/\b(tinta|verniz|massa|textura|pintura|acabamento|esmalte|latex|acrilica|selador|primer)\b/)) {
    return 'Tintas e Acabamentos';
  }
  
  // Material Elétrico
  if (searchText.match(/\b(eletric|fio|cabo|tomada|interruptor|lampada|led|disjuntor|quadro|eletrica|voltagem)\b/)) {
    return 'Material Elétrico';
  }
  
  // Material Hidráulico
  if (searchText.match(/\b(hidraulic|cano|tubo|torneira|registro|conexao|encanamento|pvc|esgoto|agua|valvula)\b/)) {
    return 'Material Hidráulico';
  }
  
  return 'Outros Materiais';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
  const groups: Record<EstablishmentGroup, Establishment[]> = {
    'Materiais de Construção': [],
    'Ferramentas e Equipamentos': [],
    'Tintas e Acabamentos': [],
    'Material Elétrico': [],
    'Material Hidráulico': [],
    'Outros Materiais': []
  };
  
  establishments.forEach(establishment => {
    const group = classifyEstablishment(establishment);
    groups[group].push(establishment);
  });
  
  // Ordenar alfabeticamente cada grupo
  Object.keys(groups).forEach((groupKey) => {
    const key = groupKey as EstablishmentGroup;
    groups[key].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  });
  
  return groups;
}
