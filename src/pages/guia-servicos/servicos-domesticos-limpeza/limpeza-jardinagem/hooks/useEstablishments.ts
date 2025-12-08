import { useState, useEffect } from 'react';
import { Establishment } from '../utils/classification';

export const useEstablishments = () => {
    const [establishments, setEstablishments] = useState<Establishment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEstablishments = async () => {
            try {
                console.log('🚀 INÍCIO - Buscando estabelecimentos via Edge Function (pública)...');

                const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;

                if (!supabaseUrl) {
                    console.error('❌ VITE_PUBLIC_SUPABASE_URL não configurada');
                    setEstablishments([]);
                    return;
                }

                // Montar URL da API
                const baseUrl = supabaseUrl.replace(/\/$/, '');
                const apiUrl = `${baseUrl}/functions/v1/public-services-api?subcategory=limpeza-jardinagem&city=Urubici`;

                console.log('  🌐 URL:', apiUrl);

                // Fazer requisição sem API Key (função pública)
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('❌ Erro na resposta:', errorText);
                    throw new Error(`HTTP ${response.status}: ${errorText}`);
                }

                const result = await response.json();

                if (!result.success || !result.data) {
                    console.error('❌ Resposta inválida:', result);
                    throw new Error(result.error || 'Resposta inválida da API');
                }

                // Ordenar por nome
                const sortedData = [...result.data].sort((a: Establishment, b: Establishment) => {
                    const nameA = a.name || '';
                    const nameB = b.name || '';
                    return nameA.localeCompare(nameB, 'pt-BR');
                });

                console.log('✅ SUCESSO - Estabelecimentos carregados:', sortedData.length);
                setEstablishments(sortedData);

            } catch (error) {
                console.error('💥 ERRO ao carregar estabelecimentos:', error);
                setEstablishments([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEstablishments();
    }, []);

    return { establishments, loading };
};
