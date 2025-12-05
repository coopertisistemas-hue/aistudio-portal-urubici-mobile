import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function OndeComer() {
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
    "🍽️ Novos restaurantes abrem na região central",
    "🍷 Temporada de vinhos de altitude em alta"
  ];

  const featuredAds = [
    {
      title: "Restaurante Vale Verde",
      subtitle: "Gastronomia da Serra Catarinense",
      image: "https://readdy.ai/api/search-image?query=Elegant%20mountain%20restaurant%20Vale%20Verde%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20rustic%20wooden%20interior%2C%20cozy%20dining%20atmosphere%2C%20traditional%20regional%20cuisine%2C%20warm%20lighting%20and%20mountain%20views&width=300&height=200&seq=restaurant1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Bistrô da Montanha",
      subtitle: "Sabores Únicos da Região",
      image: "https://readdy.ai/api/search-image?query=Charming%20mountain%20bistro%20restaurant%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20modern%20rustic%20decor%2C%20intimate%20dining%20setting%2C%20gourmet%20cuisine%20presentation%2C%20cozy%20atmosphere%20with%20stone%20and%20wood%20elements&width=300&height=200&seq=bistro1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Vinícola Altitude",
      subtitle: "Vinhos e Gastronomia de Altitude",
      image: "https://readdy.ai/api/search-image?query=High%20altitude%20winery%20restaurant%20Vin%C3%ADcola%20Altitude%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20vineyard%20views%2C%20wine%20tasting%20room%2C%20elegant%20dining%20area%2C%20mountain%20landscape%20background&width=300&height=200&seq=vinicola1&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const partners = [
    {
      name: "Restaurante Vale Verde",
      description: "Gastronomia típica da serra catarinense",
      image: "https://readdy.ai/api/search-image?query=Mountain%20restaurant%20logo%20Vale%20Verde%20Urubici%20Santa%20Catarina%20Brazil%2C%20traditional%20cuisine%20brand%20identity%2C%20rustic%20dining%20establishment&width=100&height=100&seq=logo3&orientation=squarish"
    },
    {
      name: "Bistrô da Montanha",
      description: "Culinária contemporânea com ingredientes locais",
      image: "https://readdy.ai/api/search-image?query=Modern%20mountain%20bistro%20logo%20Bistr%C3%B4%20da%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20contemporary%20dining%20brand%20identity%2C%20gourmet%20restaurant&width=100&height=100&seq=logo8&orientation=squarish"
    },
    {
      name: "Café da Montanha",
      description: "Cafés especiais e produtos artesanais",
      image: "https://readdy.ai/api/search-image?query=Mountain%20coffee%20shop%20logo%20Caf%C3%A9%20da%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20coffee%20brand%20identity%2C%20specialty%20coffee%20roaster&width=100&height=100&seq=logo6&orientation=squarish"
    },
    {
      name: "Vinícola Altitude",
      description: "Vinhos de altitude da serra catarinense",
      image: "https://readdy.ai/api/search-image?query=High%20altitude%20winery%20logo%20Vin%C3%ADcola%20Altitude%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20vineyard%20brand%20identity%2C%20wine%20producer&width=100&height=100&seq=logo7&orientation=squarish"
    },
    {
      name: "Pizzaria Bella Vista",
      description: "Pizzas artesanais com vista para a serra",
      image: "https://readdy.ai/api/search-image?query=Mountain%20pizzeria%20logo%20Pizzaria%20Bella%20Vista%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20pizza%20restaurant%20brand%20identity%2C%20Italian%20cuisine&width=100&height=100&seq=logo9&orientation=squarish"
    },
    {
      name: "Churrascaria Pampa",
      description: "Carnes nobres e tradição gaúcha",
      image: "https://readdy.ai/api/search-image?query=Traditional%20steakhouse%20logo%20Churrascaria%20Pampa%20Urubici%20Santa%20Catarina%20Brazil%2C%20Brazilian%20barbecue%20restaurant%20brand%20identity%2C%20meat%20grill%20house&width=100&height=100&seq=logo10&orientation=squarish"
    },
    {
      name: "Truta & Cia",
      description: "Especialidade em peixes e frutos do mar",
      image: "https://readdy.ai/api/search-image?query=Fish%20restaurant%20logo%20Truta%20Cia%20Urubici%20Santa%20Catarina%20Brazil%2C%20seafood%20dining%20brand%20identity%2C%20trout%20specialty%20restaurant&width=100&height=100&seq=logo11&orientation=squarish"
    },
    {
      name: "Doce Montanha",
      description: "Doces artesanais e chocolates especiais",
      image: "https://readdy.ai/api/search-image?query=Mountain%20confectionery%20logo%20Doce%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20sweets%20brand%20identity%2C%20chocolate%20shop&width=100&height=100&seq=logo12&orientation=squarish"
    }
  ];

  const restaurantCategories = [
    {
      title: "Restaurantes",
      description: "Culinária tradicional e contemporânea",
      icon: "ri-restaurant-line",
      color: "blue",
      items: ["Restaurante Vale Verde", "Bistrô da Montanha", "Casa da Serra", "Sabor Regional", "Cantina da Vovó", "Mesa da Montanha"]
    },
    {
      title: "Bistrôs",
      description: "Ambiente aconchegante e pratos elaborados",
      icon: "ri-goblet-line",
      color: "purple",
      items: ["Bistrô da Montanha", "Le Petit Urubici", "Bistrô Altitude", "Casa Bistrô", "Bistrô do Vale"]
    },
    {
      title: "Cafeterias & Docerias",
      description: "Cafés especiais e doces artesanais",
      icon: "ri-cup-line",
      color: "orange",
      items: ["Café da Montanha", "Doce Montanha", "Cafeteria Central", "Doces da Serra", "Café & Cia", "Doceria Artesanal"]
    },
    {
      title: "Café Colonial",
      description: "Tradição colonial com produtos caseiros",
      icon: "ri-cake-3-line",
      color: "green",
      items: ["Colonial da Serra", "Mesa Colonial", "Café Colonial Vovó Maria", "Tradição Colonial", "Colonial do Vale"]
    },
    {
      title: "Pizzarias",
      description: "Pizzas artesanais e tradicionais",
      icon: "ri-restaurant-2-line",
      color: "red",
      items: ["Pizzaria Bella Vista", "Pizza da Montanha", "Fornalha Pizzas", "Pizza & Cia", "Pizzaria Central"]
    },
    {
      title: "Hamburguerias",
      description: "Hambúrgueres gourmet e artesanais",
      icon: "ri-cake-2-line",
      color: "orange",
      items: ["Burger Mountain", "Hamburguer da Serra", "Gourmet Burger", "Serra Burger", "Mountain Grill"]
    },
    {
      title: "Churrascarias / Steakhouse",
      description: "Carnes nobres e tradição do churrasco",
      icon: "ri-fire-line",
      color: "red",
      items: ["Churrascaria Pampa", "Steakhouse Serra", "Grill da Montanha", "Churrasco & Cia"]
    },
    {
      title: "Peixes & Trutarias",
      description: "Especialidades em peixes e frutos do mar",
      icon: "ri-water-flash-line",
      color: "teal",
      items: ["Truta & Cia", "Peixaria da Serra", "Trutaria do Vale", "Pescados da Montanha", "Aquário Restaurante"]
    },
    {
      title: "Cozinha Italiana",
      description: "Autêntica culinária italiana",
      icon: "ri-bowl-line",
      color: "green",
      items: ["Nonna Italiana", "Pasta & Basta", "Trattoria da Serra", "Bella Italia", "Cozinha Italiana"]
    },
    {
      title: "Cozinha Japonesa",
      description: "Sushi, sashimi e pratos orientais",
      icon: "ri-bowl-fill",
      color: "indigo",
      items: ["Sushi da Montanha", "Sakura Sushi", "Yamato Culinária", "Zen Sushi"]
    },
    {
      title: "Cozinha Internacional",
      description: "Sabores do mundo em um só lugar",
      icon: "ri-global-line",
      color: "purple",
      items: ["World Kitchen", "Sabores do Mundo", "Internacional Gourmet", "Global Taste", "Fusion Restaurant"]
    },
    {
      title: "Gastrobares & Bares",
      description: "Drinks autorais e petiscos gourmet",
      icon: "ri-goblet-fill",
      color: "blue",
      items: ["Gastrobar Altitude", "Bar da Montanha", "Drinks & Petiscos", "Boteco da Serra", "Pub Mountain", "Gastrobar Central"]
    },
    {
      title: "Vinícolas & Bistrôs de Vinícola",
      description: "Vinhos de altitude e harmonizações",
      icon: "ri-drop-line",
      color: "purple",
      items: ["Vinícola Altitude", "Bistrô da Vinícola", "Wine House Serra", "Adega da Montanha"]
    },
    {
      title: "Fondue & Sequências",
      description: "Fondues e sequências típicas da serra",
      icon: "ri-fire-fill",
      color: "orange",
      items: ["Fondue da Serra", "Sequência Colonial", "Fondue & Cia", "Mesa da Sequência", "Fondue Mountain"]
    },
    {
      title: "Complexos Gastronômicos / Praças de Alimentação",
      description: "Variedade gastronômica em um só local",
      icon: "ri-building-3-line",
      color: "teal",
      items: ["Complexo Gastronômico Serra", "Praça Gourmet", "Food Park Urubici", "Centro Gastronômico"]
    },
    {
      title: "Lanches & Delivery",
      description: "Lanches rápidos e delivery",
      icon: "ri-takeaway-line",
      color: "green",
      items: ["Lanchonete da Praça", "Delivery Express", "Lanches da Serra", "Fast Food Mountain", "Quick Bite", "Delivery Gourmet"]
    },
    {
      title: "Padarias & Confeitarias",
      description: "Pães frescos e doces tradicionais",
      icon: "ri-cake-line",
      color: "orange",
      items: ["Padaria Central", "Confeitaria da Serra", "Pão & Doce", "Padaria Artesanal", "Doces & Pães", "Confeitaria Montanha"]
    },
    {
      title: "Chocolaterias & Gelaterias",
      description: "Chocolates artesanais e gelatos especiais",
      icon: "ri-heart-3-line",
      color: "red",
      items: ["Chocolateria da Serra", "Gelateria Italiana", "Chocolate & Cia", "Gelatos da Montanha", "Doce Chocolate"]
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/50 text-blue-200',
      green: 'bg-green-500/50 text-green-200',
      purple: 'bg-purple-500/50 text-purple-200',
      orange: 'bg-orange-500/50 text-orange-200',
      red: 'bg-red-500/50 text-red-200',
      teal: 'bg-teal-500/50 text-teal-200',
      indigo: 'bg-indigo-500/50 text-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500/50 text-gray-200';
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
                  <div className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105">
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-blue-600/90 text-white">
                          Patrocinado
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                          <span>Saiba Mais</span>
                          <i className="ri-arrow-right-line text-sm"></i>
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
                onClick={() => navigate('/noticias')}
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
                onClick={() => navigate('/guia-medico')}
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
                onClick={() => navigate('/clima')}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir informações do clima"
              >
                Clima
              </button>

              <button
                onClick={() => navigate('/eventos')}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir agenda de eventos"
              >
                Eventos
              </button>

              <button
                onClick={() => navigate('/localizacao')}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir informações de localização"
              >
                Localização
              </button>

              <button
                onClick={() => {
                  const assistantButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
                  if (assistantButton) {
                    assistantButton.click();
                  }
                }}
                className="bg-white/25 hover:bg-white/35 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm backdrop-blur-sm border border-white/20"
                aria-label="Abrir assistente de IA"
              >
                Assistente de IA
              </button>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-restaurant-line text-orange-400"></i>
              Onde Comer
              <i className="ri-restaurant-line text-orange-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Descubra os melhores sabores da serra catarinense</p>
          </div>
        </div>

        {/* Restaurant Categories */}
        <div className="px-4 mb-6">
          <div className="mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-restaurant-2-line text-orange-400"></i>
              Categorias Gastronômicas
              <i className="ri-restaurant-2-line text-orange-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">Escolha o tipo de culinária que mais combina com você</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {restaurantCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  switch (category.title) {
                    case "Restaurantes":
                      navigate('/onde-comer/restaurantes');
                      break;
                    case "Bistrôs":
                      navigate('/onde-comer/bistros');
                      break;
                    case "Cafeterias & Docerias":
                      navigate('/onde-comer/cafeterias-docerias');
                      break;
                    case "Café Colonial":
                      navigate('/onde-comer/cafe-colonial');
                      break;
                    case "Pizzarias":
                      navigate('/onde-comer/pizzarias');
                      break;
                    case "Hamburguerias":
                      navigate('/onde-comer/hamburguerias');
                      break;
                    case "Churrascarias / Steakhouse":
                      navigate('/onde-comer/churrascarias-steakhouse');
                      break;
                    case "Peixes & Trutarias":
                      navigate('/onde-comer/peixes-trutarias');
                      break;
                    case "Cozinha Italiana":
                      navigate('/onde-comer/cozinha-italiana');
                      break;
                    case "Cozinha Japonesa":
                      navigate('/onde-comer/cozinha-japonesa');
                      break;
                    case "Cozinha Internacional":
                      navigate('/onde-comer/cozinha-internacional');
                      break;
                    case "Gastrobares & Bares":
                      navigate('/onde-comer/gastrobares-bares');
                      break;
                    case "Vinícolas & Bistrôs de Vinícola":
                      navigate('/onde-comer/vinicolas-bistros-vinicola');
                      break;
                    case "Fondue & Sequências":
                      navigate('/onde-comer/fondue-sequencias');
                      break;
                    case "Complexos Gastronômicos / Praças de Alimentação":
                      navigate('/onde-comer/complexos-gastronomicos-pracas-alimentacao');
                      break;
                    case "Lanches & Delivery":
                      navigate('/onde-comer/lanches-delivery');
                      break;
                    case "Padarias & Confeitarias":
                      navigate('/onde-comer/padarias-confeitarias');
                      break;
                    case "Chocolaterias & Gelaterias":
                      navigate('/onde-comer/chocolaterias-gelaterias');
                      break;
                    default:
                      console.log(`Navegando para: ${category.title}`);
                  }
                }}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-4 transition-all duration-200 border border-white/20 hover:scale-105 shadow-lg cursor-pointer"
              >
                <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-bold text-sm text-center mb-1">{category.title}</h3>
                <p className={`text-xs text-center font-medium mb-2 ${getColorClasses(category.color).split(' ')[1]}`}>
                  {category.items.length} opções
                </p>
                <p className="text-white/80 text-xs text-center font-medium leading-tight">
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
              Parceiros Gastronômicos
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">Conheça nossos parceiros gastronômicos de confiança</p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 280}px)` }}
            >
              {/* Duplicate first few items for seamless loop */}
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                Powered by Readdy
              </a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-orange-400/30 hover:scale-110 group"
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
