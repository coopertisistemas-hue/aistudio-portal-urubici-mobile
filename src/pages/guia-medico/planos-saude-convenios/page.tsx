import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlanosSaudeConvenios() {
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
      title: "Unimed Lages",
      subtitle: "Cobertura Regional para Urubici",
      image: "https://readdy.ai/api/search-image?query=Unimed%20Lages%20health%20insurance%20office%20building%20in%20Santa%20Catarina%20Brazil%2C%20medical%20cooperative%20facility%2C%20healthcare%20insurance%20provider&width=300&height=200&seq=unimed1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "SC Saúde",
      subtitle: "Plano do Governo de Santa Catarina",
      image: "https://readdy.ai/api/search-image?query=SC%20Saude%20government%20health%20plan%20office%20in%20Santa%20Catarina%20Brazil%2C%20state%20healthcare%20facility%2C%20public%20health%20insurance&width=300&height=200&seq=sc_saude1&orientation=landscape",
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

  // Dados dos planos de saúde organizados por categoria
  const planosData = {
    "OPERADORAS NACIONAIS": [
      {
        id: 1,
        nome: "Central Nacional Unimed (CNU)",
        categoria: "Operadora Nacional",
        telefone: "",
        whatsapp: "",
        descricao: "Planos empresariais com categorias Clássico, Estilo, Absoluto, Superior e Exclusivo. Atendimento online e regional para Urubici.",
        imagem: "https://readdy.ai/api/search-image?query=Central%20Nacional%20Unimed%20CNU%20health%20insurance%20office%20building%2C%20national%20medical%20cooperative%20facility%20in%20Brazil&width=200&height=200&seq=cnu_unimed&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Central%20Nacional%20Unimed%20%28CNU%29%20%E2%80%93%20vendas%20para%20Urubici%20Atendimento%20online/regional%20Urubici%20SC",
        tags: [
          { label: "Nacional", type: "service", color: "blue" },
          { label: "Planos Empresariais", type: "feature", color: "purple" },
          { label: "Atendimento Online", type: "service", color: "green" }
        ]
      },
      {
        id: 2,
        nome: "Bradesco Saúde",
        categoria: "Operadora Nacional",
        telefone: "",
        whatsapp: "",
        descricao: "Planos empresariais e de adesão com rede referenciada em SC incluindo Urubici. Consulta da rede por localização disponível.",
        imagem: "https://readdy.ai/api/search-image?query=Bradesco%20Saude%20health%20insurance%20office%20building%2C%20national%20healthcare%20provider%20facility%20in%20Brazil&width=200&height=200&seq=bradesco_saude&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Bradesco%20Sa%C3%BAde%20%E2%80%93%20Rede%20referenciada%20%28SC/Urubici%29%20Atendimento%20online/regional%20Urubici%20SC",
        tags: [
          { label: "Nacional", type: "service", color: "blue" },
          { label: "Rede SC", type: "feature", color: "green" },
          { label: "Empresarial/Adesão", type: "service", color: "purple" }
        ]
      },
      {
        id: 3,
        nome: "SulAmérica Saúde",
        categoria: "Operadora Nacional",
        telefone: "",
        whatsapp: "",
        descricao: "Planos empresariais e de adesão com rede credenciada em Santa Catarina, incluindo cobertura para Urubici.",
        imagem: "https://readdy.ai/api/search-image?query=SulAmerica%20Saude%20health%20insurance%20office%20building%2C%20national%20healthcare%20provider%20facility%20in%20Brazil&width=200&height=200&seq=sulamerica_saude&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=SulAm%C3%A9rica%20Sa%C3%BAde%20%E2%80%93%20Rede%20em%20SC%20%28inclui%20Urubici%29%20Atendimento%20online/regional%20Urubici%20SC",
        tags: [
          { label: "Nacional", type: "service", color: "blue" },
          { label: "Rede Credenciada SC", type: "feature", color: "green" },
          { label: "Empresarial/Adesão", type: "service", color: "purple" }
        ]
      }
    ],
    "OPERADORAS REGIONAIS": [
      {
        id: 4,
        nome: "Unimed Lages",
        categoria: "Operadora Regional",
        telefone: "0800 024 0506",
        whatsapp: "",
        descricao: "Planos individuais e coletivos com cobertura regional. Atendimento em Urubici via rede referenciada Unimed.",
        imagem: "https://readdy.ai/api/search-image?query=Unimed%20Lages%20regional%20health%20insurance%20office%20building%20in%20Santa%20Catarina%20Brazil%2C%20medical%20cooperative%20facility&width=200&height=200&seq=unimed_lages&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Unimed%20Lages%20%28cobre%20Urubici%20via%20rede%20referenciada%29%20Rua%20Frei%20Gabriel%2C%20115%20%E2%80%93%20Centro%20Lages%20SC",
        tags: [
          { label: "Regional", type: "service", color: "orange" },
          { label: "Individual/Coletivo", type: "feature", color: "blue" },
          { label: "Rede Referenciada", type: "service", color: "green" },
          { label: "SAC 0800", type: "feature", color: "purple" }
        ]
      }
    ],
    "PLANOS ESTADUAIS": [
      {
        id: 5,
        nome: "SC Saúde",
        categoria: "Plano Estadual",
        telefone: "0800 644 6040",
        whatsapp: "",
        descricao: "Plano do Governo de Santa Catarina para servidores e beneficiários. Assistência ambulatorial e hospitalar com Guia Médico online e App.",
        imagem: "https://readdy.ai/api/search-image?query=SC%20Saude%20government%20health%20plan%20office%20building%20in%20Santa%20Catarina%20Brazil%2C%20state%20healthcare%20facility&width=200&height=200&seq=sc_saude_gov&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=SC%20Sa%C3%BAde%20%E2%80%93%20Plano%20do%20Governo%20de%20Santa%20Catarina%20Atendimento%20online%3B%20CAS%20regionais%20Urubici%20SC",
        tags: [
          { label: "Plano Estadual", type: "service", color: "indigo" },
          { label: "Servidores", type: "feature", color: "blue" },
          { label: "App Disponível", type: "service", color: "green" },
          { label: "Central 0800", type: "feature", color: "purple" }
        ]
      }
    ],
    "REFERÊNCIA LOCAL": [
      {
        id: 6,
        nome: "Hospital São José de Urubici",
        categoria: "Hospital Local",
        telefone: "(49) 3278-4141",
        whatsapp: "5549327841411",
        descricao: "Atende SUS, particular e convênios. Confirmar cobertura com a operadora. Principal referência hospitalar local.",
        imagem: "https://readdy.ai/api/search-image?query=Hospital%20Sao%20Jose%20de%20Urubici%20building%20exterior%2C%20local%20hospital%20facility%20in%20Santa%20Catarina%20Brazil%20mountain%20region&width=200&height=200&seq=hospital_sao_jose&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Hospital%20S%C3%A3o%20Jos%C3%A9%20de%20Urubici%20%E2%80%93%20Planos%20aceitos%20%28refer%C3%AAncia%20local%29%20R.%20Boanerges%20Pereira%20de%20Medeiros%2C%201196%20%E2%80%93%20Centro%20Urubici%20SC",
        tags: [
          { label: "Referência Local", type: "service", color: "red" },
          { label: "SUS", type: "feature", color: "blue" },
          { label: "Convênios", type: "service", color: "green" },
          { label: "Particular", type: "feature", color: "purple" }
        ]
      }
    ]
  };

  // Categorias para atalhos
  const categorias = Object.keys(planosData);

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

  const scrollToCategoria = (categoria: string) => {
    const element = document.getElementById(`categoria-${categoria.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Agrupar planos por categoria
  const planosPorCategoria = categorias.reduce((acc, categoria) => {
    acc[categoria] = planosData[categoria];
    return acc;
  }, {} as Record<string, typeof planosData[keyof typeof planosData]>);

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
          poster="https://readdy.ai/api/search-image?query=Cachoeira%20Rio%20dos%20Bugres%20waterfall%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20beautiful%20mountain%20waterfall%20landscape&width=1920&height=1080&seq=poster_cachoeira&orientation=landscape"
        >
          <source
            src="https://www.dropbox.com/scl/fi/dtb3orj4932wbs5pj00ve/Cachoeira-Rio-dos-Bugres.mp4?rlkey=y86ivtx9abb5bgs5gj5migzou&st=9fh0b11x&dl=1"
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-blue-600/90 text-white">
                          Plano de Saúde
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

        {/* Page Title */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-shield-cross-line text-blue-400"></i>
              Planos de Saúde & Convênios
              <i className="ri-shield-cross-line text-blue-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Operadoras e convênios disponíveis em Urubici</p>
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
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCategoria(categoria)}
                  className="bg-blue-500/20 hover:bg-blue-400/30 hover:scale-105 active:scale-95 text-blue-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Health Plans by Category */}
        <div className="px-4 mb-6">
          {categorias.map((categoria) => {
            const planos = planosPorCategoria[categoria];
            if (!planos || planos.length === 0) return null;

            return (
              <div key={categoria} className="mb-8">
                <div
                  id={`categoria-${categoria.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="mb-4"
                >
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-shield-cross-line text-blue-400"></i>
                    {categoria}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {planos.length} {planos.length === 1 ? 'plano disponível' : 'planos disponíveis'}
                  </p>
                </div>

                <div className="space-y-4">
                  {planos.map((plano) => (
                    <div key={plano.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={plano.nome}
                            className="w-full h-full object-cover"
                            src={plano.imagem}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-bold text-sm leading-tight">
                              {plano.nome}
                            </h4>
                            <div className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {plano.categoria}
                            </div>
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {plano.descricao}
                          </p>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {plano.tags.map((tag, tagIndex) => {
                              const getTagColors = (color: string) => {
                                const colors = {
                                  blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                                  green: "bg-green-500/20 text-green-200 border-green-400/30",
                                  purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                                  red: "bg-red-500/20 text-red-200 border-red-400/30",
                                  orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                                  indigo: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30"
                                };
                                return colors[color as keyof typeof colors] || colors.blue;
                              };

                              const getTagIcon = (type: string) => {
                                const icons = {
                                  service: "ri-service-line",
                                  feature: "ri-star-line",
                                  status: "ri-circle-fill",
                                  payment: "ri-bank-card-line"
                                };
                                return icons[type as keyof typeof icons] || "ri-information-line";
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

                          <div className="flex gap-2 flex-wrap">
                            {plano.telefone && (
                              <a
                                href={`tel:${plano.telefone}`}
                                className="inline-flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                              >
                                <i className="ri-phone-line text-sm"></i>
                                <span>Telefone</span>
                              </a>
                            )}
                            {plano.whatsapp && (
                              <a
                                href={`https://wa.me/${plano.whatsapp}?text=Olá! Gostaria de informações sobre os planos de saúde do ${plano.nome}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                              >
                                <i className="ri-whatsapp-line text-sm"></i>
                                <span>WhatsApp</span>
                              </a>
                            )}
                            <a
                              href={plano.maps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                            >
                              <i className="ri-map-pin-line text-sm"></i>
                              <span>Localização</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Cadastre seu Plano */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-blue-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Plano</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você representa uma operadora de plano de saúde? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha operadora/plano de saúde no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Plano</span>
              </a>
              <button
                onClick={() => navigate('/guia-medico')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-arrow-left-line text-lg"></i>
                <span>Voltar ao Guia Médico</span>
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-blue-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </button>

        <style jsx>{`
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
