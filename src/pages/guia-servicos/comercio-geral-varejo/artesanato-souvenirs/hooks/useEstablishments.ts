
import { useState, useEffect } from 'react';

export interface Establishment {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string | null;
  address: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  opening_hours: string | null;
  image_url: string | null;
  rating: number | null;
  review_count: number | null;
  city: string;
  is_featured: boolean;
  is_partner: boolean;
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

        // Verificar configuração
        console.log('📍 PASSO 1 - Verificando configuração...');
        const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;

        if (!supabaseUrl) {
          throw new Error('❌ VITE_PUBLIC_SUPABASE_URL não configurada');
        }

        console.log('  🌐 Supabase URL: Configurada');

        // Montar URL da API
        const baseUrl = supabaseUrl.replace(/\/$/, '');
        const apiUrl = `${baseUrl}/functions/v1/public-services-api?subcategory=artesanato-souvenirs&city=Urubici`;

        console.log('📍 PASSO 2 - Preparando requisição...');
        console.log('  🌐 URL:', apiUrl);

        // Fazer requisição sem API Key
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
          console.error('  ❌ Erro na resposta:', errorText);
          throw new Error(`Erro HTTP: ${response.status} - ${errorText}`);
        }

        console.log('📍 PASSO 4 - Processando dados...');
        const data = await response.json();
        console.log('  ✅ Sucesso:', data.success);
        console.log('  📊 Total:', data.total);

        if (data.success && Array.isArray(data.data)) {
          console.log('✅ SUCESSO - Estabelecimentos carregados');
          console.log('  📋 Estabelecimentos:', data.data.map((e: Establishment) => e.name));
          setEstablishments(data.data);
        } else {
          console.warn('⚠️ Resposta sem dados válidos');
          setEstablishments([]);
        }
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
