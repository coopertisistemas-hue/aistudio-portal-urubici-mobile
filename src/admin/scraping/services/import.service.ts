import { supabase } from '../../../lib/supabase';
import type { ScrapedPlace, ScrapedEstablishment, ScrapedMedicalEstablishment } from '../types/scraping.types';
import { mapToPlace } from '../mappers/place.mapper';
import { mapToEstablishment, mapToMedicalEstablishment } from '../mappers/establishment.mapper';

export interface ImportResult {
  inserted: number;
  updated: number;
  errors: number;
  errorMessages: string[];
}

/**
 * Gera um slug base a partir do nome
 */
function generateBaseSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Gera um slug único verificando o Set de slugs existentes
 * @param baseSlug - Slug base gerado a partir do nome
 * @param existingSlugs - Set contendo todos os slugs já existentes
 * @returns Slug único que não existe no Set
 */
function generateUniqueSlug(baseSlug: string, existingSlugs: Set<string>): string {
  // Se o slug base está livre, usa ele
  if (!existingSlugs.has(baseSlug)) {
    existingSlugs.add(baseSlug);
    console.log(`✅ Slug base disponível: ${baseSlug}`);
    return baseSlug;
  }
  
  // Encontra o próximo número disponível
  let counter = 1;
  let slug = `${baseSlug}-${counter}`;
  
  while (existingSlugs.has(slug)) {
    counter++;
    slug = `${baseSlug}-${counter}`;
    
    // Fallback: se passar de 1000 tentativas, adiciona timestamp
    if (counter > 1000) {
      slug = `${baseSlug}-${Date.now()}`;
      console.log(`⚠️ Muitas tentativas, usando timestamp: ${slug}`);
      break;
    }
  }
  
  // Adiciona o slug ao Set IMEDIATAMENTE
  existingSlugs.add(slug);
  console.log(`✅ Slug único gerado: ${slug}`);
  return slug;
}

/**
 * Importa lugares (Onde Ir) para a tabela places
 */
