
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CozinhaItaliana() {
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
      title: "Nonna Italiana",
      subtitle: "Autêntica culinária italiana na serra",
      image: "https://readdy.ai/api/search-image?query=Authentic%20Italian%20restaurant%20Nonna%20Italiana%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20traditional%20Italian%20decor%2C%20pasta%20dishes%2C%20cozy%20trattoria%20atmosphere%2C%20mountain%20setting&width=300&height=200&seq=italiana1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Pasta & Basta",
      subtitle: "Massas artesanais e molhos especiais",
      image: "https://readdy.ai/api/search-image?query=Italian%20pasta%20restaurant%20Pasta%20Basta%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20fresh%20pasta%20making%2C%20Italian%20kitchen%2C%20artisanal%20cooking%2C%20traditional%20recipes&width=300&height=200&seq=pasta1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Trattoria da Serra",
      subtitle: "Tradição italiana com vista para a montanha",
      image: "https://readdy.ai/api/search-image?query=Mountain%20trattoria%20restaurant%20Trattoria%20da%20Serra%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20Italian%20dining%2C%20mountain%20views%2C%20rustic%20Italian%20decor%2C%20traditional%20cuisine&width=300&height=200&seq=trattoria1&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const partners = [
    {
      name: "Nonna Italiana",
      description: "Autêntica culinária italiana",
      image: "https://readdy.ai/api/search-image?query=Italian%20restaurant%20logo%20Nonna%20Italiana%20Urubici%20Santa%20Catarina%20Brazil%2C%20traditional%20Italian%20cuisine%20brand%20identity%2C%20trattoria%20restaurant&width=100&height=100&seq=logo20&orientation=squarish"
    },
    {
      name: "Pasta & Basta",
      description: "Massas artesanais e molhos especiais",
      image: "https://readdy.ai/api/search-image?query=Italian%20pasta%20logo%20Pasta%20Basta%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20pasta%20brand%20identity%2C%20Italian%20cooking&width=100&height=100&seq=logo21&orientation=squarish"
    },
    {
      name: "Trattoria da Serra",
      description: "Tradição italiana na montanha",
      image: "https://readdy.ai/api/search-image?query=Mountain%20trattoria%20logo%20Trattoria%20da%20Serra%20Urubici%20Santa%20Catarina%20Brazil%2C%20Italian%20mountain%20dining%20brand%20identity%2C%20traditional%20restaurant&width=100&height=100&seq=logo22&orientation=squarish"
    },
    {
      name: "Bella Italia",
      description: "Sabores autênticos da Itália",
      image: "https://readdy.ai/api/search-image?query=Italian%20restaurant%20logo%20Bella%20Italia%20Urubici%20Santa%20Catarina%20Brazil%2C%20authentic%20Italian%20dining%20brand%20identity%2C%20traditional%20cuisine&width=100&height=100&seq=logo23&orientation=squarish"
    },
    {
      name: "Cozinha Italiana",
      description: "Receitas tradicionais italianas",
      image: "https://readdy.ai/api/search-image?query=Italian%20kitchen%20logo%20Cozinha%20Italiana%20Urubici%20Santa%20Catarina%20Brazil%2C%20traditional%20Italian%20recipes%20brand%20identity%2C%20Italian%20cooking&width=100&height=100&seq=logo24&orientation=squarish"
    }
  ];

  const restaurants = [
    {
      name: "Nonna Italiana",
      category: "Trattoria Tradicional",
      rating: 4.9,
      reviews: 234,
      description: "Receitas tradicionais passadas de geração em geração. Ambiente acolhedor como na casa da nonna.",
      phone: "(49) 3278-4567",
      address: "Rua Roma, 123 - Centro",
      hours: "18:00 às 23:00",
      specialties: ["Lasanha", "Risotto", "Osso Buco", "Tiramisu"],
      image: "https://readdy.ai/api/search-image?query=Traditional%20Italian%20trattoria%20interior%20Nonna%20Italiana%20with%20authentic%20Italian%20decor%2C%20family%20dining%20atmosphere%2C%20traditional%20recipes%2C%20cozy%20setting%20in%20Urubici%20Santa%20Catarina&width=300&height=200&seq=rest1&orientation=landscape"
    },
    {
      name: "Pasta & Basta",
      category: "Pasta Artesanal",
      rating: 4.8,
      reviews: 189,
      description: "Massas frescas feitas diariamente com ingredientes importados da Itália. Molhos especiais da casa.",
      phone: "(49) 3278-5678",
      address: "Av. Veneza, 456 - Centro",
      hours: "17:30 às 22:30",
      specialties: ["Fettuccine", "Gnocchi", "Carbonara", "Pesto"],
      image: "https://readdy.ai/api/search-image?query=Fresh%20pasta%20restaurant%20Pasta%20Basta%20with%20pasta%20making%20station%2C%20Italian%20ingredients%2C%20artisanal%20cooking%2C%20modern%20Italian%20dining%20in%20Urubici%20Santa%20Catarina&width=300&height=200&seq=rest2&orientation=landscape"
    },
    {
      name: "Trattoria da Serra",
      category: "Cozinha Italiana",
      rating: 4.7,
      reviews: 167,
      description: "Tradição italiana com vista panorâmica da serra. Vinhos italianos selecionados.",
      phone: "(49) 3278-6789",
      address: "Estrada Panorâmica, 789 - Alto",
      hours: "18:30 às 23:00",
      specialties: ["Saltimbocca", "Polenta", "Bruschetta", "Gelato"],
      image: "https://readdy.ai/api/search-image?query=Mountain%20Italian%20trattoria%20Trattoria%20da%20Serra%20with%20panoramic%20mountain%20views%2C%20Italian%20wine%20selection%2C%20elegant%20dining%2C%20scenic%20location%20in%20Urubici%20Santa%20Catarina&width=300&height=200&seq=rest3&orientation=landscape"
    },
    {
      name: "Bella Italia",
      category: "Restaurante Italiano",
      rating: 4.6,
      reviews: 145,
      description: "Ambiente elegante com pratos clássicos da culinária italiana. Carta de vinhos especiais.",
      phone: "(49) 3278-7890",
      address: "Rua Milão, 321 - Centro",
      hours: "19:00 às 22:30",
      specialties: ["Vitello", "Ravioli", "Carpaccio", "Panna Cotta"],
      image: "https://readdy.ai/api/search-image?query=Elegant%20Italian%20restaurant%20Bella%20Italia%20with%20classic%20Italian%20cuisine%2C%20wine%20selection%2C%20sophisticated%20dining%20atmosphere%2C%20traditional%20dishes%20in%20Urubici%20Santa%20Catarina&width=300&height=200&seq=rest4&orientation=landscape"
    },
    {
      name: "Cozinha Italiana",
      category: "Cucina Casalinga",
      rating: 4.5,
      reviews: 98,
      description: "Cozinha caseira italiana com receitas familiares. Ambiente descontraído e acolhedor.",
      phone: "(49) 3278-8901",
      address: "Rua Nápoles, 567 - Bairro Alto",
      hours: "18:00 às 22:00",
      specialties: ["Minestrone", "Scaloppine", "Focaccia", "Cannoli"],
      image: "https://readdy.ai/api/search-image?query=Homestyle%20Italian%20kitchen%20Cozinha%20Italiana%20with%20family%20recipes%2C%20casual%20dining%20atmosphere%2C%20traditional%20home%20cooking%2C%20welcoming%20setting%20in%20Urubici%20Santa%20Catarina&width=300&height=200&seq=rest5&orientation=landscape"
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

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="ri-star-fill text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="ri-star-half-fill text-yellow-400"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="ri-star-line text-gray-400"></i>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="https://readdy.ai/api/search-image?query=Beautiful%20mountain%20landscape%20of%20Urubici%20Santa%20Catarina%20Brazil%20with%20rolling%20hills%2C%20green%20valleys%2C%20dramatic%20sky%2C%20serene%20natural%20scenery%2C%20high%20altitude%20terrain&width=1920&height=1080&seq=bg1&orientation=landscape"
        >
          <source
            src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27edd8e6a27e1aeb1a5c8b5c5f5c5f5c5f5c5f5&profile_id=175"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-green-600/90 text-white">
                          Patrocinado
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-green-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
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

        {/* Page Title */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-bowl-line text-green-400"></i>
              Cozinha Italiana
              <i className="ri-bowl-line text-green-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Autêntica culinária italiana na serra catarinense</p>
          </div>
        </div>

        {/* Restaurants List */}
        <div className="px-4 mb-8">
          <div className="space-y-4">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                      src={restaurant.image}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-bold text-lg leading-tight">{restaurant.name}</h3>
                      <div className="flex items-center gap-1 ml-2">
                        <div className="flex">
                          {renderStars(restaurant.rating)}
                        </div>
                        <span className="text-white/80 text-sm ml-1">({restaurant.reviews})</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                        {restaurant.category}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm mb-3 leading-relaxed">{restaurant.description}</p>

                    <div className="mb-3">
                      <p className="text-white/60 text-xs mb-1">Especialidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <a
                          href={`https://wa.me/55${restaurant.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                        >
                          <i className="ri-whatsapp-line"></i>
                          WhatsApp
                        </a>
                        <button 
                          disabled
                          className="flex-1 bg-gray-500/50 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium cursor-not-allowed whitespace-nowrap"
                        >
                          Ver Página
                        </button>
                      </div>
                      <div className="flex">
                        <button 
                          disabled
                          className="w-full bg-gray-500/50 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium cursor-not-allowed whitespace-nowrap"
                        >
                          Reservar Mesa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 mb-8">
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-bowl-line text-green-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Tem um Restaurante Italiano?</h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Cadastre seu estabelecimento e apareça para milhares de pessoas que visitam Urubici
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-lg whitespace-nowrap">
              Cadastrar Restaurante
            </button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="w-full mb-6">
          <div className="px-4 mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-star-line text-yellow-400"></i>
              Parceiros Cozinha Italiana
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">Conheça nossos parceiros especializados em culinária italiana</p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPartnerSlide * 280}px)` }}
            >
              {partners.concat(partners).map((partner, index) => (
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-green-400/30 hover:scale-110 group"
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
