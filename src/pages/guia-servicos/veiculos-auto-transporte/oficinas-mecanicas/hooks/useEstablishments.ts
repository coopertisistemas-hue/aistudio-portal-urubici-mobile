import { useState, useEffect } from 'react';

export interface Establishment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string | null;
  address: string | null;
  city: string;
  state: string;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  opening_hours: string | null;
  image_url: string | null;
  verified: boolean;
  featured: boolean;
  rating: number | null;
  created_at: string;
  updated_at: string;
}

export const useEstablishments = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstablishments = async () => {
      try {
        console.log('🚀 INÍCIO - Buscando estabelecimentos via Edge Function (pública)...');

        console.log('📍 PASSO 1 - Verificando configuração...');
        const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;

        if (!supabaseUrl) {
          console.error('❌ VITE_PUBLIC_SUPABASE_URL não configurada');
          setEstablishments([]);
          return;
        }

        console.log('  🌐 Supabase URL: Configurada');

        // Montar URL da API
        const baseUrl = supabaseUrl.replace(/\/$/, '');
        const apiUrl = `${baseUrl}/functions/v1/public-services-api?subcategory=oficinas-mecanicas&city=Urubici`;

        console.log('📍 PASSO 2 - Preparando requisição...');
        console.log('  🌐 URL:', apiUrl);

        // Fazer requisição sem API Key (função pública)
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('📍 PASSO 3 - Resposta recebida');
        console.log('  📡 Status:', response.status);
        console.log('  📡 OK?:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ Erro na resposta:', errorText);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const result = await response.json();

        console.log('📍 PASSO 4 - Processando dados...');
        console.log('  ✅ Sucesso:', result.success);
        console.log('  📊 Total:', result.count);

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

        console.log('✅ SUCESSO - Estabelecimentos carregados');
        console.log('📋 Estabelecimentos:', sortedData.map((e: Establishment) => e.name));
        setEstablishments(sortedData);

      } catch (error) {
        console.error('💥 ERRO ao carregar estabelecimentos:', error);
        console.error('  🔴 Tipo:', typeof error);
        console.error('  🔴 Mensagem:', error instanceof Error ? error.message : String(error));
        setEstablishments([]);
      } finally {
        console.log('🏁 FINALIZANDO');
        setLoading(false);
      }
    };

    fetchEstablishments();
  }, []);

  return { establishments, loading };
};
