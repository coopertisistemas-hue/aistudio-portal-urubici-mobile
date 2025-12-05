import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ScrapedEstablishment {
  name: string;
  description?: string;
  image?: string;
  tags?: string[];
  rating?: number;
  category: string;
  subcategory: string;
  type?: string;
}

function classifyEstablishment(name: string, description: string = ''): string {
  const text = `${name} ${description}`.toLowerCase();
  
  if (text.includes('supermercado')) return 'supermercado';
  if (text.includes('mini mercado') || text.includes('minimercado') || text.includes('mini-mercado')) return 'minimercado';
  if (text.includes('mercearia') || text.includes('mercado de bairro')) return 'mercearia';
  
  return 'supermercado'; // default
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function scrapeEstablishments(): Promise<ScrapedEstablishment[]> {
  const establishments: ScrapedEstablishment[] = [];
  
  const urls = [
    'https://www.urubici.com.br/guia-servicos/comercio-geral-varejo/supermercados-mercearias',
    'https://www.urubici.com.br/guia-servicos/comercio-geral-varejo'
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      
      // Extrai estabelecimentos do HTML
      const cardRegex = /<div[^>]*class="[^"]*card[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
      const matches = html.matchAll(cardRegex);
      
      for (const match of matches) {
        const cardHtml = match[1];
        
        // Extrai nome
        const nameMatch = cardHtml.match(/<h[23][^>]*>(.*?)<\/h[23]>/i);
        if (!nameMatch) continue;
        
        const name = nameMatch[1].replace(/<[^>]*>/g, '').trim();
        if (!name || name.length < 3) continue;
        
        // Extrai descrição
        const descMatch = cardHtml.match(/<p[^>]*>(.*?)<\/p>/i);
        const description = descMatch ? descMatch[1].replace(/<[^>]*>/g, '').trim() : '';
        
        // Extrai imagem
        const imgMatch = cardHtml.match(/src="([^"]*\.(jpg|jpeg|png|webp)[^"]*)"/i);
        const image = imgMatch ? imgMatch[1] : undefined;
        
        // Extrai tags
        const tagsMatch = cardHtml.match(/class="[^"]*tag[^"]*"[^>]*>(.*?)<\//gi);
        const tags = tagsMatch ? tagsMatch.map(t => t.replace(/<[^>]*>/g, '').trim()).filter(t => t) : [];
        
        // Classifica o estabelecimento
        const subcategory = classifyEstablishment(name, description);
        
        establishments.push({
          name,
          description: description || undefined,
          image,
          tags: tags.length > 0 ? tags : undefined,
          category: 'comercio',
          subcategory,
          type: subcategory
        });
      }
    } catch (error) {
      console.error(`Erro ao fazer scraping de ${url}:`, error);
    }
  }
  
  // Remove duplicatas baseado no nome
  const unique = establishments.filter((est, index, self) =>
    index === self.findIndex(e => e.name.toLowerCase() === est.name.toLowerCase())
  );
  
  return unique;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Iniciando scraping de estabelecimentos...');
    const establishments = await scrapeEstablishments();
    console.log(`Encontrados ${establishments.length} estabelecimentos`);

    let inserted = 0;
    let updated = 0;
    let errors = 0;

    for (const est of establishments) {
      try {
        const slug = generateSlug(est.name);
        
        // Verifica se já existe
        const { data: existing } = await supabase
          .from('service_establishments')
          .select('id')
          .eq('name', est.name)
          .single();

        const establishmentData = {
          name: est.name,
          slug,
          description: est.description,
          image: est.image,
          tags: est.tags,
          rating: est.rating,
          category: est.category,
          subcategory: est.subcategory,
          type: est.type,
          status: 'active',
          city: 'Urubici',
          state: 'SC',
          country: 'Brasil'
        };

        if (existing) {
          // Atualiza
          const { error } = await supabase
            .from('service_establishments')
            .update(establishmentData)
            .eq('id', existing.id);
          
          if (error) throw error;
          updated++;
        } else {
          // Insere
          const { error } = await supabase
            .from('service_establishments')
            .insert(establishmentData);
          
          if (error) throw error;
          inserted++;
        }
      } catch (error) {
        console.error(`Erro ao processar ${est.name}:`, error);
        errors++;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Importação concluída',
        stats: {
          total: establishments.length,
          inserted,
          updated,
          errors
        },
        establishments: establishments.map(e => ({
          name: e.name,
          subcategory: e.subcategory
        }))
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Erro na importação:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});