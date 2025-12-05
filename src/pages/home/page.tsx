import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function Home() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  const languages = [
    { code: 'PT', name: 'Português' },
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'DE', name: 'Deutsch' }
  ];

  const newsItems = [
    "🌤️ Clima: 18°C, parcialmente nublado",
    "📰 Nova trilha inaugurada no Morro da Igreja",
    "🎉 Festival de Inverno acontece no próximo fim de semana",
    "🏨 Ocupação hoteleira em alta para a temporada",
    "🍽️ Novos restaurantes abrem na região central"
  ];

  const partners = [
    {
      name: "Urubici Park Hotel",
      description: "Hospedagem de qualidade no coração de Urubici",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20logo%20Urubici%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20hospitality%20brand%20identity%2C%20elegant%20hotel%20branding&width=100&height=100&seq=logo1&orientation=squarish"
    },
    {
      name: "São Joaquim Park Hotel",
      description: "Experiência única na serra catarinense",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20logo%20S%C3%A3o%20Joaquim%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20luxury%20hospitality%20brand%20identity&width=100&height=100&seq=logo2&orientation=squarish"
    },
    {
      name: "Dany Lumertz",
      description: "Social Media & Conteúdo Digital — Estratégias e gestão",
      image:
        "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png"
    },
    {
      name: "Restaurante Vale Verde",
      description: "Gastronomia típica da serra catarinense",
      image:
        "https://readdy.ai/api/search-image?query=Mountain%20restaurant%20logo%20Vale%20Verde%20Urubici%20Santa%20Catarina%20Brazil%2C%20traditional%20cuisine%20brand%20identity%2C%20rustic%20dining%20establishment&width=100&height=100&seq=logo3&orientation=squarish"
    },
    {
      name: "Trilhas & Aventuras",
      description: "Turismo de aventura e ecoturismo",
      image:
        "https://readdy.ai/api/search-image?query=Adventure%20tourism%20logo%20Trilhas%20Aventuras%20Urubici%20Santa%20Catarina%20Brazil%2C%20outdoor%20activities%20brand%20identity%2C%20mountain%20trekking%20company&width=100&height=100&seq=logo4&orientation=squarish"
    },
    {
      name: "Pousada Serra Azul",
      description: "Aconchego e tranquilidade na montanha",
      image:
        "https://readdy.ai/api/search-image?query=Mountain%20inn%20logo%20Pousada%20Serra%20Azul%20Urubici%20Santa%20Catarina%20Brazil%2C%20cozy%20accommodation%20brand%20identity%2C%20boutique%20hotel&width=100&height=100&seq=logo5&orientation=squarish"
    },
    {
      name: "Café da Montanha",
      description: "Cafés especiais e produtos artesanais",
      image:
        "https://readdy.ai/api/search-image?query=Mountain%20coffee%20shop%20logo%20Caf%C3%A9%20da%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20coffee%20brand%20identity%2C%20specialty%20coffee%20roaster&width=100&height=100&seq=logo6&orientation=squarish"
    },
    {
      name: "Vinícola Altitude",
      description: "Vinhos de altitude da serra catarinense",
      image:
        "https://readdy.ai/api/search-image?query=High%20altitude%20winery%20logo%20Vin%C3%ADcola%20Altitude%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20vineyard%20brand%20identity%2C%20wine%20producer&width=100&height=100&seq=logo7&orientation=squarish"
    }
  ];

  // Auto‑slide for partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAssistant = () => {
    const assistantButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (assistantButton) {
      assistantButton.click();
    }
  };

  const navigateToMaisInformacoes = () => navigate('/mais-informacoes');
  const navigateToOndeIr = () => navigate('/onde-ir');
  const navigateToOndeFicar = () => navigate('/onde-ficar');
  const navigateToOndeComer = () => navigate('/onde-comer');
  const navigateToOQueFazer = () => navigate('/o-que-fazer');
  const navigateToGuiaMedico = () => navigate('/guia-medico');
  const navigateToGuiaServicos = () => navigate('/guia-servicos');
  const navigateToClima = () => navigate('/clima');
  const navigateToEventos = () => navigate('/eventos');
  const navigateToLocalizacao = () => navigate('/localizacao');
  const navigateToNoticias = () => navigate('/noticias');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video Container */}
      <BackgroundVideo />

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto">

        {/* Header */}
        <header className="w-full py-6 px-4 relative">
          <div className="max-w-md mx-auto">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden border border-white/30 shadow-lg">
                <img
                  alt="Portal Urubici"
                  className="w-full h-full object-cover"
                  src="https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/0dc4552e6498e91f6e54e953ce168af6.jfif"
                />
              </div>
              <div className="text-white drop-shadow-lg">
                <h1 className="font-bold text-lg leading-none text-blue-300 drop-shadow-md" style={{ fontFamily: 'Pacifico, serif' }}>
                  Portal Urubici
                </h1>
                <p className="text-xs text-white/90 leading-tight drop-shadow-sm">
                  Notícias, Onde Ir, Onde Ficar,<br />
                  Onde Comer, tudo sobre a cidade
                </p>
              </div>
            </div>

            {/* Language and Search */}
            <div className="flex items-center gap-2 absolute top-6 right-4">
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/30 shadow-lg"
                  title="Idioma"
                >
                  <i className="ri-global-line text-white text-lg drop-shadow-sm"></i>
                </button>
                {languageDropdown && (
                  <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/30 py-2 min-w-32">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setLanguageDropdown(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-white/60 transition-colors ${
                          currentLanguage === lang.code ? 'bg-white/40 font-medium' : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                className="w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/30 shadow-lg"
                title="Buscar"
              >
                <i className="ri-search-line text-white text-lg drop-shadow-sm"></i>
              </button>
            </div>
          </div>
        </header>

        {/* News Ticker */}
        <div className="px-4 mb-6">
          <div className="bg-white/15 backdrop-blur-md rounded-full py-2 px-4 border border-white/30 overflow-hidden shadow-lg">
            <div className="flex animate-scroll whitespace-nowrap">
              {newsItems.map((item, index) => (
                <span key={index} className="text-white text-sm mr-8 flex-shrink-0 drop-shadow-sm">
                  {item}
                </span>
              ))}
              {newsItems.map((item, index) => (
                <span key={`repeat-${index}`} className="text-white text-sm mr-8 flex-shrink-0 drop-shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="px-4 mb-8">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl">
            {/* Card Header */}
            <div className="flex items-center justify-center gap-2 mb-4" aria-label="Atalhos disponíveis">
              <i className="ri-flashlight-fill text-yellow-400 text-lg drop-shadow-sm"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide drop-shadow-sm">
                ATALHOS DISPONÍVEIS
              </h3>
            </div>

            {/* Chips Grid */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={navigateToNoticias}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir últimas notícias"
              >
                Últimas Notícias
              </button>

              <button
                className="bg-red-500/90 hover:bg-red-400 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm backdrop-blur-sm border border-red-400/30"
                aria-label="Abrir página de emergência"
              >
                Emergência
              </button>

              <button
                onClick={navigateToGuiaMedico}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir guia médico"
              >
                Guia Médico
              </button>

              <button
                className="bg-white/15 hover:bg-white/20 hover:scale-94 active:scale-94 text-white/60 font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm cursor-not-allowed backdrop-blur-sm border border-white/20"
                disabled
                aria-label="Serviços - Em breve"
              >
                Serviços
              </button>

              <button
                onClick={navigateToClima}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir informações do clima"
              >
                Clima
              </button>

              <button
                onClick={navigateToEventos}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir agenda de eventos"
              >
                Eventos
              </button>

              <button
                onClick={navigateToLocalizacao}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir informações de localização"
              >
                Localização
              </button>

              <button
                onClick={openAssistant}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir assistente de IA"
              >
                Assistente de IA
              </button>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="px-4 mb-6">
          <div className="px-4 mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 drop-shadow-md">
              <i className="ri-grid-line text-yellow-400"></i>
              Categorias Principais
              <i className="ri-grid-line text-yellow-400"></i>
            </h3>
            <p className="text-white/80 text-xs text-center mt-1 drop-shadow-sm">
              Explore tudo que Urubici tem a oferecer
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* 1ª linha: Onde Ir (habilitar), Onde Ficar (habilitar) */}
            <button
              onClick={navigateToOndeIr}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-map-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Onde Ir</h3>
              <p className="text-green-200 text-xs text-center font-medium mb-1">Atrativos</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Explore pontos turísticos e belezas naturais da região
              </p>
            </button>

            <button
              onClick={navigateToOndeFicar}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-purple-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-hotel-bed-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Onde Ficar</h3>
              <p className="text-purple-200 text-xs text-center font-medium mb-1">Hospedagem</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Encontre acomodações confortáveis para sua estadia
              </p>
            </button>

            {/* 2ª linha: Onde Comer (habilitar), O que fazer (habilitar) */}
            <button
              onClick={navigateToOndeComer}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-orange-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-restaurant-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Onde Comer</h3>
              <p className="text-orange-200 text-xs text-center font-medium mb-1">Gastronomia</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Saboreie a culinária típica da serra catarinense
              </p>
            </button>

            <button
              onClick={navigateToOQueFazer}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-compass-3-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">O que fazer</h3>
              <p className="text-blue-200 text-xs text-center font-medium mb-1">Turismo</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Descubra experiências únicas e atividades imperdíveis na serra
              </p>
            </button>

            {/* 3ª linha: Guia Médico (habilitar), Guia de Serviços (desabilitar) */}
            <button
              onClick={navigateToGuiaMedico}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-red-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-heart-pulse-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Guia Médico</h3>
              <p className="text-red-200 text-xs text-center font-medium mb-1">Medicina & Saúde</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Hospitais, clínicas, farmácias e profissionais de saúde
              </p>
            </button>

            <button
              onClick={navigateToGuiaServicos}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="w-12 h-12 bg-cyan-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-tools-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Guia de Serviços</h3>
              <p className="text-cyan-200 text-xs text-center font-medium mb-1">Serviços Essenciais</p>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Bancos, correios, oficinas e serviços essenciais
              </p>
            </button>

            {/* 4ª linha: Mais Informações */}
            <button
              onClick={navigateToMaisInformacoes}
              className="bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-2xl p-4 transition-all duration-200 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 col-span-2"
            >
              <div className="w-12 h-12 bg-teal-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-information-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1 drop-shadow-sm">Mais Informações</h3>
              <p className="text-white/90 text-xs text-center font-medium mb-1">
                Clima, eventos, localização e últimas notícias sobre Urubici
              </p>
            </button>

          </div>
        </div>

        {/* Partners Section with Horizontal Carousel */}
        <div className="w-full mb-6">
          <div className="px-4 mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 drop-shadow-md">
              <i className="ri-star-line text-yellow-400"></i>
              Parceiros em Destaque
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/80 text-xs text-center mt-1 drop-shadow-sm">
              Conheça nossos parceiros de confiança
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 280}px)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-2">
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/25 flex items-center justify-center mb-3 flex-shrink-0 border border-white/30">
                        <img alt={partner.name} className="w-full h-full object-cover" src={partner.image} />
                      </div>
                      <h4 className="text-white font-bold text-sm leading-tight mb-1 drop-shadow-sm">{partner.name}</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">Parceiro Oficial</span>
                      </div>
                      <p className="text-white/90 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow drop-shadow-sm">{partner.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto backdrop-blur-sm border border-blue-400/30 shadow-lg">
                        <span>Clique para visitar</span>
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate first few items for seamless loop */}
              {partners.slice(0, 3).map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 mx-2">
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/25 flex items-center justify-center mb-3 flex-shrink-0 border border-white/30">
                        <img alt={partner.name} className="w-full h-full object-cover" src={partner.image} />
                      </div>
                      <h4 className="text-white font-bold text-sm leading-tight mb-1 drop-shadow-sm">{partner.name}</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">Parceiro Oficial</span>
                      </div>
                      <p className="text-white/90 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow drop-shadow-sm">{partner.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto backdrop-blur-sm border border-blue-400/30 shadow-lg">
                        <span>Clique para visitar</span>
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots for Partners */}
            <div className="flex justify-center mt-4 space-x-2">
              {partners.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentPartnerSlide(dotIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-lg ${
                    currentPartnerSlide === dotIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70 w-1.5'
                  }`}
                  aria-label={`Ir para parceiro ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-white/95 backdrop-blur-md border-t border-white/30 mt-8 py-6 shadow-xl">
          <div className="px-4 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
                Urubici Connect
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                O guia completo local e de turismo<br />
                da Serra Catarinense
              </p>
            </div>

            <div className="mb-4 max-w-xs mx-auto">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <a
                  href="https://wa.me/5551986859236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <i className="ri-whatsapp-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/portalurubici"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com.br/portalurubici"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <i className="ri-facebook-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="mailto:portalurubici@gmail.com"
                  className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <i className="ri-mail-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">E-mail</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-gray-500 border-t border-gray-200 pt-4">
              © 2025 Desenvolvido por Urubici Connect<br />
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                Powered by Readdy
              </a>
              <br />
              <span className="text-gray-400">Versão 33</span>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center backdrop-blur-md border border-teal-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </button>

        {/* Inline Styles */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </div>
  );
}
