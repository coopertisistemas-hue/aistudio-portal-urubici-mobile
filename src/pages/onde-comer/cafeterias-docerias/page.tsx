
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CafeteriasDocerias() {
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
      title: "Café da Montanha",
      subtitle: "Cafés especiais e doces artesanais",
      image: "https://readdy.ai/api/search-image?query=Charming%20mountain%20coffee%20shop%20Caf%C3%A9%20da%20Montanha%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20artisanal%20sweets%2C%20specialty%20coffee%2C%20cozy%20atmosphere%2C%20rustic%20decor&width=300&height=200&seq=cafe_montanha&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Doce Montanha",
      subtitle: "Doces tradicionais da serra",
      image: "https://readdy.ai/api/search-image?query=Traditional%20mountain%20confectionery%20Doce%20Montanha%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20artisanal%20sweets%2C%20traditional%20desserts%2C%20cozy%20interior&width=300&height=200&seq=doce_montanha&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const partners = [
    {
      name: "Café da Montanha",
      description: "Cafés especiais e produtos artesanais",
      image: "https://readdy.ai/api/search-image?query=Mountain%20coffee%20shop%20logo%20Caf%C3%A9%20da%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20coffee%20brand%20identity%2C%20specialty%20coffee%20roaster&width=100&height=100&seq=logo6&orientation=squarish"
    },
    {
      name: "Doce Montanha",
      description: "Doces artesanais e chocolates especiais",
      image: "https://readdy.ai/api/search-image?query=Mountain%20confectionery%20logo%20Doce%20Montanha%20Urubici%20Santa%20Catarina%20Brazil%2C%20artisanal%20sweets%20brand%20identity%2C%20chocolate%20shop&width=100&height=100&seq=logo12&orientation=squarish"
    },
    {
      name: "Cafeteria Central",
      description: "Cafés e lanches no centro da cidade",
      image: "https://readdy.ai/api/search-image?query=Central%20coffee%20shop%20logo%20Cafeteria%20Central%20Urubici%20Santa%20Catarina%20Brazil%2C%20urban%20coffee%20brand%20identity%2C%20city%20center%20cafe&width=100&height=100&seq=logo13&orientation=squarish"
    }
  ];

  // Dados das cafeterias e docerias organizados
  const estabelecimentosData = [
    {
      id: 1,
      nome: "Café da Montanha",
      categoria: "Cafeteria",
      descricao: "Cafés especiais da região com grãos selecionados, ambiente aconchegante e vista para as montanhas. Doces artesanais e pães frescos.",
      whatsapp: "5548999887766",
      avaliacao: 4.7,
      imagem: "https://readdy.ai/api/search-image?query=Cozy%20mountain%20coffee%20shop%20Caf%C3%A9%20da%20Montanha%20with%20specialty%20coffee%2C%20mountain%20views%2C%20artisanal%20pastries%2C%20warm%20atmosphere&width=200&height=200&seq=cafe_montanha_card&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Café%20da%20Montanha%20Urubici%20SC",
      tags: [
        { label: "Cafés Especiais", type: "amenity", color: "orange" },
        { label: "Doces Artesanais", type: "amenity", color: "orange" },
        { label: "Vista Montanha", type: "location", color: "cyan" }
      ]
    },
    {
      id: 2,
      nome: "Doce Montanha",
      categoria: "Doceria",
      descricao: "Doces tradicionais da serra catarinense, chocolates artesanais e sobremesas especiais. Tradição familiar há mais de 20 anos.",
      whatsapp: "5548988776655",
      avaliacao: 4.8,
      imagem: "https://readdy.ai/api/search-image?query=Traditional%20mountain%20confectionery%20Doce%20Montanha%20with%20artisanal%20chocolates%2C%20traditional%20sweets%2C%20family%20tradition%2C%20cozy%20interior&width=200&height=200&seq=doce_montanha_card&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Doce%20Montanha%20Urubici%20SC",
      tags: [
        { label: "Chocolates Artesanais", type: "amenity", color: "orange" },
        { label: "Tradição Familiar", type: "feature", color: "amber" },
        { label: "Doces Tradicionais", type: "amenity", color: "orange" }
      ]
    },
    {
      id: 3,
      nome: "Cafeteria Central",
      categoria: "Cafeteria",
      descricao: "Localizada no centro de Urubici, oferece cafés, lanches e doces. Ambiente moderno e atendimento rápido para o dia a dia.",
      whatsapp: "5548977665544",
      avaliacao: 4.5,
      imagem: "https://readdy.ai/api/search-image?query=Modern%20central%20coffee%20shop%20Cafeteria%20Central%20in%20downtown%20Urubici%20with%20quick%20service%2C%20modern%20atmosphere%2C%20coffee%20and%20snacks&width=200&height=200&seq=cafeteria_central&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Cafeteria%20Central%20Urubici%20SC",
      tags: [
        { label: "Centro da Cidade", type: "location", color: "blue" },
        { label: "Atendimento Rápido", type: "feature", color: "green" },
        { label: "Ambiente Moderno", type: "feature", color: "purple" }
      ]
    },
    {
      id: 4,
      nome: "Doces da Serra",
      categoria: "Doceria",
      descricao: "Especializada em doces regionais e produtos caseiros. Compotas, geleias e doces de frutas da região com receitas tradicionais.",
      whatsapp: "5548966554433",
      avaliacao: 4.6,
      imagem: "https://readdy.ai/api/search-image?query=Regional%20sweets%20shop%20Doces%20da%20Serra%20with%20traditional%20recipes%2C%20homemade%20products%2C%20fruit%20preserves%2C%20mountain%20ingredients&width=200&height=200&seq=doces_serra&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Doces%20da%20Serra%20Urubici%20SC",
      tags: [
        { label: "Doces Regionais", type: "amenity", color: "orange" },
        { label: "Produtos Caseiros", type: "feature", color: "green" },
        { label: "Receitas Tradicionais", type: "feature", color: "amber" }
      ]
    },
    {
      id: 5,
      nome: "Café & Cia",
      categoria: "Cafeteria",
      descricao: "Cafeteria moderna com variedade de bebidas quentes e frias, sanduíches gourmet e ambiente descontraído para encontros.",
      whatsapp: "5548955443322",
      avaliacao: 4.4,
      imagem: "https://readdy.ai/api/search-image?query=Modern%20coffee%20shop%20Caf%C3%A9%20Cia%20with%20variety%20of%20hot%20and%20cold%20drinks%2C%20gourmet%20sandwiches%2C%20relaxed%20atmosphere%20for%20meetings&width=200&height=200&seq=cafe_cia&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Café%20Cia%20Urubici%20SC",
      tags: [
        { label: "Bebidas Variadas", type: "amenity", color: "orange" },
        { label: "Sanduíches Gourmet", type: "amenity", color: "purple" },
        { label: "Ambiente Descontraído", type: "feature", color: "blue" }
      ]
    },
    {
      id: 6,
      nome: "Doceria Artesanal",
      categoria: "Doceria",
      descricao: "Doces artesanais feitos com ingredientes naturais da região. Bolos, tortas e sobremesas especiais para ocasiões especiais.",
      whatsapp: "5548944332211",
      avaliacao: 4.3,
      imagem: "https://readdy.ai/api/search-image?query=Artisanal%20confectionery%20Doceria%20Artesanal%20with%20natural%20regional%20ingredients%2C%20cakes%2C%20pies%2C%20special%20desserts%20for%20occasions&width=200&height=200&seq=doceria_artesanal&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Doceria%20Artesanal%20Urubici%20SC",
      tags: [
        { label: "Ingredientes Naturais", type: "feature", color: "green" },
        { label: "Bolos e Tortas", type: "amenity", color: "orange" },
        { label: "Ocasiões Especiais", type: "feature", color: "pink" }
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-orange-600/90 text-white">
                          Cafeteria
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-orange-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white">
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
              <i className="ri-cup-line text-orange-400"></i>
              Cafeterias & Docerias
              <i className="ri-cup-line text-orange-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Cafés especiais e doces artesanais da serra</p>
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
                  const element = document.getElementById('cafeterias-docerias-urubici');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500/20 hover:bg-orange-400/30 hover:scale-105 active:scale-95 text-orange-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Cafeterias & Docerias em Urubici
              </button>
            </div>
          </div>
        </div>

        {/* Estabelecimentos List */}
        <div className="px-4 mb-6">
          <div 
            id="cafeterias-docerias-urubici"
            className="mb-4"
          >
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <i className="ri-cup-line text-orange-400"></i>
              Cafeterias & Docerias em Urubici
            </h3>
            <p className="text-white/70 text-sm">
              {estabelecimentosData.length} {estabelecimentosData.length === 1 ? 'estabelecimento disponível' : 'estabelecimentos disponíveis'}
            </p>
          </div>

          <div className="space-y-4">
            {estabelecimentosData.map((estabelecimento) => (
              <div key={estabelecimento.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                    <img
                      alt={estabelecimento.nome}
                      className="w-full h-full object-cover"
                      src={estabelecimento.imagem}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm leading-tight mb-1">
                          {estabelecimento.nome}
                        </h4>
                        
                        {/* Google Maps Rating */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {estabelecimento.avaliacao ? (
                              <>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <i
                                    key={star}
                                    className={`${star <= Math.floor(estabelecimento.avaliacao) ? 'ri-star-fill' : star <= estabelecimento.avaliacao ? 'ri-star-half-fill' : 'ri-star-line'} text-yellow-400 text-sm`}
                                  ></i>
                                ))}
                                <span className="text-yellow-300 text-xs font-medium ml-1">
                                  {estabelecimento.avaliacao.toFixed(1)}
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
                      
                      <div className="bg-orange-500/20 text-orange-200 border-orange-400/30 px-2 py-1 rounded-full text-xs font-medium">
                        {estabelecimento.categoria}
                      </div>
                    </div>

                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      {estabelecimento.descricao}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {estabelecimento.tags.map((tag, tagIndex) => {
                        const getTagColors = (color) => {
                          const colors = {
                            blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                            green: "bg-green-500/20 text-green-200 border-green-400/30",
                            purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                            orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                            pink: "bg-pink-500/20 text-pink-200 border-pink-400/30",
                            amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
                            red: "bg-red-500/20 text-red-200 border-red-400/30",
                            cyan: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
                            teal: "bg-teal-500/20 text-teal-200 border-teal-400/30"
                          };
                          return colors[color] || colors.orange;
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
                        {estabelecimento.whatsapp ? (
                          <a
                            href={`https://wa.me/${estabelecimento.whatsapp.replace(/\\D/g, '')}?text=Olá! Gostaria de informações sobre ${estabelecimento.nome}`}
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
                        <span>Fazer Pedido</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Cadastre seu Estabelecimento */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-orange-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre sua Cafeteria ou Doceria</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui cafeteria ou doceria em Urubici? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha cafeteria/doceria no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar
Estabelecimento</span>
              </a>
              <button
                onClick={() => navigate('/onde-comer')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
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
              Parceiros Gastronômicos
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">
              Conheça nossos parceiros gastronômicos de confiança
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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

            <div className="text-xs text-gray-500 border-t border-gray-200 pt-4">
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
