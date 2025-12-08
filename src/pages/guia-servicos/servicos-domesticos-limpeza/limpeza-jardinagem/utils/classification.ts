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
    // 1. Prioridade: Campo explícito de 'type' se existir e for válido
    if (establishment.type && establishment.type.length > 2) {
        // Normalização simples do tipo (Capitalize)
        return establishment.type.charAt(0).toUpperCase() + establishment.type.slice(1).toLowerCase();
    }

    const searchText = `${establishment.name} ${establishment.category || ''} ${establishment.subcategory || ''} ${establishment.tags?.join(' ') || ''}`.toLowerCase();

    // 2. Inferência por palavras-chave

    // Grupo 1: Limpeza Residencial
    if (
        searchText.includes('residencial') ||
        searchText.includes('casa') ||
        searchText.includes('apartamento') ||
        searchText.includes('diarista') ||
        searchText.includes('faxina') ||
        searchText.includes('doméstica') ||
        searchText.includes('domestica')
    ) {
        return 'Limpeza Residencial';
    }

    // Grupo 2: Limpeza Comercial
    if (
        searchText.includes('comercial') ||
        searchText.includes('escritório') ||
        searchText.includes('empresas') ||
        searchText.includes('loja') ||
        searchText.includes('salão') ||
        searchText.includes('salao') ||
        searchText.includes('condomínio') ||
        searchText.includes('condominio')
    ) {
        return 'Limpeza Comercial';
    }

    // Grupo 3: Jardinagem e Paisagismo
    if (
        searchText.includes('jardinagem') ||
        searchText.includes('paisagismo') ||
        searchText.includes('jardim') ||
        searchText.includes('poda') ||
        searchText.includes('gramado') ||
        searchText.includes('grama') ||
        searchText.includes('viveiro')
    ) {
        return 'Jardinagem e Paisagismo';
    }

    // Grupo 4: Serviços Especiais
    if (
        searchText.includes('pós-obra') ||
        searchText.includes('pos-obra') ||
        searchText.includes('profunda') ||
        searchText.includes('higienização') ||
        searchText.includes('higienizacao') ||
        searchText.includes('sanitização') ||
        searchText.includes('sanitizacao') ||
        searchText.includes('dedetização') ||
        searchText.includes('dedetizacao') ||
        searchText.includes('impermeabilização') ||
        searchText.includes('impermeabilizacao')
    ) {
        return 'Serviços Especiais';
    }

    // 3. Fallback genérico
    return 'Outros Serviços';
}

export function groupEstablishments(establishments: Establishment[]): Record<string, Establishment[]> {
    const groups: Record<string, Establishment[]> = {};

    // 1. Agrupar
    establishments.forEach(establishment => {
        const group = classifyEstablishment(establishment);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(establishment);
    });

    // 2. Ordenar estabelecimentos dentro de cada grupo alfabeticamente
    Object.keys(groups).forEach(group => {
        groups[group].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    });

    return groups;
}
