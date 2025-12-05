import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FarmaciasDrogarias() {
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
      title: "Farmácia Central",
      subtitle: "Medicamentos & Produtos de Saúde",
      image: "https://readdy.ai/api/search-image?query=Modern%20pharmacy%20drugstore%20exterior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20pharmacy%20building%2C%20healthcare%20facility%20with%20mountain%20landscape%20background&width=300&height=200&seq=pharmacy1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Drogaria Popular",
      subtitle: "Preços Acessíveis & Atendimento 24h",
      image: "https://readdy.ai/api/search-image?query=Popular%20drugstore%20pharmacy%20exterior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20affordable%20pharmacy%20building%2C%2024%20hour%20medical%20facility&width=300&height=200&seq=drogaria1&orientation=landscape",
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

  // Dados das farmácias organizados por categoria em ordem alfabética
  const farmaciasData = {
    "DROGARIAS": [
      {
        id: 1,
        nome: "Drogaria Catarinense",
        categoria: "Drogaria",
        telefone: "(49) 3278-1234",
        whatsapp: "5549327812345",
        descricao: "Drogaria com ampla variedade de medicamentos, produtos de higiene e beleza. Atendimento farmacêutico especializado.",
        imagem: "https://readdy.ai/api/search-image?query=Drogaria%20Catarinense%20pharmacy%20interior%20with%20shelves%20of%20medications%20and%20health%20products%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20modern%20drugstore%2C%20medical%20facility&width=200&height=200&seq=drogaria_catarinense&orientation=squarish",
        tags: [
          { label: "Medicamentos", type: "service", color: "blue" },
          { label: "Higiene e Beleza", type: "service", color: "pink" },
          { label: "Atendimento Farmacêutico", type: "feature", color: "purple" }
        ]
      },
      {
        id: 2,
        nome: "Drogaria Popular",
        categoria: "Drogaria",
        telefone: "(49) 3278-5678",
        whatsapp: "5549327856789",
        descricao: "Drogaria com preços acessíveis e grande variedade de produtos farmacêuticos. Entrega domiciliar disponível.",
        imagem: "https://readdy.ai/api/search-image?query=Drogaria%20Popular%20affordable%20pharmacy%20with%20wide%20selection%20of%20medications%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20accessible%20drugstore%2C%20healthcare%20facility&width=200&height=200&seq=drogaria_popular&orientation=squarish",
        tags: [
          { label: "Preços Populares", type: "feature", color: "green" },
          { label: "Entrega Domiciliar", type: "service", color: "blue" },
          { label: "Horário Estendido", type: "feature", color: "orange" }
        ]
      }
    ],
    "FARMÁCIAS": [
      {
        id: 3,
        nome: "Farmácia Central",
        categoria: "Farmácia",
        telefone: "(49) 3278-9012",
        whatsapp: "5549327890123",
        descricao: "Farmácia completa com medicamentos, cosméticos e produtos de saúde. Atendimento farmacêutico e orientação especializada.",
        imagem: "https://readdy.ai/api/search-image?query=Farm%C3%A1cia%20Central%20complete%20pharmacy%20with%20modern%20interior%20and%20pharmaceutical%20consultation%20area%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20healthcare%20facility&width=200&height=200&seq=farmacia_central&orientation=squarish",
        tags: [
          { label: "Atendimento Especializado", type: "feature", color: "blue" },
          { label: "Cosméticos", type: "service", color: "pink" },
          { label: "Orientação Farmacêutica", type: "service", color: "purple" }
        ]
      },
      {
        id: 4,
        nome: "Farmácia São José",
        categoria: "Farmácia",
        telefone: "(49) 3278-3456",
        whatsapp: "5549327834567",
        descricao: "Farmácia tradicional com manipulação de medicamentos e produtos naturais. Atendimento personalizado há mais de 20 anos.",
        imagem: "https://readdy.ai/api/search-image?query=Farm%C3%A1cia%20S%C3%A3o%20Jos%C3%A9%20traditional%20pharmacy%20with%20medication%20compounding%20area%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20specialized%20pharmaceutical%20services&width=200&height=200&seq=farmacia_sao_jose&orientation=squarish",
        tags: [
          { label: "Manipulação", type: "service", color: "purple" },
          { label: "Produtos Naturais", type: "service", color: "green" },
          { label: "Tradição Local", type: "feature", color: "orange" }
        ]
      },
      {
        id: 5,
        nome: "Farmácia Urubici",
        categoria: "Farmácia",
        telefone: "(49) 3278-7890",
        whatsapp: "5549327878901",
        descricao: "Farmácia com grande variedade de medicamentos e produtos de higiene pessoal. Convênios com principais planos de saúde.",
        imagem: "https://readdy.ai/api/search-image?query=Farm%C3%A1cia%20Urubici%20local%20pharmacy%20with%20wide%20selection%20of%20medications%20and%20personal%20care%20products%20in%20Santa%20Catarina%20Brazil%2C%20healthcare%20facility&width=200&height=200&seq=farmacia_urubici&orientation=squarish",
        tags: [
          { label: "Grande Variedade", type: "service", color: "blue" },
          { label: "Convênios", type: "payment", color: "purple" },
          { label: "Higiene Pessoal", type: "service", color: "green" }
        ]
      },
      {
        id: 6,
        nome: "Stylo Farma",
        categoria: "Farmácia",
        telefone: "(49) 3278-4567",
        whatsapp: "5549327845671",
        descricao: "Farmácia moderna com foco em cosméticos, perfumaria e produtos de beleza. Atendimento especializado em dermocosméticos.",
        imagem: "https://readdy.ai/api/search-image?query=Stylo%20Farma%20modern%20pharmacy%20with%20cosmetics%20and%20beauty%20products%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20dermocosmetics%20specialist%20pharmacy&width=200&height=200&seq=stylo_farma&orientation=squarish",
        tags: [
          { label: "Cosméticos", type: "service", color: "pink" },
          { label: "Perfumaria", type: "service", color: "purple" },
          { label: "Dermocosméticos", type: "feature", color: "blue" },
          { label: "Atendimento Moderno", type: "feature", color: "green" }
        ]
      }
    ],
    "FARMÁCIAS 24H": [
      {
        id: 7,
        nome: "Farmácia 24 Horas",
        categoria: "Farmácia 24h",
        telefone: "(49) 3278-2468",
        whatsapp: "5549327824681",
        descricao: "Única farmácia 24 horas da cidade. Atendimento de emergência e plantão noturno com farmacêutico responsável.",
        imagem: "https://readdy.ai/api/search-image?query=24%20hour%20pharmacy%20with%20night%20service%20and%20emergency%20care%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20round%20the%20clock%20pharmacy%2C%20medical%20facility&width=200&height=200&seq=farmacia_24h&orientation=squarish",
        tags: [
          { label: "24 Horas", type: "status", color: "red" },
          { label: "Emergência", type: "service", color: "red" },
          { label: "Plantão Noturno", type: "feature", color: "indigo" }
        ]
      }
    ]
  };

  // Categorias para atalhos em ordem alfabética
  const categorias = Object.keys(farmaciasData).sort();

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

  // Agrupar farmácias por categoria
  const farmaciasPorCategoria = categorias.reduce((acc, categoria) => {
    acc[categoria] = farmaciasData[categoria];
    return acc;
  }, {} as Record<string, typeof farmaciasData[keyof typeof farmaciasData]>);

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
                          Farmácia
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
              <i className="ri-capsule-line text-blue-400"></i>
              Farmácias & Drogarias
              <i className="ri-capsule-line text-blue-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Medicamentos e produtos farmacêuticos</p>
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
              <button
                onClick={() => navigate('/guia-medico/emergencias-servicos-publicos')}
                className="bg-red-500/90 hover:bg-red-400 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Emergência
              </button>
            </div>
          </div>
        </div>

        {/* Pharmacies by Category */}
        <div className="px-4 mb-6">
          {categorias.map((categoria) => {
            const farmacias = farmaciasPorCategoria[categoria];
            if (!farmacias || farmacias.length === 0) return null;

            return (
              <div key={categoria} className="mb-8">
                <div
                  id={`categoria-${categoria.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="mb-4"
                >
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-capsule-line text-blue-400"></i>
                    {categoria}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {farmacias.length} {farmacias.length === 1 ? 'estabelecimento disponível' : 'estabelecimentos disponíveis'}
                  </p>
                </div>

                <div className="space-y-4">
                  {farmacias.map((farmacia) => (
                    <div key={farmacia.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={farmacia.nome}
                            className="w-full h-full object-cover"
                            src={farmacia.imagem}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-bold text-sm leading-tight">
                              {farmacia.nome}
                            </h4>
                            <div className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {farmacia.categoria}
                            </div>
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {farmacia.descricao}
                          </p>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {farmacia.tags.map((tag, tagIndex) => {
                              const getTagColors = (color: string) => {
                                const colors = {
                                  blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                                  green: "bg-green-500/20 text-green-200 border-green-400/30",
                                  purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                                  red: "bg-red-500/20 text-red-200 border-red-400/30",
                                  orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                                  pink: "bg-pink-500/20 text-pink-200 border-pink-400/30",
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

                          <div className="flex gap-2">
                            <a
                              href={`https://wa.me/${farmacia.whatsapp}?text=Olá! Gostaria de informações sobre medicamentos na ${farmacia.nome}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                            >
                              <i className="ri-whatsapp-line text-sm"></i>
                              <span>WhatsApp</span>
                            </a>
                            <button className="inline-flex items-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap">
                              <i className="ri-eye-line text-sm"></i>
                              <span>Ver Página</span>
                            </button>
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

        {/* Call to Action - Cadastre seu Serviço */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-blue-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre sua Farmácia</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui farmácia ou drogaria? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha farmácia/drogaria no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Farmácia</span>
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto">
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
