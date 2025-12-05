
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BistrosPage() {
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

  const featuredAds = [
    {
      title: "Bistrô da Serra Premium",
      subtitle: "Bistrô contemporâneo com culinária autoral e ingredientes locais da serra",
      image: "https://readdy.ai/api/search-image?query=Contemporary%20mountain%20bistro%20with%20gourmet%20cuisine%2C%20elegant%20atmosphere%2C%20local%20ingredients%2C%20sophisticated%20dining%2C%20mountain%20views%2C%20premium%20restaurant%20setting%2C%20warm%20lighting%2C%20welcoming%20atmosphere&width=300&height=200&seq=bistro1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Le Petit Urubici Charme",
      subtitle: "Bistrô francês elegante com pratos clássicos e carta de vinhos selecionados",
      image: "https://readdy.ai/api/search-image?query=Elegant%20French%20bistro%20with%20classic%20dishes%2C%20wine%20selection%2C%20romantic%20atmosphere%2C%20sophisticated%20interior%2C%20French%20cuisine%2C%20intimate%20dining%20setting%2C%20premium%20comfort&width=300&height=200&seq=bistro2&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const partners = [
    {
      name: "Bistrô da Montanha",
      description: "Gastronomia de qualidade no coração de Urubici",
      image: "https://readdy.ai/api/search-image?query=Mountain%20bistro%20logo%20Bistr%C3%B4%20da%20Montanha%20Santa%20Catarina%20Brazil%2C%20restaurant%20brand%20identity%2C%20elegant%20dining%20branding&width=100&height=100&seq=logo1&orientation=squarish"
    },
    {
      name: "Le Petit Urubici",
      description: "Experiência gastronômica francesa na serra catarinense",
      image: "https://readdy.ai/api/search-image?query=French%20bistro%20logo%20Le%20Petit%20Urubici%20Santa%20Catarina%20Brazil%2C%20elegant%20restaurant%20brand%20identity&width=100&height=100&seq=logo2&orientation=squarish"
    },
    {
      name: "Dany Lumertz",
      description: "Social Media & Conteúdo Digital — Estratégias e gestão",
      image: "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png"
    }
  ];

  // Dados dos bistrôs organizados
  const bistrosData = [
    {
      id: 1,
      nome: "Bistrô da Serra Premium",
      categoria: "Bistrô Contemporâneo",
      descricao: "Bistrô contemporâneo com culinária autoral e ingredientes locais. Oferece pratos elaborados, carta de vinhos e ambiente sofisticado.",
      whatsapp: "5548999887766",
      avaliacao: 4.8,
      imagem: "https://readdy.ai/api/search-image?query=Contemporary%20mountain%20bistro%20with%20gourmet%20cuisine%2C%20elegant%20atmosphere%2C%20local%20ingredients%2C%20sophisticated%20dining%2C%20mountain%20views%2C%20premium%20restaurant%20setting%2C%20warm%20lighting%2C%20welcoming%20atmosphere&width=200&height=200&seq=bistro_serra&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Bistr%C3%B4%20da%20Serra%20Premium%20Urubici%20SC",
      tags: [
        { label: "Culinária Autoral", type: "feature", color: "purple" },
        { label: "Carta de Vinhos", type: "amenity", color: "red" },
        { label: "Ambiente Sofisticado", type: "amenity", color: "blue" }
      ]
    },
    {
      id: 2,
      nome: "Le Petit Urubici Charme",
      categoria: "Bistrô Francês",
      descricao: "Bistrô francês elegante com pratos clássicos e carta de vinhos selecionados. Ambiente íntimo e romântico com toque europeu.",
      whatsapp: "5548999776655",
      avaliacao: 4.7,
      imagem: "https://readdy.ai/api/search-image?query=Elegant%20French%20bistro%20with%20classic%20dishes%2C%20wine%20selection%2C%20romantic%20atmosphere%2C%20sophisticated%20interior%2C%20French%20cuisine%2C%20intimate%20dining%20setting%2C%20premium%20comfort&width=200&height=200&seq=bistro_petit&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Le%20Petit%20Urubici%20Charme%20Urubici%20SC",
      tags: [
        { label: "Culinária Francesa", type: "feature", color: "blue" },
        { label: "Ambiente Romântico", type: "amenity", color: "pink" },
        { label: "Pratos Clássicos", type: "amenity", color: "purple" }
      ]
    },
    {
      id: 3,
      nome: "Bistrô Altitude Vista",
      categoria: "Bistrô Gourmet",
      descricao: "Bistrô com vista panorâmica da serra e pratos autorais. Experiência gastronômica única com ingredientes regionais.",
      whatsapp: "",
      avaliacao: 4.6,
      imagem: "https://readdy.ai/api/search-image?query=High%20altitude%20bistro%20with%20panoramic%20mountain%20views%2C%20gourmet%20dishes%2C%20modern%20decor%2C%20scenic%20dining%20experience%2C%20regional%20ingredients%2C%20sophisticated%20atmosphere&width=200&height=200&seq=bistro_altitude&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Bistr%C3%B4%20Altitude%20Vista%20Urubici%20SC",
      tags: [
        { label: "Vista Panorâmica", type: "feature", color: "cyan" },
        { label: "Pratos Autorais", type: "amenity", color: "purple" },
        { label: "Ingredientes Regionais", type: "feature", color: "green" }
      ]
    },
    {
      id: 4,
      nome: "Casa Bistrô Familiar",
      categoria: "Bistrô Casual",
      descricao: "Bistrô com ambiente familiar e toque gourmet. Ideal para encontros especiais com pratos elaborados e preço justo.",
      whatsapp: "5548999665544",
      avaliacao: 4.5,
      imagem: "https://readdy.ai/api/search-image?query=Cozy%20family%20bistro%20with%20warm%20atmosphere%2C%20gourmet%20comfort%20food%2C%20intimate%20setting%2C%20rustic%20elegant%20decor%2C%20family%20friendly%20dining&width=200&height=200&seq=casa_bistro&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Casa%20Bistr%C3%B4%20Familiar%20Urubici%20SC",
      tags: [
        { label: "Ambiente Familiar", type: "feature", color: "green" },
        { label: "Comfort Food", type: "amenity", color: "orange" },
        { label: "Preço Justo", type: "feature", color: "blue" }
      ]
    },
    {
      id: 5,
      nome: "Bistrô do Vale Alpino",
      categoria: "Bistrô Temático",
      descricao: "Bistrô localizado no vale com especialidade em fondues e pratos da culinária alpina. Ambiente rústico e aconchegante.",
      whatsapp: "5548999554433",
      avaliacao: 4.4,
      imagem: "https://readdy.ai/api/search-image?query=Alpine%20valley%20bistro%20with%20fondue%20specialty%2C%20mountain%20valley%20setting%2C%20cozy%20rustic%20atmosphere%2C%20alpine%20cuisine%2C%20traditional%20decor&width=200&height=200&seq=bistro_vale&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Bistr%C3%B4%20do%20Vale%20Alpino%20Urubici%20SC",
      tags: [
        { label: "Especialidade Fondue", type: "feature", color: "orange" },
        { label: "Culinária Alpina", type: "amenity", color: "blue" },
        { label: "Ambiente Rústico", type: "feature", color: "amber" }
      ]
    },
    {
      id: 6,
      nome: "Bistrô Contemporâneo",
      categoria: "Bistrô Moderno",
      descricao: "Bistrô moderno com design contemporâneo e menu inovador. Foco em técnicas culinárias modernas e apresentação artística.",
      whatsapp: "",
      avaliacao: 4.3,
      imagem: "https://readdy.ai/api/search-image?query=Modern%20contemporary%20bistro%20with%20innovative%20menu%2C%20artistic%20presentation%2C%20sleek%20design%2C%20culinary%20techniques%2C%20sophisticated%20dining%20experience&width=200&height=200&seq=bistro_contemporaneo&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Bistr%C3%B4%20Contempor%C3%A2neo%20Urubici%20SC",
      tags: [
        { label: "Design Moderno", type: "feature", color: "purple" },
        { label: "Menu Inovador", type: "amenity", color: "cyan" },
        { label: "Técnicas Culinárias", type: "feature", color: "blue" }
      ]
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

            {/* Navigation */}
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-purple-600/90 text-white">
                          Bistrô
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-purple-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
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
              <i className="ri-goblet-line text-purple-400"></i>
              Bistrôs
              <i className="ri-goblet-line text-purple-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Ambiente sofisticado com pratos elaborados e carta de vinhos</p>
          </div>
        </div>

        {/* Quick Access Shortcuts */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <i className="ri-flashlight-fill text-yellow-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">
                ATALHOS RÁPIDOS
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('bistros-em-urubici');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-purple-500/20 hover:bg-purple-400/30 hover:scale-105 active:scale-95 text-purple-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Bistrôs em Urubici
              </button>
            </div>
          </div>
        </div>

        {/* Bistrôs List */}
        <div className="px-4 mb-6">
          <div 
            id="bistros-em-urubici"
            className="mb-4"
          >
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <i className="ri-goblet-line text-purple-400"></i>
              Bistrôs em Urubici
            </h3>
            <p className="text-white/70 text-sm">
              {bistrosData.length} {bistrosData.length === 1 ? 'bistrô disponível' : 'bistrôs disponíveis'}
            </p>
          </div>

          <div className="space-y-4">
            {bistrosData.map((bistro) => (
              <div key={bistro.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                    <img
                      alt={bistro.nome}
                      className="w-full h-full object-cover"
                      src={bistro.imagem}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm leading-tight mb-1">
                          {bistro.nome}
                        </h4>
                        
                        {/* Google Maps Rating */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {bistro.avaliacao ? (
                              <>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <i
                                    key={star}
                                    className={`${star <= Math.floor(bistro.avaliacao) ? 'ri-star-fill' : star <= bistro.avaliacao ? 'ri-star-half-fill' : 'ri-star-line'} text-yellow-400 text-sm`}
                                  ></i>
                                ))}
                                <span className="text-yellow-300 text-xs font-medium ml-1">
                                  {bistro.avaliacao.toFixed(1)}
                                </span>
                              </>
                            ) : (
                              <>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <i
                                    key={star}
                                    className="ri-star-line text-gray-500 text-sm opacity-50"
                                  ></i>
                                ))}
                                <span className="text-gray-400 text-xs">
                                  Sem avaliação
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-500/20 text-purple-200 border-purple-400/30 px-2 py-1 rounded-full text-xs font-medium">
                        {bistro.categoria}
                      </div>
                    </div>

                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      {bistro.descricao}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {bistro.tags.map((tag, tagIndex) => {
                        const getTagColors = (color) => {
                          const colors = {
                            blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                            green: "bg-green-500/20 text-green-200 border-green-400/30",
                            purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                            orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                            pink: "bg-pink-500/20 text-pink-200 border-pink-400/30",
                            amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
                            red: "bg-red-500/20 text-red-200 border-red-400/30",
                            cyan: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30"
                          };
                          return colors[color] || colors.blue;
                        };

                        const getTagIcon = (type) => {
                          const icons = {
                            amenity: "ri-star-line",
                            feature: "ri-check-line",
                            location: "ri-map-pin-line",
                            service: "ri-service-line"
                          };
                          return icons[type] || "ri-information-line";
                        };

                        return (
                          <div
                            key={tagIndex}
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTagColors(tag.color)}`}
                          >
                            <i className={`${getTagIcon(tag.type)} text-xs`}></i>
                            <span>{tag.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        {bistro.whatsapp ? (
                          <a
                            href={`https://wa.me/${bistro.whatsapp.replace(/\\D/g, '')}?text=Olá! Gostaria de informações sobre ${bistro.nome}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap min-h-[44px]"
                          >
                            <i className="ri-whatsapp-line text-base"></i>
                            <span>WhatsApp</span>
                          </a>
                        ) : (
                          <button 
                            disabled
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-500 cursor-not-allowed rounded-lg text-white text-sm font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                            title="WhatsApp não disponível"
                          >
                            <i className="ri-whatsapp-line text-base"></i>
                            <span>WhatsApp</span>
                          </button>
                        )}
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-500 cursor-not-allowed rounded-lg text-white text-sm font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                          title="Em breve"
                        >
                          <i className="ri-eye-line text-base"></i>
                          <span>Ver Página</span>
                        </button>
                      </div>
                      <button 
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-500 cursor-not-allowed rounded-lg text-white text-sm font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                        title="Em breve"
                      >
                        <i className="ri-calendar-check-line text-base"></i>
                        <span>Reservar Mesa</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Cadastre seu Bistrô */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-purple-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Bistrô</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui bistrô em Urubici? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu bistrô no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Bistrô</span>
              </a>
              <button
                onClick={() => navigate('/onde-comer')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-arrow-left-line text-lg"></i>
                <span>Voltar a Onde Comer</span>
              </button>
            </div>
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
            <p className="text-white/70 text-xs text-center mt-1">
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex items-center justify-center mb-3 flex-shrink-0">
                        <img
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          src={partner.image}
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm leading-tight mb-1">
                        {partner.name}
                      </h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">
                          Parceiro Oficial
                        </span>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                        {partner.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
                      <h4 className="text-white font-bold text-sm leading-tight mb-1">
                        {partner.name}
                      </h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">
                          Parceiro Oficial
                        </span>
                      </div>
                      <p className="text-white/80 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                        {partner.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-7
hover:to-purple-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
                    currentPartnerSlide === dotIndex
                      ? 'bg-white w-6'
                      : 'bg-white/40 hover:bg-white/60 w-1.5'
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
              <h3
                className="text-lg font-bold text-blue-600 mb-2"
                style={{ fontFamily: 'Pacifico, serif' }}
              >
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

            <div className="text-xs text-gray-500 border-top border-gray-200 pt-4">
              © 2025 Desenvolvido por Urubici Connect
              <br />
              <a
                href="https://readdy.ai/?origin=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                Website Builder
              </a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-purple-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-scale-150 transition-all duration-300"></div>
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
