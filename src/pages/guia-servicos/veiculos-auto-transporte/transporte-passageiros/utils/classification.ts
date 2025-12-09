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

    // Grupo 1: Táxis e Motoristas de App
    if (
        searchText.includes('táxi') ||
        searchText.includes('taxi') ||
        searchText.includes('motorista') ||
        searchText.includes('uber') ||
        searchText.includes('99') ||
        searchText.includes('corrida')
    ) {
        return 'Táxis e Motoristas';
    }

    // Grupo 2: Transfer e Receptivo (Turismo)
    if (
        searchText.includes('transfer') ||
        searchText.includes('receptivo') ||
        searchText.includes('van') ||
        searchText.includes('translado') ||
        searchText.includes('turismo') ||
        searchText.includes('viagem') ||
        searchText.includes('excursão')
    ) {
        return 'Transfer e Receptivo';
    }

    // Grupo 3: Aluguel de Veículos
    if (
        searchText.includes('aluguel') ||
        searchText.includes('locadora') ||
        searchText.includes('locação') ||
        searchText.includes('carro')
    ) {
        return 'Aluguel de Veículos';
    }

    // Grupo 4: Ônibus e Rodoviária
    if (
        searchText.includes('ônibus') ||
        searchText.includes('onibus') ||
        searchText.includes('rodoviária') ||
        searchText.includes('rodoviaria') ||
        searchText.includes('passagem')
    ) {
        return 'Ônibus e Rodoviária';
    }

    // Fallback
    return 'Outros Transportes';
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
