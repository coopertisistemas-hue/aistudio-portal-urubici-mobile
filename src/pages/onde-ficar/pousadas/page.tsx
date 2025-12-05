import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PousadasPage() {
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
      title: "Pousada Serra Bela Premium",
      subtitle: "Pousada eco-sustentável com chalés e área de lazer completa",
      image: "https://readdy.ai/api/search-image?query=Luxury%20eco-friendly%20mountain%20inn%20with%20wooden%20chalets%2C%20swimming%20pool%2C%20garden%20areas%2C%20sustainable%20architecture%2C%20mountain%20views%2C%20premium%20amenities%2C%20natural%20landscape%20setting%2C%20warm%20lighting%2C%20welcoming%20atmosphere&width=300&height=200&seq=pousada1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Pousada Pedra Preta Charme",
      subtitle: "Pousada de charme na serra com vista panorâmica das montanhas",
      image: "https://readdy.ai/api/search-image?query=Charming%20boutique%20mountain%20inn%20with%20panoramic%20views%2C%20elegant%20rustic%20architecture%2C%20cozy%20interiors%2C%20stone%20and%20wood%20details%2C%20scenic%20mountain%20backdrop%2C%20romantic%20atmosphere%2C%20premium%20comfort&width=300&height=200&seq=pousada2&orientation=landscape",
      link: "#",
      isAd: true
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

  // Dados das pousadas organizados
  const pousadasData = [
    {
      id: 1,
      nome: "Pousada Serra Bela Premium",
      categoria: "Pousada Premium",
      descricao: "Pousada eco-sustentável com chalés e área de lazer completa. Oferece piscina aquecida, spa, trilhas ecológicas e gastronomia regional.",
      whatsapp: "5548999887766",
      avaliacao: 4.8,
      imagem: "https://readdy.ai/api/search-image?query=Luxury%20eco-friendly%20mountain%20inn%20with%20wooden%20chalets%2C%20swimming%20pool%2C%20garden%20areas%2C%20sustainable%20architecture%2C%20mountain%20views%2C%20premium%20amenities%2C%20natural%20landscape%20setting%2C%20warm%20lighting%2C%20welcoming%20atmosphere&width=200&height=200&seq=pousada_serra_bela&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20Serra%20Bela%20Premium%20Urubici%20SC",
      tags: [
        { label: "Eco-Sustentável", type: "feature", color: "green" },
        { label: "Piscina Aquecida", type: "amenity", color: "blue" },
        { label: "Spa", type: "amenity", color: "purple" }
      ]
    },
    {
      id: 2,
      nome: "Pousada Pedra Preta Charme",
      categoria: "Pousada Charme",
      descricao: "Pousada de charme na serra com vista panorâmica das montanhas. Quartos temáticos, lareira e deck com vista privilegiada.",
      whatsapp: "5548999776655",
      avaliacao: 4.7,
      imagem: "https://readdy.ai/api/search-image?query=Charming%20boutique%20mountain%20inn%20with%20panoramic%20views%2C%20elegant%20rustic%20architecture%2C%20cozy%20interiors%2C%20stone%20and%20wood%20details%2C%20scenic%20mountain%20backdrop%2C%20romantic%20atmosphere%2C%20premium%20comfort&width=200&height=200&seq=pousada_pedra_preta&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20Pedra%20Preta%20Charme%20Urubici%20SC",
      tags: [
        { label: "Vista Panorâmica", type: "feature", color: "cyan" },
        { label: "Lareira", type: "amenity", color: "orange" },
        { label: "Deck", type: "amenity", color: "amber" }
      ]
    },
    {
      id: 3,
      nome: "Pousada Vó Júlia Tradicional",
      categoria: "Pousada Familiar",
      descricao: "Pousada familiar com tradição e aconchego. Ambiente familiar, café da manhã caseiro e hospitalidade genuína da serra catarinense.",
      whatsapp: "",
      avaliacao: 4.5,
      imagem: "https://readdy.ai/api/search-image?query=Traditional%20family-run%20mountain%20inn%20with%20homey%20atmosphere%2C%20rustic%20charm%2C%20garden%20setting%2C%20wooden%20architecture%2C%20cozy%20rooms%2C%20family%20hospitality%2C%20mountain%20landscape%2C%20warm%20welcoming%20entrance&width=200&height=200&seq=pousada_vo_julia&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20V%C3%B3%20J%C3%BAlia%20Tradicional%20Urubici%20SC",
      tags: [
        { label: "Familiar", type: "feature", color: "pink" },
        { label: "Café Caseiro", type: "amenity", color: "amber" },
        { label: "Tradição", type: "feature", color: "purple" }
      ]
    },
    {
      id: 4,
      nome: "Pousada Vila dos Butiás",
      categoria: "Pousada",
      descricao: "Pousada com jardim exuberante e ambiente tranquilo. Ideal para relaxar em meio à natureza com conforto e privacidade.",
      whatsapp: "5548999665544",
      avaliacao: 4.6,
      imagem: "https://readdy.ai/api/search-image?query=Peaceful%20mountain%20inn%20surrounded%20by%20lush%20gardens%2C%20tropical%20plants%2C%20quiet%20atmosphere%2C%20comfortable%20accommodations%2C%20natural%20setting%2C%20privacy%2C%20wooden%20architecture%2C%20serene%20environment&width=200&height=200&seq=pousada_vila_butias&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20Vila%20dos%20Buti%C3%A1s%20Urubici%20SC",
      tags: [
        { label: "Jardim", type: "feature", color: "green" },
        { label: "Tranquilo", type: "feature", color: "blue" },
        { label: "Privacidade", type: "amenity", color: "purple" }
      ]
    },
    {
      id: 5,
      nome: "Pousada Recanto dos Vaga-Lumes",
      categoria: "Pousada",
      descricao: "Conforto e jardim em harmonia com a natureza. Pousada com área verde preservada e observação da fauna local.",
      whatsapp: "5548999554433",
      avaliacao: 4.4,
      imagem: "https://readdy.ai/api/search-image?query=Nature-focused%20mountain%20inn%20with%20preserved%20green%20areas%2C%20wildlife%20observation%20opportunities%2C%20comfortable%20rooms%2C%20natural%20gardens%2C%20fireflies%20habitat%2C%20eco-friendly%20design%2C%20peaceful%20mountain%20setting&width=200&height=200&seq=pousada_vaga_lumes&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20Recanto%20dos%20Vaga-Lumes%20Urubici%20SC",
      tags: [
        { label: "Área Verde", type: "feature", color: "green" },
        { label: "Fauna Local", type: "feature", color: "cyan" },
        { label: "Observação", type: "amenity", color: "amber" }
      ]
    },
    {
      id: 6,
      nome: "Pousada Flor de Tuna",
      categoria: "Pousada",
      descricao: "Pousada em meio à natureza exuberante com foco no bem-estar e conexão com o ambiente natural da região.",
      whatsapp: "",
      avaliacao: 4.3,
      imagem: "https://readdy.ai/api/search-image?query=Wellness-focused%20mountain%20inn%20in%20lush%20natural%20valley%2C%20flower%20gardens%2C%20meditation%20areas%2C%20holistic%20atmosphere%2C%20natural%20healing%20environment%2C%20peaceful%20retreat%2C%20mountain%20flora%2C%20serene%20setting&width=200&height=200&seq=pousada_flor_tuna&orientation=squarish",
      maps: "https://www.google.com/maps/search/?api=1&query=Pousada%20Flor%20de%20Tuna%20Urubici%20SC",
      tags: [
        { label: "Bem-estar", type: "feature", color: "purple" },
        { label: "Natureza", type: "feature", color: "green" },
        { label: "Relaxamento", type: "amenity", color: "blue" }
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
                          Pousada
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
              <i className="ri-home-heart-line text-purple-400"></i>
              Pousadas
              <i className="ri-home-heart-line text-purple-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Pousadas aconchegantes com atendimento personalizado</p>
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
                  const element = document.getElementById('pousadas-em-urubici');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-purple-500/20 hover:bg-purple-400/30 hover:scale-105 active:scale-95 text-purple-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Pousadas em Urubici
              </button>
            </div>
          </div>
        </div>

        {/* Pousadas List */}
        <div className="px-4 mb-6">
          <div 
            id="pousadas-em-urubici"
            className="mb-4"
          >
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <i className="ri-home-heart-line text-purple-400"></i>
              Pousadas em Urubici
            </h3>
            <p className="text-white/70 text-sm">
              {pousadasData.length} {pousadasData.length === 1 ? 'pousada disponível' : 'pousadas disponíveis'}
            </p>
          </div>

          <div className="space-y-4">
            {pousadasData.map((pousada) => (
              <div key={pousada.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                    <img
                      alt={pousada.nome}
                      className="w-full h-full object-cover"
                      src={pousada.imagem}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm leading-tight mb-1">
                          {pousada.nome}
                        </h4>
                        
                        {/* Google Maps Rating */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {pousada.avaliacao ? (
                              <>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <i
                                    key={star}
                                    className={`${star <= Math.floor(pousada.avaliacao) ? 'ri-star-fill' : star <= pousada.avaliacao ? 'ri-star-half-fill' : 'ri-star-line'} text-yellow-400 text-sm`}
                                  ></i>
                                ))}
                                <span className="text-yellow-300 text-xs font-medium ml-1">
                                  {pousada.avaliacao.toFixed(1)}
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
                        {pousada.categoria}
                      </div>
                    </div>

                    <p className="text-white/80 text-xs leading-relaxed mb-3">
                      {pousada.descricao}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {pousada.tags.map((tag, tagIndex) => {
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
                        {pousada.whatsapp ? (
                          <a
                            href={`https://wa.me/${pousada.whatsapp.replace(/\\D/g, '')}?text=Olá! Gostaria de informações sobre ${pousada.nome}`}
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
                        <span>Reservar Online</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Cadastre sua Pousada */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-purple-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre sua Pousada</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui pousada em Urubici? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha pousada no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Pousada</span>
              </a>
              <button
                onClick={() => navigate('/onde-ficar')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-arrow-left-line text-lg"></i>
                <span>Voltar a Onde Ficar</span>
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
