export type EstablishmentGroup = 'Oficinas' | 'Auto Peças' | 'Serviços Especializados';

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
    const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();

    if (type === 'auto peças' || searchText.includes('peças') || searchText.includes('autopeças')) {
        return 'Auto Peças';
    }

    if (type === 'especializada' || searchText.includes('freios') || searchText.includes('elétrica') || searchText.includes('pneus') || searchText.includes('ar condicionado')) {
        return 'Serviços Especializados';
    }

    return 'Oficinas';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
    const groups: Record<EstablishmentGroup, Establishment[]> = {
        'Oficinas': [],
        'Auto Peças': [],
        'Serviços Especializados': []
    };

    establishments.forEach(establishment => {
        const group = classifyEstablishment(establishment);
        groups[group].push(establishment);
    });

    return groups;
}
