export type EstablishmentGroup =
    | 'Lavanderias'
    | 'Costureiras e Ateliês'
    | 'Tinturarias'
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

    // Lavanderias
    if (text.match(/lavanderia|lave|lavagem|seco|higiene|roupa|limpeza/)) {
        return 'Lavanderias';
    }

    // Costura e Ateliês
    if (text.match(/costura|costureira|ateliê|atelie|ajuste|bainha|reparo|alfaiate|confecção|confeccao/)) {
        return 'Costureiras e Ateliês';
    }

    // Tinturarias
    if (text.match(/tinturaria|tingimento|tingir|coloração de tecidos/)) {
        return 'Tinturarias';
    }

    return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<EstablishmentGroup, Establishment[]> {
    const groups: Record<EstablishmentGroup, Establishment[]> = {
        'Lavanderias': [],
        'Costureiras e Ateliês': [],
        'Tinturarias': [],
        'Outros Serviços': []
    };

    establishments.forEach(establishment => {
        const group = classifyEstablishment(establishment);
        groups[group].push(establishment);
    });

    return groups;
}
