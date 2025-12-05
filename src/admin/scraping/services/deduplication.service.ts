/**
 * Serviço de deduplicação para evitar registros duplicados
 */

interface DeduplicationKey {
  name: string;
  address?: string;
  urlOriginal?: string;
}

/**
 * Gera uma chave única para comparação
 */
export function generateDeduplicationKey(item: DeduplicationKey): string {
  const normalizedName = normalizeName(item.name);
  const normalizedAddress = item.address ? normalizeAddress(item.address) : '';
  
  return `${normalizedName}|${normalizedAddress}`;
}

/**
 * Normaliza nome para comparação
 */
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normaliza endereço para comparação
 */
function normalizeAddress(address: string): string {
  return address
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Compara dois itens para verificar se são duplicados
 */
export function isDuplicate(item1: DeduplicationKey, item2: DeduplicationKey): boolean {
  // Compara por URL original se disponível
  if (item1.urlOriginal && item2.urlOriginal) {
    return item1.urlOriginal === item2.urlOriginal;
  }
  
  // Compara por nome e endereço
  const key1 = generateDeduplicationKey(item1);
  const key2 = generateDeduplicationKey(item2);
  
  return key1 === key2;
}

/**
 * Calcula similaridade entre dois textos (0-1)
 */
export function calculateSimilarity(text1: string, text2: string): number {
  const normalized1 = normalizeName(text1);
  const normalized2 = normalizeName(text2);
  
  if (normalized1 === normalized2) return 1;
  
  // Algoritmo de Levenshtein simplificado
  const longer = normalized1.length > normalized2.length ? normalized1 : normalized2;
  const shorter = normalized1.length > normalized2.length ? normalized2 : normalized1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

/**
 * Calcula distância de Levenshtein entre dois textos
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

/**
 * Encontra duplicados em uma lista de itens
 */
export function findDuplicates<T extends DeduplicationKey>(items: T[]): Map<string, T[]> {
  const duplicates = new Map<string, T[]>();
  
  for (let i = 0; i < items.length; i++) {
    const key = generateDeduplicationKey(items[i]);
    
    if (!duplicates.has(key)) {
      duplicates.set(key, []);
    }
    
    duplicates.get(key)!.push(items[i]);
  }
  
  // Remove entradas com apenas 1 item (não são duplicados)
  for (const [key, group] of duplicates.entries()) {
    if (group.length <= 1) {
      duplicates.delete(key);
    }
  }
  
  return duplicates;
}

/**
 * Mescla dados de itens duplicados, priorizando informações mais completas
 */
export function mergeItems<T extends Record<string, any>>(items: T[]): T {
  if (items.length === 0) {
    throw new Error('Nenhum item para mesclar');
  }
  
  if (items.length === 1) {
    return items[0];
  }
  
  const merged = { ...items[0] };
  
  for (let i = 1; i < items.length; i++) {
    const item = items[i];
    
    for (const key in item) {
      // Prioriza valores não vazios
      if (item[key] && !merged[key]) {
        merged[key] = item[key];
      }
      
      // Para arrays, mescla e remove duplicados
      if (Array.isArray(item[key]) && Array.isArray(merged[key])) {
        merged[key] = [...new Set([...merged[key], ...item[key]])];
      }
      
      // Para strings, prioriza a mais longa
      if (typeof item[key] === 'string' && typeof merged[key] === 'string') {
        if (item[key].length > merged[key].length) {
          merged[key] = item[key];
        }
      }
    }
  }
  
  return merged;
}
