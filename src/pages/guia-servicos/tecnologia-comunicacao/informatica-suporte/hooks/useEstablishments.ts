import { useState, useEffect } from 'react';
import { Establishment } from '../utils/classification';

export const useEstablishments = () => {
    const [establishments, setEstablishments] = useState<Establishment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEstablishments = async () => {
            try {
                console.log('🚀 INÍCIO - Buscando estabelecimentos de Informática...');

                const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
                if (!supabaseUrl) {
                    console.error('❌ VITE_PUBLIC_SUPABASE_URL não configurada');
                    setEstablishments([]);
                    return;
                }

                // URL da API
                const baseUrl = supabaseUrl.replace(/\/$/, '');
                const apiUrl = `${baseUrl}/functions/v1/public-services-api?subcategory=informatica-suporte&city=Urubici`;

                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const result = await response.json();

                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Resposta inválida da API');
                }

                // Ordenar por nome
                const sortedData = [...result.data].sort((a: Establishment, b: Establishment) => {
                    return (a.name || '').localeCompare(b.name || '', 'pt-BR');
                });

                setEstablishments(sortedData);

            } catch (error) {
                console.error('💥 ERRO:', error);
                setEstablishments([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEstablishments();
    }, []);

    return { establishments, loading };
};
