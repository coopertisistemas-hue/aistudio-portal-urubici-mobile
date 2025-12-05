
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ComplexosGastronomicos() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [showFilters, setShowFilters] = useState(false);

  const complexosData = {
    "COMPLEXOS GASTRONÔMICOS": [
      {
        id: 1,
        nome: "Pátio Urubici",
        categoria: "Complexo Gastronômico",
        telefone: "",
        whatsapp: "",
        endereco: "Urubici, SC",
        horario: "10:00 às 22:00",
        descricao: "Espaço com múltiplas opções gastronômicas",
        imagem: "https://readdy.ai/api/search-image?query=Gastronomic%20complex%20P%C3%A1tio%20Urubici%20with%20multiple%20dining%20options%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=patio_urubici&orientation=squarish",
        tags: [
          { label: "Complexo", type: "feature", color: "blue" },
          { label: "Várias opções", type: "feature", color: "green" }
        ],
        maps: "https://www.google.com/maps/search/?api=1&query=P%C3%A1tio%20Urubici%20Urubici%20SC"
      }
    ]
  };

  const filters = [
    { id: 'todos', name: 'Todos', count: complexosData["COMPLEXOS GASTRONÔMICOS"].length }
  ];

  const filteredEstablishments = complexosData["COMPLEXOS GASTRONÔMICOS"].filter(establishment => {
    const matchesSearch = establishment.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         establishment.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Função para verificar se está aberto
  const isOpen = (horario: string) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const [start, end] = horario.split(' às ');
    if (start && end) {
      const [startHour, startMin] = start.trim().split(':').map(Number);
      const [endHour, endMin] = end.trim().split(':').map(Number);
      
      const startTime = startHour * 60 + startMin;
      const endTime = endHour * 60 + endMin;
      
      if (currentTime >= startTime && currentTime <= endTime) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-building-3-line text-3xl"></i>
            <h1 className="text-3xl font-bold">Complexos Gastronômicos</h1>
          </div>
          <p className="text-teal-100 text-lg">
            Variedade gastronômica em um só local
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <i className="ri-building-line"></i>
              {complexosData["COMPLEXOS GASTRONÔMICOS"].length} estabelecimentos
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-star-fill text-yellow-300"></i>
              Avaliação média: 4.5
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Buscar complexos gastronômicos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              <i className="ri-filter-line"></i>
              Filtros
              <i className={`ri-arrow-${showFilters ? 'up' : 'down'}-s-line`}></i>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFilter === filter.id
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-6">
        <div className="px-4 mb-6">
          <div 
            id="complexos-gastronomicos-em-urubici"
            className="mb-4"
          >
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <i className="ri-building-3-line text-teal-400"></i>
              Complexos Gastronômicos em Urubici
            </h3>
            <p className="text-white/70 text-sm">
              {filteredEstablishments.length} {filteredEstablishments.length === 1 ? 'complexo disponível' : 'complexos disponíveis'}
            </p>
          </div>

          <div className="space-y-4">
            {filteredEstablishments.map((complexo) => {
              const isOpenNow = () => {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();
                const currentTime = currentHour * 60 + currentMinute;
                
                // Horários típicos de complexos gastronômicos (10:00-22:00)
                const openTime = 10 * 60; // 10:00
                const closeTime = 22 * 60; // 22:00
                
                return currentTime >= openTime && currentTime <= closeTime;
              };

              return (
                <div key={complexo.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 relative">
                  {/* Status Chip - Canto Superior Direito */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isOpenNow() 
                        ? 'bg-green-500/20 text-green-200 border border-green-400/30' 
                        : 'bg-red-500/20 text-red-200 border border-red-400/30'
                    }`}>
                      {isOpenNow() ? 'Aberto' : 'Fechado'}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                      <img
                        alt={complexo.nome}
                        className="w-full h-full object-cover"
                        src={complexo.imagem}
                      />
                    </div>
                    <div className="flex-1 pr-16">
                      {/* Nome e Categoria */}
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-white mb-1">{complexo.nome}</h3>
                        <p className="text-gray-300 text-sm">{complexo.categoria}</p>
                      </div>

                      {/* Descrição */}
                      <p className="text-white/80 text-sm mb-3 text-justify leading-relaxed pr-16">{complexo.descricao}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4 pr-16">
                        {complexo.tags.map((tag, tagIndex) => {
                          const getTagColors = (color: string) => {
                            const colors = {
                              blue: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
                              green: 'bg-green-500/20 text-green-200 border-green-400/30'
                            };
                            return colors[color] || 'bg-gray-500/20 text-gray-200 border-gray-400/30';
                          };

                          const getTagIcon = (type: string) => {
                            const icons = {
                              feature: 'ri-check-line'
                            };
                            return icons[type] || 'ri-information-line';
                          };

                          return (
                            <span
                              key={tagIndex}
                              className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full border ${getTagColors(tag.color)}`}
                            >
                              <i className={`${getTagIcon(tag.type)} text-xs`} />
                              {tag.label}
                            </span>
                          );
                        })}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {complexo.whatsapp ? (
                          <a
                            href={`https://wa.me/${complexo.whatsapp}?text=Olá! Vi vocês no Portal Urubici e gostaria de mais informações sobre o ${complexo.nome}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                          >
                            <i className="ri-whatsapp-line text-sm"></i>
                            <span>WhatsApp</span>
                          </a>
                        ) : (
                          <button
                            disabled
                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-xs font-medium cursor-not-allowed whitespace-nowrap border border-gray-400/30"
                          >
                            <i className="ri-whatsapp-line text-sm"></i>
                            <span>WhatsApp</span>
                          </button>
                        )}
                        <button
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-xs font-medium cursor-not-allowed whitespace-nowrap border border-gray-400/30"
                        >
                          <i className="ri-external-link-line text-sm"></i>
                          <span>Ver Página</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {filteredEstablishments.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-search-line text-4xl text-gray-300 mb-4"></i>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum complexo gastronômico encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
          </div>
        )}
      </div>

      {/* Atalhos */}
      <div className="bg-white border-t py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <button 
              onClick={() => {
                const assistantButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
                if (assistantButton) {
                  assistantButton.click();
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-customer-service-2-line text-xl"></i>
              Falar com Assistente
            </button>
            
            <button 
              onClick={() => navigate('/onde-comer')}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              Voltar às Categorias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