export async function importPlaces(items: ScrapedPlace[]): Promise<ImportResult> {
  const result: ImportResult = {
    inserted: 0,
    updated: 0,
    errors: 0,
    errorMessages: []
  };

  console.log(`🚀 Iniciando importação de ${items.length} lugares...`);

  // Processa sequencialmente para evitar condições de corrida
  for (const item of items) {
    try {
      const mapped = mapToPlace(item);
      console.log(`\n📍 Processando: ${mapped.name}`);
      
      // Verifica se já existe pelo nome
      const { data: existing, error: selectError } = await supabase
        .from('places')
        .select('id, slug')
        .eq('name', mapped.name)
        .maybeSingle();

      if (selectError) {
        console.error('❌ Erro ao verificar existência:', selectError);
        result.errors++;
        result.errorMessages.push(`${mapped.name}: ${selectError.message}`);
        continue;
      }

      if (existing) {
        // Atualiza registro existente
        console.log(`🔄 Atualizando lugar existente: ${mapped.name}`);
        
        const { error } = await supabase
          .from('places')
          .update(mapped)
          .eq('id', existing.id);

        if (error) {
          console.error('❌ Erro ao atualizar:', error);
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.updated++;
          console.log(`✅ Atualizado: ${mapped.name}`);
        }
      } else {
        // Gera slug único consultando o banco
        const uniqueSlug = await generateUniqueSlug(mapped.slug, 'places');
        const dataToInsert = { ...mapped, slug: uniqueSlug };
        
        console.log(`➕ Inserindo novo lugar: ${mapped.name} (slug: ${uniqueSlug})`);
        const { error } = await supabase
          .from('places')
          .insert(dataToInsert);

        if (error) {
          console.error('❌ Erro ao inserir:', error);
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.inserted++;
          console.log(`✅ Inserido: ${mapped.name}`);
        }
      }
    } catch (error) {
      console.error('❌ Erro ao processar item:', error);
      result.errors++;
      result.errorMessages.push(`Erro ao processar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  console.log('\n🏁 Importação concluída:', result);
  return result;
}

/**
 * Importa estabelecimentos (Onde Ficar, Onde Comer, O que Fazer) para a tabela establishments
 */
export async function importEstablishments(items: ScrapedEstablishment[]): Promise<ImportResult> {
  const result: ImportResult = {
    inserted: 0,
    updated: 0,
    errors: 0,
    errorMessages: []
  };

  console.log(`🚀 Iniciando importação de ${items.length} estabelecimentos...`);

  // Busca o city_id de Urubici
  const { data: city, error: cityError } = await supabase
    .from('cities')
    .select('id, name, state')
    .eq('name', 'Urubici')
    .limit(1)
    .single();

  if (cityError || !city) {
    console.error('❌ Erro ao buscar cidade Urubici:', cityError);
    result.errors = items.length;
    result.errorMessages.push('Cidade Urubici não encontrada no banco de dados');
    return result;
  }

  console.log(`📍 Usando cidade: ${city.name} (ID: ${city.id})`);
  const cityId = city.id;

  // Processa sequencialmente
  for (const item of items) {
    try {
      const mapped = mapToEstablishment(item, cityId);
      console.log(`\n🏢 Processando: ${mapped.name}`);
      
      // Verifica se já existe pelo nome e cidade
      const { data: existing, error: selectError } = await supabase
        .from('establishments')
        .select('id, slug')
        .eq('name', mapped.name)
        .eq('city_id', cityId)
        .maybeSingle();

      if (selectError) {
        console.error('❌ Erro ao verificar existência:', selectError);
        result.errors++;
        result.errorMessages.push(`${mapped.name}: ${selectError.message}`);
        continue;
      }

      if (existing) {
        // Atualiza registro existente
        console.log(`🔄 Atualizando estabelecimento existente: ${mapped.name}`);
        
        const { error } = await supabase
          .from('establishments')
          .update(mapped)
          .eq('id', existing.id);

        if (error) {
          console.error('❌ Erro ao atualizar:', error);
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.updated++;
          console.log(`✅ Atualizado: ${mapped.name}`);
        }
      } else {
        // Gera slug único consultando o banco
        const uniqueSlug = await generateUniqueSlug(mapped.slug, 'establishments');
        const dataToInsert = { ...mapped, slug: uniqueSlug };
        
        console.log(`➕ Inserindo novo estabelecimento: ${mapped.name} (slug: ${uniqueSlug})`);
        const { error } = await supabase
          .from('establishments')
          .insert(dataToInsert);

        if (error) {
          console.error('❌ Erro ao inserir:', error);
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.inserted++;
          console.log(`✅ Inserido: ${mapped.name}`);
        }
      }
    } catch (error) {
      console.error('❌ Erro ao processar item:', error);
      result.errors++;
      result.errorMessages.push(`Erro ao processar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  }

  console.log('\n🏁 Importação concluída:', result);
  return result;
}

/**
 * Importa estabelecimentos médicos (Guia Médico) para a tabela medical_establishments
 */
export async function importMedicalEstablishments(items: ScrapedMedicalEstablishment[]): Promise<ImportResult> {
  const result: ImportResult = {
    inserted: 0,
    updated: 0,
    errors: 0,
    errorMessages: []
  };

  console.log(`🚀 Iniciando importação de ${items.length} estabelecimentos médicos...`);

  // 1) PRÉ-CARREGA TODOS OS SLUGS EXISTENTES NO BANCO
  console.log(`📦 Carregando slugs existentes da tabela medical_establishments...`);
  const { data: existingRecords, error: loadError } = await supabase
    .from('medical_establishments')
    .select('slug');

  if (loadError) {
    console.error('❌ Erro ao carregar slugs existentes:', loadError);
    result.errors = items.length;
    result.errorMessages.push(`Erro ao carregar slugs: ${loadError.message}`);
    return result;
  }

  // Armazena todos os slugs em um Set para consulta rápida
  const existingSlugs = new Set<string>(existingRecords?.map(r => r.slug) || []);
  console.log(`✓ ${existingSlugs.size} slugs carregados no cache local`);

  // 2) PROCESSA SEQUENCIALMENTE (um por vez, sem Promise.all)
  for (const item of items) {
    try {
      const mapped = mapToMedicalEstablishment(item);
      console.log(`\n🏥 Processando: ${mapped.name}`);
      
      // Valida campos obrigatórios
      if (!mapped.name || !mapped.name.trim()) {
        console.error('❌ Nome inválido ou vazio');
        result.errors++;
        result.errorMessages.push('Nome inválido ou vazio');
        continue;
      }
      
      if (!mapped.type || !mapped.type.trim()) {
        console.error('❌ Tipo inválido ou vazio');
        result.errors++;
        result.errorMessages.push(`${mapped.name}: Tipo inválido ou vazio`);
        continue;
      }
      
      if (!mapped.address || !mapped.address.trim()) {
        console.error('❌ Endereço inválido ou vazio');
        result.errors++;
        result.errorMessages.push(`${mapped.name}: Endereço inválido ou vazio`);
        continue;
      }
      
      // 3) VERIFICA SE JÁ EXISTE PELO NOME (não pelo slug)
      const { data: existing, error: selectError } = await supabase
        .from('medical_establishments')
        .select('id, slug')
        .eq('name', mapped.name)
        .maybeSingle();

      if (selectError) {
        console.error('❌ Erro ao verificar existência:', selectError);
        result.errors++;
        result.errorMessages.push(`${mapped.name}: ${selectError.message}`);
        continue;
      }

      if (existing) {
        // 4) ATUALIZA registro existente mantendo o slug original
        console.log(`🔄 Atualizando estabelecimento médico existente: ${mapped.name} (slug: ${existing.slug})`);
        
        // Remove o slug do objeto de atualização para não sobrescrever
        const { slug: _, ...updateData } = mapped;
        
        const { error } = await supabase
          .from('medical_establishments')
          .update(updateData)
          .eq('id', existing.id);

        if (error) {
          console.error('❌ Erro ao atualizar:', error);
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.updated++;
          console.log(`✅ Atualizado: ${mapped.name}`);
        }
      } else {
        // 5) INSERE novo registro com slug único
        // Gera slug base a partir do nome
        const baseSlug = generateBaseSlug(mapped.name);
        console.log(`🔍 Slug base gerado: ${baseSlug}`);
        
        // Gera slug único usando o Set local
        const uniqueSlug = generateUniqueSlug(baseSlug, existingSlugs);
        const dataToInsert = { ...mapped, slug: uniqueSlug };
        
        // Log detalhado dos dados antes de inserir
        console.log(`➕ Inserindo novo estabelecimento médico:`);
        console.log(`   Nome: ${dataToInsert.name}`);
        console.log(`   Slug: ${dataToInsert.slug}`);
        console.log(`   Tipo: ${dataToInsert.type}`);
        console.log(`   Endereço: ${dataToInsert.address}`);
        
        // Tenta inserir
        const { error, data } = await supabase
          .from('medical_establishments')
          .insert(dataToInsert)
          .select();

        if (error) {
          console.error('❌ Erro ao inserir:', error);
          console.error('📋 Código do erro:', error.code);
          console.error('📋 Mensagem:', error.message);
          
          // Remove do Set em caso de erro para permitir retry
          existingSlugs.delete(uniqueSlug);
          
          result.errors++;
          result.errorMessages.push(`${mapped.name}: ${error.message}`);
        } else {
          result.inserted++;
          console.log(`✅ Inserido com sucesso: ${mapped.name} (ID: ${data?.[0]?.id})`);
        }
      }
    } catch (error) {
      console.error('❌ Erro ao processar item:', error);
      result.errors++;
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      result.errorMessages.push(`Erro ao processar: ${errorMessage}`);
    }
  }

  console.log('\n🏁 Importação concluída:', result);
  return result;
}
