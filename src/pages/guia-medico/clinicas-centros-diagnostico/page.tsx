import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClinicasCentrosDiagnostico() {
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
      title: "Laboratório Central Urubici",
      subtitle: "Exames & Diagnósticos",
      image: "https://readdy.ai/api/search-image?query=Modern%20medical%20laboratory%20exterior%20building%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20diagnostic%20center%20facility%2C%20medical%20testing%20laboratory%20with%20mountain%20background&width=300&height=200&seq=lab1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Centro de Diagnóstico",
      subtitle: "Exames de Imagem Avançados",
      image: "https://readdy.ai/api/search-image?query=Professional%20diagnostic%20center%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20imaging%20facility%2C%20radiology%20center%20building&width=300&height=200&seq=diag1&orientation=landscape",
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

  // Função para verificar se está aberto baseado no horário
  const isOpenNow = (horarios: string) => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

    // Parse horarios string (assuming format like "Seg-Sex: 8:00-18:00, Sáb: 8:00-12:00")
    const scheduleParts = horarios.split(',').map(part => part.trim());
    
    for (const part of scheduleParts) {
      const [days, timeRange] = part.split(':').map(item => item.trim());
      const [startTime, endTime] = timeRange.split('-');
      
      const [startHours, startMinutes] = startTime.split(':').map(Number);
      const [endHours, endMinutes] = endTime.split(':').map(Number);
      
      const startTotalMinutes = startHours * 60 + startMinutes;
      const endTotalMinutes = endHours * 60 + endMinutes;
      
      // Check if current day matches the schedule days
      if (
        (currentDay >= 1 && currentDay <= 5 && days.includes('Seg-Sex')) ||
        (currentDay === 6 && days.includes('Sáb')) ||
        (currentDay === 0 && days.includes('Dom'))
      ) {
        if (currentTime >= startTotalMinutes && currentTime <= endTotalMinutes) {
          return true;
        }
      }
    }
    
    return false;
  };

  // Dados dos profissionais e serviços organizados por especialidade em ordem alfabética
  const clinicasData = {
    "ANÁLISES CLÍNICAS": [
      {
        id: 1,
        nome: "Laboratório Central Urubici",
        especialidade: "Análises Clínicas",
        descricao: "Laboratório completo com exames de sangue, urina, fezes e análises bioquímicas. Equipamentos modernos e resultados rápidos.",
        whatsapp: "5549327812345",
        imagem: "https://readdy.ai/api/search-image?query=Modern%20medical%20laboratory%20interior%20with%20equipment%20and%20technicians%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20clinical%20analysis%20laboratory%2C%20medical%20testing%20facility&width=200&height=200&seq=lab_central&orientation=squarish",
        tags: [
          { label: "Coleta Domiciliar", type: "service", color: "blue" },
          { label: "Resultados Online", type: "feature", color: "green" },
          { label: "Convênios", type: "payment", color: "purple" }
        ]
      },
      {
        id: 4,
        nome: "Laboratório São Francisco",
        especialidade: "Análises Clínicas",
        descricao: "Exames laboratoriais completos, coleta domiciliar disponível. Convênios com principais planos de saúde.",
        whatsapp: "5549327834567",
        imagem: "https://readdy.ai/api/search-image?query=Clinical%20laboratory%20S%C3%A3o%20Francisco%20with%20modern%20equipment%20and%20professional%20staff%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20testing%20laboratory%2C%20healthcare%20facility&width=200&height=200&seq=lab_sao_francisco&orientation=squarish",
        tags: [
          { label: "Coleta Domiciliar", type: "service", color: "blue" },
          { label: "Todos os Convênios", type: "payment", color: "purple" },
          { label: "Horário Estendido", type: "feature", color: "orange" }
        ]
      }
    ],
    "DIAGNÓSTICO ESPECIALIZADO": [
      {
        id: 3,
        nome: "Clínica de Diagnóstico Avançado",
        especialidade: "Diagnóstico Especializado",
        descricao: "Exames cardiológicos, neurológicos e endocrinológicos. Eletrocardiograma, holter e teste ergométrico.",
        whatsapp: "5549327890123",
        imagem: "https://readdy.ai/api/search-image?query=Advanced%20diagnostic%20clinic%20with%20cardiac%20and%20neurological%20equipment%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20specialized%20medical%20diagnostics%2C%20modern%20healthcare%20facility&width=200&height=200&seq=clinica_avancada&orientation=squarish",
        tags: [
          { label: "Especializado", type: "service", color: "purple" },
          { label: "Equipamentos Modernos", type: "feature", color: "blue" },
          { label: "Urgência", type: "service", color: "red" }
        ]
      }
    ],
    "EXAMES DE IMAGEM": [
      {
        id: 2,
        nome: "Centro de Diagnóstico por Imagem",
        especialidade: "Exames de Imagem",
        descricao: "Ultrassonografia, raio-X, tomografia e ressonância magnética. Tecnologia de ponta para diagnósticos precisos.",
        whatsapp: "5549327856789",
        imagem: "https://readdy.ai/api/search-image?query=Medical%20imaging%20center%20with%20ultrasound%20and%20radiology%20equipment%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20diagnostic%20imaging%20facility%2C%20modern%20medical%20technology&width=200&height=200&seq=centro_imagem&orientation=squarish",
        tags: [
          { label: "Tecnologia 3D", type: "feature", color: "blue" },
          { label: "Laudos Digitais", type: "service", color: "green" },
          { label: "Agendamento Online", type: "feature", color: "indigo" }
        ]
      }
    ],
    "RADIOLOGIA": [
      {
        id: 5,
        nome: "Centro Radiológico Urubici",
        especialidade: "Radiologia",
        descricao: "Radiografias digitais, mamografia e densitometria óssea. Laudos especializados e atendimento humanizado.",
        whatsapp: "5549327878901",
        imagem: "https://readdy.ai/api/search-image?query=Radiology%20center%20with%20digital%20X-ray%20equipment%20and%20mammography%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20imaging%20facility%2C%20radiological%20diagnostics&width=200&height=200&seq=centro_radiologico&orientation=squarish",
        tags: [
          { label: "Radiologia Digital", type: "feature", color: "blue" },
          { label: "Mamografia", type: "service", color: "pink" },
          { label: "Laudos Especializados", type: "service", color: "green" }
        ]
      }
    ]
  };

  // Especialidades para atalhos em ordem alfabética
  const especialidades = Object.keys(clinicasData).sort();

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

  const scrollToEspecialidade = (especialidade: string) => {
    const element = document.getElementById(`especialidade-${especialidade.toLowerCase().replace(/[^a-z0-9]/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Agrupar profissionais por especialidade
  const profissionaisPorEspecialidade = especialidades.reduce((acc, especialidade) => {
    acc[especialidade] = clinicasData[especialidade];
    return acc;
  }, {} as Record<string, typeof clinicasData[keyof typeof clinicasData]>);

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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-cyan-600/90 text-white">
                          Diagnóstico
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white">
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
              <i className="ri-microscope-line text-cyan-400"></i>
              Clínicas & Centros de Diagnóstico
              <i className="ri-microscope-line text-cyan-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Laboratórios e serviços de diagnóstico</p>
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
              {especialidades.map((especialidade, index) => (
                <button
                  key={index}
                  onClick={() => scrollToEspecialidade(especialidade)}
                  className="bg-cyan-500/20 hover:bg-cyan-400/30 hover:scale-105 active:scale-95 text-cyan-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {especialidade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professionals by Specialty */}
        <div className="px-4 mb-6">
          {especialidades.map((especialidade) => {
            const profissionais = profissionaisPorEspecialidade[especialidade];
            if (!profissionais || profissionais.length === 0) return null;

            return (
              <div key={especialidade} className="mb-8">
                <div
                  id={`especialidade-${especialidade.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="mb-4"
                >
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-microscope-line text-cyan-400"></i>
                    {especialidade}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {profissionais.length} {profissionais.length === 1 ? 'serviço disponível' : 'serviços disponíveis'}
                  </p>
                </div>

                <div className="space-y-4">
                  {profissionais.map((clinica) => (
                    <div key={clinica.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={clinica.nome}
                            className="w-full h-full object-cover"
                            src={clinica.imagem}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-bold text-sm leading-tight">
                              {clinica.nome}
                            </h4>
                            <div className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {clinica.especialidade}
                            </div>
                          </div>
                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {clinica.descricao}
                          </p>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {/* Outras Tags */}
                            {clinica.tags.map((tag, tagIndex) => {
                              const getTagColors = (color: string) => {
                                const colors = {
                                  blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                                  green: "bg-green-500/20 text-green-200 border-green-400/30",
                                  emerald: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
                                  purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                                  indigo: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
                                  red: "bg-red-500/20 text-red-200 border-red-400/30",
                                  orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                                  pink: "bg-pink-500/20 text-pink-200 border-pink-400/30"
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
                              href={`https://wa.me/${clinica.whatsapp}?text=Olá! Gostaria de informações sobre os serviços do ${clinica.nome}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors shadow hover:shadow-md"
                            >
                              <i className="ri-whatsapp-line"></i>
                              <span>Contato via WhatsApp</span>
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

        {/* Call to Action - Cadastre seu Serviço */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-cyan-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui clínica ou centro de diagnóstico? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha clínica/centro de diagnóstico no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Serviço</span>
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

        {/* Partners Carousel */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <i className="ri-handshake-line text-green-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">
                PARCEIROS
              </h3>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPartnerSlide * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 mb-3 mx-auto">
                        <img
                          alt={partner.name}
                          className="w-full h-full object-cover"
                          src={partner.image}
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{partner.name}</h4>
                      <p className="text-white/70 text-xs">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {partners.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentPartnerSlide(dotIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPartnerSlide === dotIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2'
                    }`}
                    aria-label={`Ir para slide de parceiro ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="px-4 mb-6">
          <button
            onClick={scrollToTop}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <i className="ri-arrow-up-line"></i>
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="px-4 py-6 text-center text-white/60 text-xs">
          <p>
            © {new Date().getFullYear()} Portal Urubici. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido com ❤️ para a comunidade de Urubici
          </p>
        </footer>
      </div>
    </div>
  );
}
