import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function MaisInformacoes() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  const featuredAds = [
    {
      title: "Urubici Park Hotel",
      subtitle: "Hospedagem & Turismo",
      image: "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20modern%20architecture%2C%20elegant%20hotel%20building%20surrounded%20by%20beautiful%20mountain%20landscape%2C%20hospitality%20accommodation%20with%20scenic%20views&width=300&height=200&seq=hotel1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Café do Vale",
      subtitle: "Cafés & Brunch",
      image: "https://readdy.ai/api/search-image?query=Cozy%20mountain%20coffee%20shop%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20rustic%20cafe%20interior%20with%20warm%20lighting%2C%20artisanal%20coffee%20and%20brunch%20setting%20in%20mountain%20valley%20atmosphere&width=300&height=200&seq=cafe1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Trilhas Pedra Furada",
      subtitle: "Passeios & Roteiros",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20hiking%20trail%20to%20Pedra%20Furada%20rock%20formation%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20scenic%20mountain%20trekking%20path%20with%20natural%20stone%20arch%2C%20adventure%20tourism%20in%20serra%20catarinense&width=300&height=200&seq=trail1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Vinícola Serra Azul",
      subtitle: "Enoturismo & Degustação",
      image: "https://readdy.ai/api/search-image?query=Mountain%20winery%20vineyard%20in%20Serra%20Azul%20Urubici%20Santa%20Catarina%20Brazil%2C%20wine%20tasting%20facility%20with%20grape%20vines%20and%20mountain%20backdrop%2C%20enotourism%20experience%20in%20high%20altitude%20vineyard&width=300&height=200&seq=winery1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "São Joaquim Park Hotel",
      subtitle: "Conforto na Serra",
      image: "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20in%20S%C3%A3o%20Joaquim%20Santa%20Catarina%20Brazil%2C%20luxury%20accommodation%20facility%20with%20panoramic%20mountain%20views%2C%20comfortable%20hospitality%20in%20serra%20catarinense&width=300&height=200&seq=hotel2&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Dany Lumertz",
      subtitle: "Social Media & Conteúdo",
      image: "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png",
      link: "#",
      isAd: true
    },
    {
      title: "Anuncie Aqui",
      subtitle: "Promova seu negócio no Portal Urubici",
      image: "https://readdy.ai/api/search-image?query=Modern%20advertising%20banner%20with%20megaphone%20icon%2C%20business%20promotion%20concept%2C%20marketing%20and%20advertisement%20design%20with%20mountain%20background%2C%20professional%20advertising%20space&width=300&height=200&seq=advertise1&orientation=landscape",
      link: "#",
      isAd: false
    }
  ];

  const partners = [
    {
      name: "Urubici Park Hotel",
      description: "Hospedagem de qualidade no coração de Urubici",
      image: "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20logo%20Urubici%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20hospitality%20brand%20identity%2C%20elegant%20hotel%20branding&width=100&height=100&seq=logo1&orientation=squarish"
    },
    {
      name: "São Joaquim Park Hotel",
      description: "Experiência única na serra catarinense",
      image: "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20logo%20S%C3%A3o%20Joaquim%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20luxury%20hospitality%20brand%20identity&width=100&height=100&seq=logo2&orientation=squarish"
    },
    {
      name: "Dany Lumertz",
      description: "Social Media & Conteúdo Digital — Estratégias e gestão",
      image: "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png"
    }
  ];

  const informationCategories = [
    {
      title: "Clima",
      description: "Previsão do tempo, temperatura e condições climáticas",
      icon: "ri-sun-cloudy-line",
      color: "blue",
      items: ["Previsão 7 dias", "Temperatura atual", "Condições climáticas", "Alertas meteorológicos", "Histórico climático"]
    },
    {
      title: "Eventos",
      description: "Agenda cultural, festivais e eventos da cidade",
      icon: "ri-calendar-event-line",
      color: "purple",
      items: ["Festival de Inverno", "Shows e Apresentações", "Eventos Gastronômicos", "Competições Esportivas", "Festivais Culturais"]
    },
    {
      title: "Localização",
      description: "Mapas, rotas e informações geográficas",
      icon: "ri-map-pin-line",
      color: "green",
      items: ["Mapa da cidade", "Pontos turísticos", "Rotas de acesso", "Distâncias", "Coordenadas GPS"]
    },
    {
      title: "Últimas Notícias",
      description: "Notícias locais, atualizações e informações relevantes",
      icon: "ri-newspaper-line",
      color: "orange",
      items: ["Notícias locais", "Atualizações turísticas", "Informações municipais", "Eventos recentes", "Comunicados oficiais"]
    }
  ];

  // Auto-slide for featured ads
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredAds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, featuredAds.length]);

  // Auto-slide for partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  const navigateToCategory = (categoryTitle: string) => {
    // Navegação específica para cada categoria
    if (categoryTitle === "Clima") {
      navigate('/clima');
    } else if (categoryTitle === "Eventos") {
      navigate('/eventos');
    } else if (categoryTitle === "Localização") {
      navigate('/localizacao');
    } else if (categoryTitle === "Últimas Notícias") {
      navigate('/noticias');
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/50 text-blue-200 border-blue-400/40',
      purple: 'bg-purple-500/50 text-purple-200 border-purple-400/40',
      green: 'bg-green-500/50 text-green-200 border-green-400/40',
      orange: 'bg-orange-500/50 text-orange-200 border-orange-400/40'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500/50 text-gray-200 border-gray-400/40';
  };

  const openAssistant = () => {
    const assistantButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (assistantButton) {
      assistantButton.click();
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto">
        {/* Header */}
        <header className="w-full py-6 px-4 relative">
          <div className="max-w-md mx-auto">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                <img
                  alt="Portal Urubici"
                  className="w-full h-full object-cover"
                  src="https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/0dc4552e6498e91f6e54e953ce168af6.jfif"
                />
              </div>
              <div className="text-white">
                <h1 className="font-bold text-lg leading-none text-blue-400" style={{ fontFamily: 'Pacifico, serif' }}>
                  Portal Urubici
                </h1>
                <p className="text-xs text-white/80 leading-tight">Notícias, Onde Ir, Onde Ficar,<br />Onde Comer, tudo sobre a cidade</p>
              </div>
            </div>

            {/* Language and Search */}
            <div className="flex items-center gap-2 absolute top-6 right-4">
              <button
                onClick={goHome}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                title="Voltar à homepage"
              >
                <i className="ri-home-line text-white text-lg"></i>
              </button>
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                  title="Idioma"
                >
                  <i className="ri-global-line text-white text-lg"></i>
                </button>
                {languageDropdown && (
                  <div className="absolute top-12 right-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 py-2 min-w-32">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setLanguageDropdown(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-white/50 transition-colors ${
                          currentLanguage === lang.code ? 'bg-white/30 font-medium' : ''
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                title="Buscar"
              >
                <i className="ri-search-line text-white text-lg"></i>
              </button>
              <button
                onClick={goBack}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                title="Voltar à página anterior"
              >
                <i className="ri-arrow-left-line text-white text-lg"></i>
              </button>
            </div>
          </div>
        </header>

        {/* News Ticker */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 border border-white/20 overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {newsItems.map((item, index) => (
                <span key={index} className="text-white text-sm mr-8 flex-shrink-0">
                  {item}
                </span>
              ))}
              {newsItems.map((item, index) => (
                <span key={`repeat-${index}`} className="text-white text-sm mr-8 flex-shrink-0">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Ads Carousel */}
        <div className="px-4 mb-6">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredAds.map((ad, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                      ad.isAd
                        ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105'
                        : 'bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-300/30 rounded-3xl hover:from-orange-500/30 hover:to-red-500/30 hover:scale-105'
                    }`}>
                    <a
                      href={ad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`${ad.title} — ${ad.subtitle}`}
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <img
                          alt={ad.title}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          src={ad.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg ${
                            ad.isAd ? 'bg-teal-600/90 text-white' : 'bg-orange-600/90 text-white'
                          }`}>
                          {ad.isAd ? 'Informações' : 'Oportunidade'}
                        </div>
                        {!ad.isAd && (
                          <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500/80 rounded-full flex items-center justify-center">
                            <i className="ri-megaphone-fill text-white text-lg"></i>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 ${
                            ad.isAd
                              ? 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white'
                              : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                          }`}>
                          <span>{ad.isAd ? 'Saiba Mais' : 'Anunciar Agora'}</span>
                          <i className={`${ad.isAd ? 'ri-arrow-right-line' : 'ri-megaphone-line'} text-sm`}></i>
                        </div>
                      </div>
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {featuredAds.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === dotIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Ir para slide ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-information-line text-teal-400"></i>
              Mais Informações
              <i className="ri-information-line text-teal-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Informações úteis sobre Urubici em um só lugar</p>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            {/* Card Header */}
            <div className="flex items-center justify-center gap-2 mb-4" aria-label="Atalhos disponíveis">
              <i className="ri-flashlight-fill text-yellow-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">
                ATALHOS DISPONÍVEIS
              </h3>
            </div>

            {/* Chips Grid */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                className="bg-red-500/90 hover:bg-red-400 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm"
                aria-label="Abrir página de emergência"
              >
                Emergência
              </button>

              <button
                onClick={() => navigate('/guia-medico')}
                className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm"
                aria-label="Abrir guia médico"
              >
                Guia Médico
              </button>

              <button
                className="bg-white/20 hover:bg-white/30 hover:scale-95 active:scale-95 text-white/50 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm cursor-not-allowed"
                disabled
                aria-label="Serviços - Em breve"
              >
                Serviços
              </button>

              <button
                onClick={openAssistant}
                className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm"
                aria-label="Abrir assistente de IA"
              >
                Assistente de IA
              </button>
            </div>
          </div>
        </div>

        {/* Information Categories */}
        <div className="px-4 mb-6">
          <div className="mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-information-line text-teal-400"></i>
              Categorias de Informações
              <i className="ri-information-line text-teal-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">Explore todas as informações úteis sobre Urubici</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {informationCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => navigateToCategory(category.title)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-4 transition-all duration-200 border border-white/20 hover:scale-105 shadow-lg"
              >
                <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-bold text-sm text-center mb-1">{category.title}</h3>
                <p className={`text-xs text-center font-medium mb-1 ${getColorClasses(category.color).split(' ')[1]}`}>
                  {category.items.length} {category.items.length === 1 ? 'item' : 'itens'}
                </p>
                <p className="text-white/70 text-xs text-center font-medium leading-tight">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full mb-6">
          <div className="px-4 mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-star-line text-yellow-400"></i>
              Parceiros em Destaque
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">Conheça nossos parceiros de confiança</p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 280}px)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-64 mx-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center mb-3 flex-shrink-0">
                        <img
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          src={partner.image}
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm leading-tight mb-1">{partner.name}</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">Parceiro Oficial</span>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                        {partner.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
                        <span>Clique para visitar</span>
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {partners.slice(0, 3).map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 mx-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center mb-3 flex-shrink-0">
                        <img
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          src={partner.image}
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm leading-tight mb-1">{partner.name}</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">Parceiro Oficial</span>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                        {partner.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
                        <span>Clique para visitar</span>
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {partners.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentPartnerSlide(dotIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentPartnerSlide === dotIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60 w-1.5'
                  }`}
                  aria-label={`Ir para parceiro ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-8 py-6">
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
              <span className="text-gray-400">Versão 33</span>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-teal-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </button>

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
