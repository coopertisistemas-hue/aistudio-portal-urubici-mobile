import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
};

const BASE_URL = 'https://urubici.com.br';

interface ScrapedImage {
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

interface ScrapedContact {
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
}

interface ScrapedAddress {
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  fullAddress?: string;
}

interface ScrapedItem {
  name: string;
  description?: string;
  shortDescription?: string;
  address?: ScrapedAddress;
  contact?: ScrapedContact;
  images: ScrapedImage[];
  category?: string;
  subcategory?: string;
  urlOriginal: string;
  slug?: string;
  section: string;
  [key: string]: any;
}

function extractImageUrl(html: string): string | null {
  const srcMatch = html.match(/src=["']([^"']+)["']/);
  if (!srcMatch) return null;
  
  let url = srcMatch[1];
  
  // Se for URL relativa, adiciona o domínio
  if (url.startsWith('/')) {
    url = `${BASE_URL}${url}`;
  }
  
  return url;
}

function extractRating(html: string): number {
  const filledStars = (html.match(/ri-star-fill/g) || []).length;
  const halfStars = (html.match(/ri-star-half/g) || []).length * 0.5;
  return filledStars + halfStars;
}

function extractTags(cardHtml: string): string[] {
  const tags: string[] = [];
  const tagPattern = /<span[^>]*>([^<]+)<\/span>/g;
  let match;
  
  while ((match = tagPattern.exec(cardHtml)) !== null) {
    const tag = match[1].trim();
    if (tag && tag.length > 0 && tag.length < 50 && !tag.includes('ri-')) {
      tags.push(tag);
    }
  }
  
  return tags;
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseCard(cardHtml: string, category: string, section: string): ScrapedItem | null {
  try {
    // Extrai o nome do estabelecimento
    const nameMatch = cardHtml.match(/<h4[^>]*class=["'][^"']*font-bold[^"']*["'][^>]*>([^<]+)<\/h4>/);
    if (!nameMatch) return null;
    
    const name = nameMatch[1].trim();
    if (!name) return null;

    // Extrai a descrição
    const descMatch = cardHtml.match(/<p[^>]*class=["'][^"']*text-white\/80[^"']*["'][^>]*>([^<]+)<\/p>/);
    const description = descMatch ? descMatch[1].trim() : undefined;

    // Extrai a imagem
    const images: ScrapedImage[] = [];
    const imgUrl = extractImageUrl(cardHtml);
    if (imgUrl) {
      images.push({
        url: imgUrl,
        alt: name,
        isPrimary: true,
      });
    }

    // Extrai a categoria/tipo do badge
    const badgeMatch = cardHtml.match(/class=["'][^"']*bg-green-500\/20[^"']*["'][^>]*>([^<]+)<\/div>/);
    const subcategory = badgeMatch ? badgeMatch[1].trim() : category;

    // Extrai tags/características
    const tags = extractTags(cardHtml);

    // Extrai rating se disponível
    const rating = extractRating(cardHtml);

    // Cria URL original baseada no nome
    const slug = createSlug(name);
    const urlOriginal = `${BASE_URL}/${section.replace('_', '-')}/${category.toLowerCase().replace(/\s+/g, '-')}/${slug}`;

    const item: ScrapedItem = {
      name,
      description,
      shortDescription: description ? description.substring(0, 200) : undefined,
      address: {
        city: 'Urubici',
        state: 'SC',
      },
      contact: {},
      images,
      category,
      subcategory,
      urlOriginal,
      slug,
      section,
      tags,
      rating: rating > 0 ? rating : undefined,
    };

    return item;
  } catch (error) {
    console.error('Erro ao parsear card:', error);
    return null;
  }
}

async function scrapeSection(section: string, subcategories: Array<{ url: string; category: string }>) {
  const result = {
    section,
    totalItems: 0,
    successCount: 0,
    errorCount: 0,
    items: [] as ScrapedItem[],
    errors: [] as Array<{ url: string; error: string }>,
  };

  for (const subcategory of subcategories) {
    try {
      console.log(`Fazendo scraping de: ${subcategory.url}`);
      const response = await fetch(subcategory.url);
      if (!response.ok) {
        console.log(`Erro HTTP ${response.status} para ${subcategory.url}`);
        continue;
      }

      const html = await response.text();
      
      // Procura por cards de estabelecimentos
      const cardPattern = /<div[^>]*class=["'][^"']*bg-white\/10[^"']*backdrop-blur-sm[^"']*rounded-2xl[^"']*["'][^>]*>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/g;
      
      const cards = html.match(cardPattern) || [];
      console.log(`Encontrados ${cards.length} cards em ${subcategory.url}`);
      
      result.totalItems += cards.length;

      for (const cardHtml of cards) {
        // Verifica se é um card de estabelecimento (tem título h4)
        if (!cardHtml.includes('<h4')) continue;
        
        const item = parseCard(cardHtml, subcategory.category, section);

        if (item) {
          result.items.push(item);
          result.successCount++;
          console.log(`✓ Extraído: ${item.name}`);
        } else {
          result.errorCount++;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error(`Erro ao processar ${subcategory.url}:`, errorMsg);
      result.errors.push({
        url: subcategory.url,
        error: errorMsg,
      });
    }
  }

  console.log(`Scraping concluído: ${result.successCount} itens extraídos de ${result.totalItems} encontrados`);
  return result;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { section } = await req.json();
    if (!section) throw new Error('Seção não especificada');

    console.log(`Iniciando scraping da seção: ${section}`);

    let subcategories: Array<{ url: string; category: string }> = [];

    switch (section) {
      case 'onde_ir':
        subcategories = [
          { url: `${BASE_URL}/onde-ir/cachoeiras`, category: 'Cachoeiras' },
          { url: `${BASE_URL}/onde-ir/canions-estradas-cenicas`, category: 'Cânions e Estradas Cênicas' },
          { url: `${BASE_URL}/onde-ir/grutas-cavernas`, category: 'Grutas e Cavernas' },
          { url: `${BASE_URL}/onde-ir/mirantes-montanhas`, category: 'Mirantes e Montanhas' },
          { url: `${BASE_URL}/onde-ir/parques-areas-protegidas`, category: 'Parques e Áreas Protegidas' },
          { url: `${BASE_URL}/onde-ir/patrimonio-cultura`, category: 'Patrimônio e Cultura' },
        ];
        break;

      case 'onde_ficar':
        subcategories = [
          { url: `${BASE_URL}/onde-ficar/pousadas`, category: 'Pousadas' },
          { url: `${BASE_URL}/onde-ficar/hoteis`, category: 'Hotéis' },
          { url: `${BASE_URL}/onde-ficar/chales`, category: 'Chalés' },
          { url: `${BASE_URL}/onde-ficar/cabanas`, category: 'Cabanas' },
          { url: `${BASE_URL}/onde-ficar/camping-glamping`, category: 'Camping e Glamping' },
          { url: `${BASE_URL}/onde-ficar/casas-temporada`, category: 'Casas de Temporada' },
          { url: `${BASE_URL}/onde-ficar/hostels`, category: 'Hostels' },
          { url: `${BASE_URL}/onde-ficar/boutique`, category: 'Boutique' },
          { url: `${BASE_URL}/onde-ficar/eco-pousadas-eco-villages`, category: 'Eco Pousadas' },
          { url: `${BASE_URL}/onde-ficar/hospedagem-rural-fazendas`, category: 'Hospedagem Rural' },
          { url: `${BASE_URL}/onde-ficar/lodges`, category: 'Lodges' },
          { url: `${BASE_URL}/onde-ficar/lofts`, category: 'Lofts' },
        ];
        break;

      case 'onde_comer':
        subcategories = [
          { url: `${BASE_URL}/onde-comer/restaurantes`, category: 'Restaurantes' },
          { url: `${BASE_URL}/onde-comer/cafeterias-docerias`, category: 'Cafeterias' },
          { url: `${BASE_URL}/onde-comer/pizzarias`, category: 'Pizzarias' },
          { url: `${BASE_URL}/onde-comer/hamburguerias`, category: 'Hamburguerias' },
          { url: `${BASE_URL}/onde-comer/churrascarias-steakhouse`, category: 'Churrascarias' },
          { url: `${BASE_URL}/onde-comer/cozinha-italiana`, category: 'Italiana' },
          { url: `${BASE_URL}/onde-comer/cozinha-japonesa`, category: 'Japonesa' },
          { url: `${BASE_URL}/onde-comer/fondue-sequencias`, category: 'Fondue' },
          { url: `${BASE_URL}/onde-comer/bistros`, category: 'Bistrôs' },
          { url: `${BASE_URL}/onde-comer/cafe-colonial`, category: 'Café Colonial' },
          { url: `${BASE_URL}/onde-comer/chocolaterias-gelaterias`, category: 'Chocolaterias' },
          { url: `${BASE_URL}/onde-comer/gastrobares-bares`, category: 'Bares' },
          { url: `${BASE_URL}/onde-comer/padarias-confeitarias`, category: 'Padarias' },
        ];
        break;

      case 'o_que_fazer':
        subcategories = [
          { url: `${BASE_URL}/o-que-fazer/aventura-parques`, category: 'Aventura' },
          { url: `${BASE_URL}/o-que-fazer/bem-estar-natureza`, category: 'Bem-estar' },
          { url: `${BASE_URL}/o-que-fazer/cachoeiras-banhos-rio`, category: 'Cachoeiras' },
        ];
        break;

      case 'guia_medico':
        subcategories = [
          { url: `${BASE_URL}/guia-medico/medicos-especialistas`, category: 'Médicos' },
          { url: `${BASE_URL}/guia-medico/odontologia`, category: 'Odontologia' },
          { url: `${BASE_URL}/guia-medico/psicologia-terapias`, category: 'Psicologia' },
          { url: `${BASE_URL}/guia-medico/fisioterapia-reabilitacao`, category: 'Fisioterapia' },
          { url: `${BASE_URL}/guia-medico/farmacias-drogarias`, category: 'Farmácias' },
          { url: `${BASE_URL}/guia-medico/clinicas-centros-diagnostico`, category: 'Clínicas' },
          { url: `${BASE_URL}/guia-medico/academias-fitness`, category: 'Academias' },
        ];
        break;

      default:
        throw new Error(`Seção desconhecida: ${section}`);
    }

    const result = await scrapeSection(section, subcategories);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Erro no scraping:', errorMsg);
    return new Response(
      JSON.stringify({ error: errorMsg }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});