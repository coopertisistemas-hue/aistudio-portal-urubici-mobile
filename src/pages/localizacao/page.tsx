
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function Localizacao() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentSlide, setCurrentSlide] = useState(0);
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
      title: "Hotel Serra Azul",
      subtitle: "Hospedagem Premium na Serra",
      image: "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20exterior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20premium%20accommodation%20with%20mountain%20views%2C%20elegant%20hotel%20architecture%20surrounded%20by%20nature&width=300&height=200&seq=hotel1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Café da Montanha",
      subtitle: "Sabores Únicos da Serra",
      image: "https://readdy.ai/api/search-image?query=Cozy%20mountain%20coffee%20shop%20cafe%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20rustic%20coffee%20house%20with%20warm%20lighting%2C%20artisanal%20coffee%20and%20local%20pastries&width=300&height=200&seq=cafe1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Trilha do Morro da Igreja",
      subtitle: "Aventura e Natureza",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20mountain%20hiking%20trail%20Morro%20da%20Igreja%20Urubici%20Santa%20Catarina%20Brazil%2C%20scenic%20trekking%20path%20with%20panoramic%20views%2C%20adventure%20tourism%20in%20Brazilian%20highlands&width=300&height=200&seq=trail1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Pousada Vale Verde",
      subtitle: "Aconchego e Tranquilidade",
      image: "https://readdy.ai/api/search-image?query=Charming%20mountain%20inn%20pousada%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20cozy%20accommodation%20with%20green%20valley%20views%2C%20rustic%20hospitality%20in%20Brazilian%20mountains&width=300&height=200&seq=inn1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Restaurante Sabor da Terra",
      subtitle: "Gastronomia Regional",
      image: "https://readdy.ai/api/search-image?query=Traditional%20Brazilian%20mountain%20restaurant%20in%20Urubici%20Santa%20Catarina%2C%20regional%20cuisine%20dining%20establishment%2C%20local%20food%20and%20mountain%20atmosphere&width=300&height=200&seq=restaurant1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Vinícola Serra Catarinense",
      subtitle: "Vinhos de Altitude",
      image: "https://readdy.ai/api/search-image?query=Mountain%20vineyard%20winery%20in%20Santa%20Catarina%20Brazil%2C%20high%20altitude%20wine%20production%2C%20scenic%20vineyard%20with%20mountain%20landscape%20background&width=300&height=200&seq=winery1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Aventura Radical",
      subtitle: "Esportes de Montanha",
      image: "https://readdy.ai/api/search-image?query=Mountain%20adventure%20sports%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20extreme%20sports%20activities%2C%20rock%20climbing%20and%20outdoor%20adventures%20in%20Brazilian%20highlands&width=300&height=200&seq=adventure1&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  // Auto-slide for featured ads
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredAds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, featuredAds.length]);

  const pontosTuristicos = [
    {
      name: "Morro da Igreja",
      coordinates: "-28.1234, -49.5678",
      distance: "12 km do centro",
      description: "Ponto mais alto de Santa Catarina com vista panorâmica",
      category: "Mirante"
    },
    {
      name: "Pedra Furada",
      coordinates: "-28.2345, -49.6789",
      distance: "8 km do centro",
      description: "Formação rochosa natural com arco de pedra",
      category: "Formação Rochosa"
    },
    {
      name: "Cascata Véu de Noiva",
      coordinates: "-28.3456, -49.7890",
      distance: "15 km do centro",
      description: "Cachoeira de 60 metros de altura",
      category: "Cachoeira"
    },
    {
      name: "Centro Histórico",
      coordinates: "-28.0123, -49.4567",
      distance: "Centro da cidade",
      description: "Arquitetura colonial e patrimônio histórico",
      category: "Patrimônio"
    }
  ];

  const servicosEssenciais = [
    {
      name: "Hospital Municipal",
      address: "Rua das Flores, 123",
      phone: "(49) 3278-1234",
      category: "Saúde",
      icon: "ri-hospital-line"
    },
    {
      name: "Corpo de Bombeiros",
      address: "Av. Principal, 456",
      phone: "193",
      category: "Emergência",
      icon: "ri-fire-line"
    },
    {
      name: "Polícia Militar",
      address: "Rua da Segurança, 789",
      phone: "190",
      category: "Segurança",
      icon: "ri-shield-line"
    },
    {
      name: "Prefeitura Municipal",
      address: "Praça Central, 100",
      phone: "(49) 3278-5678",
      category: "Público",
      icon: "ri-government-line"
    }
  ];

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

            {/* Navigation Icons */}
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
                          Localização
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
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
              <i className="ri-map-2-line text-green-400"></i>
              Localização
              <i className="ri-map-2-line text-green-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Mapas, coordenadas e informações de localização em Urubici</p>
          </div>
        </div>

        {/* City Info */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="text-center mb-4">
              <h3 className="text-white font-bold text-lg mb-2">Urubici, SC</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <i className="ri-map-pin-line text-green-300 text-lg"></i>
                <span className="text-white/80 text-sm">-28.0167, -49.5833</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <i className="ri-road-map-line text-blue-300 text-lg mb-1"></i>
                <div className="text-white text-sm font-medium">Altitude</div>
                <div className="text-white/80 text-xs">915 metros</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <i className="ri-group-line text-purple-300 text-lg mb-1"></i>
                <div className="text-white text-sm font-medium">População</div>
                <div className="text-white/80 text-xs">11.019 hab</div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3 px-4 rounded-lg text-sm transition-all duration-200 hover:scale-105">
              <i className="ri-navigation-line mr-2"></i>
              Abrir no Google Maps
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg">
            <div className="p-4 border-b border-white/20">
              <h3 className="text-white font-bold text-lg text-center">Mapa Interativo</h3>
            </div>
            <div className="relative h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.567890123456!2d-49.5833!3d-28.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUrubici%2C%20SC!5e0!3m2!1spt!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Urubici"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Tourist Points */}
        <div className="px-4 mb-6">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Pontos Turísticos</h3>
          <div className="space-y-3">
            {pontosTuristicos.map((ponto, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm mb-1">{ponto.name}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <i className="ri-map-pin-line text-green-300 text-xs"></i>
                      <span className="text-white/70 text-xs">{ponto.coordinates}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-road-map-line text-blue-300 text-xs"></i>
                      <span className="text-white/70 text-xs">{ponto.distance}</span>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed">{ponto.description}</p>
                  </div>
                  <div className="ml-3">
                    <div className="px-2 py-1 bg-green-600/80 text-white text-xs font-medium rounded-full">
                      {ponto.category}
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2 px-3 rounded-lg text-xs transition-all duration-200 hover:scale-105">
                  <i className="ri-direction-line mr-1"></i>
                  Como Chegar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Services */}
        <div className="px-4 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Serviços Essenciais</h3>
          <div className="grid grid-cols-1 gap-3">
            {servicosEssenciais.map((servico, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${servico.icon} text-red-300 text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm mb-1">{servico.name}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <i className="ri-map-pin-line text-green-300 text-xs"></i>
                      <span className="text-white/70 text-xs">{servico.address}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-phone-line text-blue-300 text-xs"></i>
                      <span className="text-white/70 text-xs">{servico.phone}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-3 rounded-lg text-xs transition-all duration-200 hover:scale-105">
                        <i className="ri-phone-line mr-1"></i>
                        Ligar
                      </button>
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-2 px-3 rounded-lg text-xs transition-all duration-200 hover:scale-105">
                        <i className="ri-direction-line mr-1"></i>
                        Localizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-8 py-6">
          <div className="px-4 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
                Portal Urubici
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guia completo de localização<br />
                da serra catarinense
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
              © 2025 Portal Urubici<br />
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                Powered by Readdy
              </a>
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
        `}</style>
      </div>
    </div>
  );
}