
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EspecialidadesDiagnosticos() {
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
      title: "Clínica Urubici",
      subtitle: "Atendimento Médico Completo",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20exterior%20building%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20healthcare%20facility%2C%20medical%20center%20architecture%20with%20mountains%20background%2C%20professional%20medical%20services&width=300&height=200&seq=clinic1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Farmácia Central",
      subtitle: "Medicamentos & Produtos de Saúde",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20pharmacy%20drugstore%20exterior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20pharmacy%20building%2C%20healthcare%20facility%20with%20mountain%20landscape%20background&width=300&height=200&seq=pharmacy1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Dr. Carlos Silva",
      subtitle: "Cardiologista - CRM 12345",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20male%20doctor%20cardiologist%20in%20white%20coat%20with%20stethoscope%2C%20medical%20professional%20portrait%2C%20healthcare%20specialist%2C%20clean%20medical%20background%20with%20soft%20lighting&width=300&height=200&seq=doc1&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  const partners = [
    {
      name: "Urubici Park Hotel",
      description: "Hospedagem de qualidade no coração de Urubici",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20logo%20Urubici%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20hospitality%20brand%20identity%2C%20elegant%20hotel%20branding&width=100&height=100&seq=logo1&orientation=squarish"
    },
    {
      name: "São Joaquim Park Hotel",
      description: "Experiência única na serra catarinense",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20logo%20S%C3%A3o%20Joaquim%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20luxury%20hospitality%20brand%20identity&width=100&height=100&seq=logo2&orientation=squarish"
    },
    {
      name: "Dany Lumertz",
      description: "Social Media & Conteúdo Digital — Estratégias e gestão",
      image:
        "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png"
    }
  ];

  const specialtyCategories = [
    {
      title: "Médicos & Especialistas",
      description: "Consultórios e clínicas médicas",
      icon: "ri-user-heart-line",
      color: "blue",
      count: 8,
      services: [
        "Cardiologia",
        "Neurologia",
        "Ortopedia",
        "Pediatria",
        "Ginecologia"
      ]
    },
    {
      title: "Psicologia & Terapias",
      description: "Psicólogos e terapias complementares",
      icon: "ri-brain-line",
      color: "purple",
      count: 14,
      services: [
        "Psicologia Clínica",
        "Terapia Familiar",
        "Psicopedagogia",
        "Terapia Ocupacional"
      ]
    },
    {
      title: "Biomedicina & Estética",
      description: "Biomédicos e clínicas de estética avançada",
      icon: "ri-heart-pulse-line",
      color: "pink",
      count: 6,
      services: [
        "Harmonização Facial",
        "Tratamentos Estéticos",
        "Biomedicina Estética"
      ]
    },
    {
      title: "Odontologia",
      description: "Dentistas e clínicas odontológicas",
      icon: "ri-tooth-line",
      color: "green",
      count: 12,
      services: [
        "Clínica Geral",
        "Ortodontia",
        "Implantodontia",
        "Odontopediatria"
      ]
    },
    {
      title: "Fisioterapia & Reabilitação",
      description: "Fisioterapeutas, pilates e reabilitação motora",
      icon: "ri-run-line",
      color: "orange",
      count: 8,
      services: [
        "Fisioterapia",
        "Pilates",
        "RPG",
        "Reabilitação Motora"
      ]
    },
    {
      title: "Clínicas & Centros de Diagnóstico",
      description: "Laboratórios e serviços de diagnóstico",
      icon: "ri-microscope-line",
      color: "cyan",
      count: 5,
      services: [
        "Laboratórios",
        "Exames de Imagem",
        "Diagnóstico por Imagem"
      ]
    },
    {
      title: "Atendimento Online",
      description: "Psicoterapia online e teleatendimento",
      icon: "ri-video-line",
      color: "indigo",
      count: 3,
      services: [
        "Teleconsulta",
        "Psicoterapia Online",
        "Telemedicina"
      ]
    }
  ];

  // Definindo as especialidades para uso na seção de profissionais
  const specialties = [
    "Cardiologia",
    "Neurologia", 
    "Ortopedia",
    "Pediatria",
    "Ginecologia",
    "Psicologia Clínica",
    "Terapia Familiar",
    "Psicopedagogia",
    "Harmonização Facial",
    "Tratamentos Estéticos",
    "Clínica Geral Odontológica",
    "Ortodontia",
    "Implantodontia",
    "Fisioterapia",
    "Pilates",
    "Laboratórios",
    "Exames de Imagem",
    "Teleconsulta"
  ];

  // Definindo os profissionais para cada especialidade
  const professionals = [
    {
      name: "Dr. João Silva",
      specialty: "Cardiologia",
      crm: "CRM 12345",
      description: "Cardiologista com 15 anos de experiência. Especialista em cardiologia preventiva e intervencionista.",
      phone: "5549327812345",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20cardiologist%20doctor%20in%20white%20coat%20with%20stethoscope%2C%20medical%20specialist%20portrait%2C%20healthcare%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=cardio1&orientation=squarish",
      tags: ["Cardiologia Preventiva", "Cardiologia Intervencionista", "Ecocardiograma", "Holter 24h"]
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Psicologia Clínica",
      crm: "CRP 67890",
      description: "Psicóloga clínica especializada em terapia cognitivo-comportamental. Atendimento presencial e online.",
      phone: "5549327856789",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20therapist%20in%20office%2C%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psico1&orientation=squarish",
      tags: ["Terapia Cognitivo-Comportamental", "Ansiedade", "Depressão", "Atendimento Online"]
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Ortopedia",
      crm: "CRM 34567",
      description: "Ortopedista especializado em cirurgia do joelho e medicina esportiva. Atendimento de lesões esportivas.",
      phone: "5549327834567",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20orthopedic%20surgeon%20doctor%2C%20sports%20medicine%20specialist%2C%20medical%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=ortho1&orientation=squarish",
      tags: ["Cirurgia do Joelho", "Medicina Esportiva", "Artroscopia", "Lesões Esportivas"]
    },
    {
      name: "Dra. Ana Paula Costa",
      specialty: "Pediatria",
      crm: "CRM 45678",
      description: "Pediatra com especialização em neonatologia. Cuidados médicos especializados para crianças e recém-nascidos.",
      phone: "5549327845678",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20pediatrician%20doctor%20with%20children%2C%20pediatric%20specialist%20portrait%2C%20child%20healthcare%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=pediatra1&orientation=squarish",
      tags: ["Neonatologia", "Puericultura", "Vacinação", "Desenvolvimento Infantil"]
    },
    {
      name: "Dra. Juliana Ferreira",
      specialty: "Ginecologia",
      crm: "CRM 56789",
      description: "Ginecologista e obstetra especializada em saúde da mulher. Acompanhamento pré-natal e cirurgias ginecológicas.",
      phone: "5549327856789",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20gynecologist%20obstetrician%20doctor%2C%20women%20health%20specialist%20portrait%2C%20medical%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=gineco1&orientation=squarish",
      tags: ["Obstetrícia", "Pré-natal", "Cirurgia Ginecológica", "Saúde da Mulher"]
    }
  ];

  // Função para obter classes de cores das tags
  const getTagColorClasses = (tag: string, specialty: string) => {
    const colorMap = {
      "Cardiologia": {
        "Cardiologia Preventiva": "bg-red-500/20 text-red-200 border-red-400/30",
        "Cardiologia Intervencionista": "bg-red-500/20 text-red-200 border-red-400/30",
        "Ecocardiograma": "bg-red-500/20 text-red-200 border-red-400/30",
        "Holter 24h": "bg-red-500/20 text-red-200 border-red-400/30"
      },
      "Psicologia Clínica": {
        "Terapia Cognitivo-Comportamental": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Ansiedade": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Depressão": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Atendimento Online": "bg-purple-500/20 text-purple-200 border-purple-400/30"
      },
      "Ortopedia": {
        "Cirurgia do Joelho": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Medicina Esportiva": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Artroscopia": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Lesões Esportivas": "bg-blue-500/20 text-blue-200 border-blue-400/30"
      },
      "Pediatria": {
        "Neonatologia": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Puericultura": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Vacinação": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Desenvolvimento Infantil": "bg-pink-500/20 text-pink-200 border-pink-400/30"
      },
      "Ginecologia": {
        "Obstetrícia": "bg-green-500/20 text-green-200 border-green-400/30",
        "Pré-natal": "bg-green-500/20 text-green-200 border-green-400/30",
        "Cirurgia Ginecológica": "bg-green-500/20 text-green-200 border-green-400/30",
        "Saúde da Mulher": "bg-green-500/20 text-green-200 border-green-400/30"
      }
    };

    return (
      (colorMap as any)[specialty]?.[tag] ||
      "bg-gray-500/20 text-gray-200 border-gray-400/30"
    );
  };

  // Função para obter ícone da tag
  const getTagIcon = (tag: string) => {
    const iconMap = {
      "Cardiologia Preventiva": "ri-heart-line",
      "Cardiologia Intervencionista": "ri-heart-pulse-line",
      "Ecocardiograma": "ri-sound-module-line",
      "Holter 24h": "ri-time-line",
      "Terapia Cognitivo-Comportamental": "ri-brain-line",
      "Ansiedade": "ri-heart-pulse-line",
      "Depressão": "ri-emotion-sad-line",
      "Atendimento Online": "ri-video-line",
      "Cirurgia do Joelho": "ri-surgical-mask-line",
      "Medicina Esportiva": "ri-football-line",
      "Artroscopia": "ri-microscope-line",
      "Lesões Esportivas": "ri-first-aid-kit-line",
      "Neonatologia": "ri-baby-line",
      "Puericultura": "ri-heart-add-line",
      "Vacinação": "ri-syringe-line",
      "Desenvolvimento Infantil": "ri-plant-line",
      "Obstetrícia": "ri-parent-line",
      "Pré-natal": "ri-heart-add-line",
      "Cirurgia Ginecológica": "ri-surgical-mask-line",
      "Saúde da Mulher": "ri-women-line"
    };

    return (iconMap as any)[tag] || "ri-heart-line";
  };

  // Auto‑slide for featured ads
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuredAds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, featuredAds.length]);

  // Auto‑slide for partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide(prev => (prev + 1) % partners.length);
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
    const slug = categoryTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');

    // Navegação específica para cada categoria
    if (categoryTitle === "Médicos & Especialistas") {
      navigate('/guia-medico/medicos-especialistas');
    } else if (categoryTitle === "Psicologia & Terapias") {
      navigate('/guia-medico/psicologia-terapias');
    } else if (categoryTitle === "Biomedicina & Estética") {
      navigate('/guia-medico/biomedicina-estetica');
    } else if (categoryTitle === "Odontologia") {
      navigate('/guia-medico/odontologia');
    } else if (categoryTitle === "Fisioterapia & Reabilitação") {
      navigate('/guia-medico/fisioterapia-reabilitacao');
    } else if (categoryTitle === "Clínicas & Centros de Diagnóstico") {
      navigate('/guia-medico/clinicas-centros-diagnostico');
    } else if (categoryTitle === "Atendimento Online") {
      navigate('/guia-medico/atendimento-online');
    } else {
      navigate(`/guia-medico/${slug}`);
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/50 text-blue-200 border-blue-400/40',
      purple: 'bg-purple-500/50 text-purple-200 border-purple-400/40',
      pink: 'bg-pink-500/50 text-pink-200 border-pink-400/40',
      green: 'bg-green-500/50 text-green-200 border-green-400/40',
      orange: 'bg-orange-500/50 text-orange-200 border-orange-400/40',
      cyan: 'bg-cyan-500/50 text-cyan-200 border-cyan-400/40',
      indigo: 'bg-indigo-500/50 text-indigo-200 border-indigo-400/40'
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      'bg-gray-500/50 text-gray-200 border-gray-400/40'
    );
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
                <h1
                  className="font-bold text-lg leading-none text-blue-400"
                  style={{ fontFamily: 'Pacifico, serif' }}
                >
                  Portal Urubici
                </h1>
                <p className="text-xs text-white/80 leading-tight">
                  Notícias, Onde Ir, Onde Ficar,<br />
                  Onde Comer, tudo sobre a cidade
                </p>
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
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setLanguageDropdown(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-white/50 transition-colors ${
                          currentLanguage === lang.code
                            ? 'bg-white/30 font-medium'
                            : ''
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-red-600/90 text-white">
                          Saúde
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
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
                    currentSlide === dotIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
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
              <i className="ri-user-heart-line text-green-400"></i>
              Especialidades & Diagnósticos
              <i className="ri-user-heart-line text-green-400"></i>
            </h2>
            <p className="text-white/70 text-sm">
              Médicos, clínicas, exames, laboratórios e terapia
            </p>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <i className="ri-flashlight-fill text-yellow-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">
                ATALHOS DISPONÍVEIS
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() =>
                  navigate('/guia-medico/emergencias-servicos-publicos')
                }
                className="bg-red-500/90 hover:bg-red-400 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Emergência
              </button>
              <button className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap">
                Farmácias 24h
              </button>
              <button className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap">
                Laboratórios
              </button>
              <button className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-90 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap">
                Posto de Saúde
              </button>
            </div>
          </div>
        </div>

        {/* Specialty Categories */}
        <div className="px-4 mb-6">
          <div className="mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-user-heart-line text-green-400"></i>
              Especialidades Médicas
              <i className="ri-user-heart-line text-green-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">
              Encontre o profissional ideal para sua necessidade
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {specialtyCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => navigateToCategory(category.title)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-4 transition-all duration-200 border border-white/20 hover:scale-105 shadow-lg"
              >
                <div
                  className={`w-12 h-12 ${getColorClasses(
                    category.color
                  )} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-bold text-sm text-center mb-1">
                  {category.title}
                </h3>
                <p
                  className={`text-xs text-center font-medium mb-1 ${getColorClasses(
                    category.color
                  ).split(' ')[1]}`}
                >
                  {category.count} serviços
                </p>
                <p className="text-white/70 text-xs text-center font-medium leading-tight">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="px-4 mb-6">
          <div className="mb-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2">
              <i className="ri-star-line text-yellow-400"></i>
              Serviços em Destaque
              <i className="ri-star-line text-yellow-400"></i>
            </h3>
            <p className="text-white/70 text-xs text-center mt-1">
              Profissionais recomendados pela comunidade
            </p>
          </div>

          <div className="space-y-3">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                  <img
                    alt="Dr. João Silva - Cardiologista"
                    className="w-full h-full object-cover"
                    src="https://readdy.ai/api/search-image?query=Professional%20male%20cardiologist%20doctor%20in%20white%20coat%20with%20stethoscope%2C%20medical%20specialist%20portrait%2C%20healthcare%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=cardio1&orientation=squarish"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      Dr. João Silva
                    </h4>
                    <div className="bg-blue-500/20 text-blue-200 border-blue-400/30 px-2 py-1 rounded-full text-xs font-medium">
                      Cardiologia
                    </div>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    Especialista em cardiologia com 15 anos de experiência.
                    Atendimento humanizado e tecnologia de ponta.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/5549327812345?text=Olá! Gostaria de agendar uma consulta com Dr. João Silva - Cardiologista"
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

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                  <img
                    alt="Dra. Maria Santos - Psicóloga"
                    className="w-full h-full object-cover"
                    src="https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20therapist%20in%20office%2C%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psico1&orientation=squarish"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      Dra. Maria Santos
                    </h4>
                    <div className="bg-purple-500/20 text-purple-200 border-purple-400/30 px-2 py-1 rounded-full text-xs font-medium">
                      Psicologia
                    </div>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    Psicóloga clínica especializada em terapia cognitivo‑comportamental.
                    Atendimento presencial e online.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/5549327856789?text=Olá! Gostaria de agendar uma sessão com Dra. Maria Santos - Psicóloga"
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

            {/* Card 3 (Fixed) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                  <img
                    alt="Laboratório Central - Exames"
                    className="w-full h-full object-cover"
                    src="https://readdy.ai/api/search-image?query=Modern%20medical%20laboratory%20facility%20Laborat%C3%B3rio%20Central%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20diagnostic%20center%20building%2C%20medical%20testing%20facility&width=200&height=200&seq=lab1&orientation=squarish"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      Laboratório Central
                    </h4>
                    <div className="bg-cyan-500/20 text-cyan-200 border-cyan-400/30 px-2 py-1 rounded-full text-xs font-medium">
                      Diagnóstico
                    </div>
                  </div>
                  <p className="text-white/80 text-xs leading-relaxed mb-3">
                    Exames laboratoriais e diagnóstico por imagem com tecnologia
                    avançada e resultados rápidos.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/5549327890123?text=Olá! Gostaria de informações sobre exames no Laboratório Central"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                    >
                      <i className="ri-whatsapp-line text-sm"></i>
                      <span>WhatsApp</span>
                    </a>
                    <button
                      className="inline-flex items-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                    >
                      <i className="ri-eye-line text-sm"></i>
                      <span>Ver Página</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professionals by Specialty */}
        <div className="px-4 mb-6">
          {specialties.map((specialty) => {
            const specialtyProfessionals = professionals.filter(prof => prof.specialty === specialty);
            if (specialtyProfessionals.length === 0) return null;

            return (
              <div key={specialty} id={specialty.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
                <div className="mb-4">
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-stethoscope-line text-teal-400"></i>
                    {specialty}
                  </h3>
                  <div className="h-1 bg-gradient-to-r from-teal-500 to-transparent rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {specialtyProfessionals.map((professional, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={professional.name}
                            className="w-full h-full object-cover"
                            src={professional.image}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-white font-bold text-sm leading-tight">{professional.name}</h4>
                              <p className="text-teal-200 text-xs font-medium">{professional.crm}</p>
                            </div>
                            <div className="bg-teal-500/20 text-teal-200 border border-teal-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {professional.specialty}
                            </div>
                          </div>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {professional.tags.map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTagColorClasses(tag, professional.specialty)}`}
                              >
                                <div className="w-3 h-3 flex items-center justify-center">
                                  <i className={`${getTagIcon(tag)} text-xs`}></i>
                                </div>
                                <span>{tag}</span>
                              </div>
                            ))}
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-3">{professional.description}</p>
                          <div className="flex gap-2">
                            <a
                              href={`https://wa.me/${professional.phone}?text=Olá! Gostaria de agendar uma consulta com ${professional.name} - ${professional.specialty}`}
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
              <i className="ri-add-circle-line text-teal-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você é médico especialista ou oferece serviços de diagnóstico? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço médico especializado no Portal Urubici"
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

              {/* Duplicate first three partners for a smooth infinite scroll effect */}
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
