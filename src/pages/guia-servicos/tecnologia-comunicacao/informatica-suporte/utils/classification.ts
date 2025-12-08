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

export function classifyEstablishment(establishment: Establishment): string {
    const searchText = `${establishment.name} ${establishment.type || ''} ${establishment.description || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();

    // Grupo 1: Assistência Técnica (Reparos)
    if (
        searchText.includes('assistência') ||
        searchText.includes('assistencia') ||
        searchText.includes('conserto') ||
        searchText.includes('reparo') ||
        searchText.includes('manutenção') ||
        searchText.includes('manutencao') ||
        searchText.includes('formatar') ||
        searchText.includes('formatação') ||
        searchText.includes('técnico')
    ) {
        return 'Assistência Técnica';
    }

    // Grupo 2: Internet e Redes (Provedores)
    if (
        searchText.includes('internet') ||
        searchText.includes('fibra') ||
        searchText.includes('provedor') ||
        searchText.includes('rede') ||
        searchText.includes('wifi') ||
        searchText.includes('wi-fi') ||
        searchText.includes('conexão')
    ) {
        return 'Internet e Redes';
    }

    // Grupo 3: Venda de Equipamentos e Acessórios
    if (
        searchText.includes('loja') ||
        searchText.includes('venda') ||
        searchText.includes('acessórios') ||
        searchText.includes('acessorios') ||
        searchText.includes('celular') ||
        searchText.includes('smartphone') ||
        searchText.includes('computador') ||
        searchText.includes('notebook') ||
        searchText.includes('impressora') ||
        searchText.includes('cartucho') ||
        searchText.includes('toner')
    ) {
        return 'Vendas e Acessórios';
    }

    // Grupo 4: Serviços Digitais (Software, Web, Design)
    if (
        searchText.includes('software') ||
        searchText.includes('sistema') ||
        searchText.includes('site') ||
        searchText.includes('web') ||
        searchText.includes('design') ||
        searchText.includes('marketing') ||
        searchText.includes('digital') ||
        searchText.includes('app') ||
        searchText.includes('aplicativo')
    ) {
        return 'Serviços Digitais';
    }

    // Fallback
    return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<string, Establishment[]> {
    const groups: Record<string, Establishment[]> = {};

    establishments.forEach(establishment => {
        const group = classifyEstablishment(establishment);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(establishment);
    });

    // Ordenar por nome
    Object.keys(groups).forEach(group => {
        groups[group].sort((a, b) => (a.name || '').localeCompare(b.name || '', 'pt-BR'));
    });

    return groups;
}
