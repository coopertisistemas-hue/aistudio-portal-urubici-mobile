import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { importPlaces, importEstablishments, importMedicalEstablishments } from '../../scraping/services/import.service';
import type { ScrapedItem, ScrapingProgress } from '../../scraping/types/scraping.types';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ImportStats {
  total: number;
  inserted: number;
  updated: number;
  errors: number;
}

export default function ImportPage() {
  const [isImporting, setIsImporting] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState<Record<string, ScrapingProgress>>({});
  const [stats, setStats] = useState<Record<string, ImportStats>>({});
  const [logs, setLogs] = useState<string[]>([]);

  const sections = [
    { id: 'onde_ir', name: 'Onde Ir', icon: 'ri-map-pin-line' },
    { id: 'onde_ficar', name: 'Onde Ficar', icon: 'ri-building-line' },
    { id: 'onde_comer', name: 'Onde Comer', icon: 'ri-restaurant-line' },
    { id: 'o_que_fazer', name: 'O que Fazer', icon: 'ri-compass-line' },
    { id: 'guia_medico', name: 'Guia Médico', icon: 'ri-health-book-line' },
  ];

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev].slice(0, 100));
  };

  const callEdgeFunction = async (section: string): Promise<any> => {
    const { data, error } = await supabase.functions.invoke('scrape-urubici', {
      body: { section },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const importSection = async (sectionId: string) => {
    if (isImporting[sectionId]) return;

    setIsImporting(prev => ({ ...prev, [sectionId]: true }));
    setProgress(prev => ({
      ...prev,
      [sectionId]: { current: 0, total: 0, status: 'scraping' }
    }));

    addLog(`Iniciando importação da seção: ${sectionId}`);

    try {
      // Chama a Edge Function para fazer scraping
      addLog(`Fazendo scraping do site urubici.com.br...`);
      const scrapingResult = await callEdgeFunction(sectionId);

      addLog(`Scraping concluído: ${scrapingResult.successCount} itens extraídos`);

      if (scrapingResult.items.length === 0) {
        addLog('⚠️ Nenhum item encontrado para importar');
        setProgress(prev => ({
          ...prev,
          [sectionId]: {
            current: 0,
            total: 0,
            status: 'error',
            message: 'Nenhum item encontrado'
          }
        }));
        return;
      }

      // Atualiza progresso
      setProgress(prev => ({
        ...prev,
        [sectionId]: {
          current: 0,
          total: scrapingResult.items.length,
          status: 'saving',
          message: 'Salvando no Supabase...'
        }
      }));

      addLog(`Iniciando gravação de ${scrapingResult.items.length} itens no Supabase...`);

      // Importa para o Supabase baseado na seção
      let importResult;
      if (sectionId === 'onde_ir') {
        importResult = await importPlaces(scrapingResult.items);
      } else if (sectionId === 'guia_medico') {
        importResult = await importMedicalEstablishments(scrapingResult.items);
      } else {
        importResult = await importEstablishments(scrapingResult.items);
      }

      // Atualiza estatísticas
      setStats(prev => ({
        ...prev,
        [sectionId]: importResult
      }));

      // Mostra erros detalhados no log
      if (importResult.errors > 0) {
        addLog(`⚠️ ${importResult.errors} erros encontrados durante a importação:`);
        importResult.errorDetails.slice(0, 5).forEach(err => {
          addLog(`  ✗ ${err.item}: ${err.error}`);
        });
        if (importResult.errorDetails.length > 5) {
          addLog(`  ... e mais ${importResult.errorDetails.length - 5} erros`);
        }
      }

      addLog(`✓ Importação concluída: ${importResult.inserted} inseridos, ${importResult.updated} atualizados, ${importResult.errors} erros`);

      // Atualiza progresso final
      setProgress(prev => ({
        ...prev,
        [sectionId]: {
          current: importResult.total,
          total: importResult.total,
          status: importResult.errors === importResult.total ? 'error' : 'completed',
          message: importResult.errors === importResult.total 
            ? 'Falha na importação - verifique as permissões do Supabase'
            : 'Importação concluída!'
        }
      }));

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      addLog(`✗ Erro na importação: ${errorMessage}`);
      
      setProgress(prev => ({
        ...prev,
        [sectionId]: {
          current: 0,
          total: 0,
          status: 'error',
          message: errorMessage
        }
      }));
    } finally {
      setIsImporting(prev => ({ ...prev, [sectionId]: false }));
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Importação de Dados - Urubici.com.br
          </h1>
          <p className="text-gray-600">
            Importe dados das seções do site urubici.com.br para o banco de dados do projeto.
          </p>
        </div>

        {/* Seções para Importação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {sections.map(section => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <i className={`${section.icon} text-2xl text-blue-600 mr-3`}></i>
                <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
              </div>

              {/* Progresso */}
              {progress[section.id] && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{progress[section.id].message || 'Processando...'}</span>
                    <span>{progress[section.id].current}/{progress[section.id].total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        progress[section.id].status === 'completed' ? 'bg-green-600' :
                        progress[section.id].status === 'error' ? 'bg-red-600' :
                        'bg-blue-600'
                      }`}
                      style={{
                        width: progress[section.id].total > 0 
                          ? `${(progress[section.id].current / progress[section.id].total) * 100}%`
                          : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Estatísticas */}
              {stats[section.id] && (
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="bg-green-50 text-green-700 p-2 rounded">
                    <div className="font-medium">Inseridos</div>
                    <div className="text-lg font-bold">{stats[section.id].inserted}</div>
                  </div>
                  <div className="bg-blue-50 text-blue-700 p-2 rounded">
                    <div className="font-medium">Atualizados</div>
                    <div className="text-lg font-bold">{stats[section.id].updated}</div>
                  </div>
                </div>
              )}

              {/* Botão */}
              <button
                onClick={() => importSection(section.id)}
                disabled={isImporting[section.id]}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  isImporting[section.id]
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isImporting[section.id] ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"></div>
                    Importando...
                  </div>
                ) : (
                  'Importar Seção'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Log de Atividades */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Log de Atividades
              </h3>
              <button
                onClick={clearLogs}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Limpar Log
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-gray-500 text-center">Nenhuma atividade registrada</p>
              ) : (
                <div className="space-y-1 font-mono text-sm">
                  {logs.map((log, index) => (
                    <div key={index} className="text-gray-700">
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}