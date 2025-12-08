export type EstablishmentGroup = 'Postos 24h' | 'Com Conveniência' | 'Na Rodovia';

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
    const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''} ${establishment.description || ''} ${establishment.services_offered?.join(' ') || ''}`.toLowerCase();

    if (searchText.includes('24h') || searchText.includes('24 horas')) {
        return 'Postos 24h';
    }

    if (searchText.includes('conveniência') || searchText.includes('loja') || type.includes('conveniência')) {
        return 'Com Conveniência';
    }

    return 'Na Rodovia';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
    const groups: Record<EstablishmentGroup, Establishment[]> = {
        'Postos 24h': [],
        'Com Conveniência': [],
        'Na Rodovia': []
    };

    establishments.forEach(establishment => {
        const group = classifyEstablishment(establishment);
        groups[group].push(establishment);
    });

    return groups;
}
