import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      headers: corsHeaders,
      status: 204 
    });
  }

  try {
    const url = new URL(req.url);
    const subcategory = url.searchParams.get('subcategory');
    const city = url.searchParams.get('city');
    const verified = url.searchParams.get('verified');
    const featured = url.searchParams.get('featured');
    const limit = url.searchParams.get('limit');

    console.log('📋 Parâmetros da requisição:', { subcategory, city, verified, featured, limit });

    // Usar variáveis de ambiente do Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    console.log('🔧 Configuração Supabase:', {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey
    });

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Variáveis de ambiente do Supabase não configuradas');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Configuração do servidor incompleta',
          code: 'SERVER_CONFIG_ERROR'
        }),
        {
          status: 500,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    let query = supabase
      .from('service_establishments')
      .select('*');

    // Aplicar filtros
    if (subcategory) {
      query = query.eq('subcategory', subcategory);
    }

    if (city) {
      query = query.eq('city', city);
    }

    if (verified === 'true') {
      query = query.eq('verified', true);
    }

    if (featured === 'true') {
      query = query.eq('featured', true);
    }

    // Ordenar por nome
    query = query.order('name', { ascending: true });

    // Aplicar limite se especificado
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        query = query.limit(limitNum);
      }
    }

    console.log('🔍 Executando query no banco de dados...');
    const { data, error } = await query;

    if (error) {
      console.error('❌ Erro ao buscar estabelecimentos:', error);
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message,
          code: error.code
        }),
        {
          status: 500,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          },
        }
      );
    }

    console.log(`✅ ${data?.length || 0} estabelecimentos encontrados`);

    return new Response(
      JSON.stringify({
        success: true,
        data: data || [],
        count: data?.length || 0,
        filters: {
          subcategory,
          city,
          verified,
          featured,
          limit
        }
      }),
      {
        status: 200,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // Cache de 5 minutos
        },
      }
    );

  } catch (error) {
    console.error('❌ Erro crítico na API:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Erro interno do servidor',
        code: 'INTERNAL_ERROR',
        stack: error.stack
      }),
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
      }
    );
  }
});