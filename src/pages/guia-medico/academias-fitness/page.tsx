import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AcademiasFitness() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

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
      title: "Academia Carol Fitness",
      subtitle: "Musculação & Funcional no Centro",
      image: "https://readdy.ai/api/search-image?query=Modern%20fitness%20gym%20interior%20with%20weight%20training%20equipment%20and%20functional%20training%20area%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20professional%20gym%20facility%20with%20mountain%20view&width=300&height=200&seq=gym1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Planeta Fitness Urubici",
      subtitle: "Musculação & Ballet Infanto-Juvenil",
      image: "https://readdy.ai/api/search-image?query=Contemporary%20fitness%20center%20with%20modern%20equipment%20and%20dance%20studio%20for%20children%20ballet%20classes%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20family-friendly%20gym%20facility&width=300&height=200&seq=gym2&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "BOX 44",
      subtitle: "Treinos Funcionais em Grupo",
      image: "https://readdy.ai/api/search-image?query=Functional%20training%20box%20gym%20with%20group%20workout%20equipment%2C%20crossfit%20style%20training%20facility%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20outdoor%20functional%20fitness%20area&width=300&height=200&seq=box1&orientation=landscape",
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

  // Função para verificar se está aberto
  const isOpen = (schedule: { [key: string]: string }) => {
    const now = currentTime;
    const dayOfWeek = now.getDay(); // 0 = domingo, 1 = segunda, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const dayNames = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const today = dayNames[dayOfWeek];
    
    const todaySchedule = schedule[today];
    
    if (!todaySchedule || todaySchedule === 'fechado') {
      return false;
    }

    const [openTime, closeTime] = todaySchedule.split('-');
    const [openHour, openMinute] = openTime.split(':').map(Number);
    const [closeHour, closeMinute] = closeTime.split(':').map(Number);
    
    const openTimeInMinutes = openHour * 60 + openMinute;
    const closeTimeInMinutes = closeHour * 60 + closeMinute;

    return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes;
  };

  const academias = [
    {
      id: 1,
      nome: "Academia Carol Fitness",
      descricao: "Musculação; Funcional; Ritmos; Personal",
      chips: ["Centro", "Academia", "Musculação", "Funcional"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Academia%20Carol%20Fitness%20Rua%20Furgentino%20Borges%2C%2054%20%E2%80%93%20Centro%20Urubici%20SC",
      categoria: "Academias Completas",
      horarios: {
        segunda: "06:00-22:00",
        terca: "06:00-22:00", 
        quarta: "06:00-22:00",
        quinta: "06:00-22:00",
        sexta: "06:00-22:00",
        sabado: "08:00-18:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Modern%20fitness%20gym%20interior%20with%20weight%20training%20equipment%20and%20functional%20training%20area%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20professional%20gym%20facility%20with%20mountain%20view&width=300&height=200&seq=gym1&orientation=landscape"
    },
    {
      id: 2,
      nome: "Planeta Fitness Urubici",
      descricao: "Musculação; Ballet infanto-juvenil",
      chips: ["Centro", "Academia", "Musculação"],
      telefone: "",
      whatsapp: "(49) 99177-3223",
      maps: "https://www.google.com/maps/search/?api=1&query=Planeta%20Fitness%20Urubici%20Rua%20Furgentino%20Borges%2C%2054%20%E2%80%93%20Centro%20Urubici%20SC",
      categoria: "Academias Completas",
      horarios: {
        segunda: "fechado",
        terca: "07:00-21:00",
        quarta: "07:00-21:00", 
        quinta: "07:00-21:00",
        sexta: "07:00-21:00",
        sabado: "08:00-17:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Contemporary%20fitness%20center%20with%20modern%20equipment%20and%20dance%20studio%20for%20children%20ballet%20classes%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20family-friendly%20gym%20facility&width=300&height=200&seq=gym2&orientation=landscape"
    },
    {
      id: 3,
      nome: "BOX 44",
      descricao: "Treinos funcionais em grupo; aula experimental",
      chips: ["Funcional", "Aula Experimental"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=BOX%2044%20Av.%20Rodolfo%20Andermann%2C%20850%20%E2%80%93%20%28bairro%20a%20confirmar%29%20Urubici%20SC",
      categoria: "Treinamento Funcional",
      horarios: {
        segunda: "06:30-20:00",
        terca: "06:30-20:00",
        quarta: "06:30-20:00",
        quinta: "06:30-20:00", 
        sexta: "06:30-20:00",
        sabado: "08:00-16:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Functional%20training%20box%20gym%20with%20group%20workout%20equipment%2C%20crossfit%20style%20training%20facility%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20outdoor%20functional%20fitness%20area&width=300&height=200&seq=box1&orientation=landscape"
    },
    {
      id: 4,
      nome: "Clínica MoveMe",
      descricao: "Pilates; Fisioterapia Ortopédica & Esportiva",
      chips: ["Centro", "Pilates"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20MoveMe%20%E2%80%93%20Fisioterapia%20e%20Pilates%20Rua%20Nereu%20Ramos%2C%20311%20%E2%80%93%20Centro%20Urubici%20SC",
      categoria: "Pilates & Fisioterapia",
      horarios: {
        segunda: "07:00-19:00",
        terca: "07:00-19:00",
        quarta: "07:00-19:00",
        quinta: "07:00-19:00",
        sexta: "07:00-19:00",
        sabado: "08:00-14:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Modern%20pilates%20studio%20with%20reformer%20equipment%20and%20physiotherapy%20clinic%20interior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20professional%20rehabilitation%20facility&width=300&height=200&seq=pilates1&orientation=landscape"
    },
    {
      id: 5,
      nome: "Mariana Longo Pilates",
      descricao: "Pilates clássico; turmas (adulto e kids)",
      chips: ["Pilates"],
      telefone: "",
      whatsapp: "(48) 99996-7176",
      maps: "https://www.google.com/maps/search/?api=1&query=Mariana%20Longo%20Pilates%20e%20Fisioterapia%20Av.%20Adolfo%20Konder%2C%202543%20%E2%80%93%20%28bairro%20a%20confirmar%29%20Urubici%20SC",
      categoria: "Pilates & Fisioterapia",
      horarios: {
        segunda: "08:00-18:00",
        terca: "08:00-18:00",
        quarta: "08:00-18:00",
        quinta: "08:00-18:00",
        sexta: "08:00-18:00",
        sabado: "09:00-15:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Classical%20pilates%20studio%20with%20mat%20and%20equipment%20for%20adults%20and%20children%20classes%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20family%20pilates%20center&width=300&height=200&seq=pilates2&orientation=landscape"
    },
    {
      id: 6,
      nome: "Rancho Centro de Treinamento",
      descricao: "Musculação; Cross Training; Lutas",
      chips: ["Academia", "Funcional", "Lutas"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Rancho%20Centro%20de%20Treinamento%20%28endere%C3%A7o%20conforme%20contato%29%20%E2%80%93%20zona%20rural/urbana%20a%20confirmar%20Urubici%20SC",
      categoria: "Treinamento Funcional",
      horarios: {
        segunda: "06:00-21:00",
        terca: "06:00-21:00",
        quarta: "06:00-21:00",
        quinta: "06:00-21:00",
        sexta: "06:00-21:00",
        sabado: "08:00-17:00",
        domingo: "fechado"
      },
      image: "https://readdy.ai/api/search-image?query=Rural%20training%20center%20with%20weightlifting%2C%20cross%20training%20and%20martial%20arts%20facilities%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20outdoor%20mountain%20gym&width=300&height=200&seq=ranch1&orientation=landscape"
    },
    {
      id: 7,
      nome: "Yogalivee",
      descricao: "Aulas de Yoga; retiros e vivências na serra",
      chips: ["Yoga"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Yogalivee%20%E2%80%93%20Yoga%20na%20Serra%20%28sede%20na%20serra%20catarinense%2C%20confirmar%20endere%C3%A7o%20local%29%20Urubici%20SC",
      categoria: "Yoga & Bem-Estar",
      horarios: {
        segunda: "07:00-19:00",
        terca: "07:00-19:00",
        quarta: "07:00-19:00",
        quinta: "07:00-19:00",
        sexta: "07:00-19:00",
        sabado: "09:00-16:00",
        domingo: "10:00-15:00"
      },
      image: "https://readdy.ai/api/search-image?query=Peaceful%20yoga%20studio%20in%20mountain%20setting%20with%20natural%20lighting%20and%20serene%20atmosphere%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20yoga%20retreat%20center&width=300&height=200&seq=yoga1&orientation=landscape"
    },
    {
      id: 8,
      nome: "Espaço Ahimsa",
      descricao: "Práticas de Yoga; agroecologia; hospedagem de altitude",
      chips: ["Yoga", "Spa"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Espa%C3%A7o%20Ahimsa%20%E2%80%93%20Agroecologia%20%26%20Yoga%20%28endere%C3%A7o%20sob%20consulta%29%20%E2%80%93%20Urubici%20Urubici%20SC",
      categoria: "Yoga & Bem-Estar",
      horarios: {
        segunda: "08:00-18:00",
        terca: "08:00-18:00",
        quarta: "08:00-18:00",
        quinta: "08:00-18:00",
        sexta: "08:00-18:00",
        sabado: "09:00-16:00",
        domingo: "10:00-15:00"
      },
      image: "https://readdy.ai/api/search-image?query=Eco-friendly%20yoga%20and%20agroecology%20space%20with%20sustainable%20practices%20and%20mountain%20accommodation%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20holistic%20wellness%20center&width=300&height=200&seq=ahimsa1&orientation=landscape"
    },
    {
      id: 9,
      nome: "Centro Florescer",
      descricao: "Spa; alimentação saudável; terapias e meditação",
      chips: ["Yoga", "Spa"],
      telefone: "",
      whatsapp: "",
      maps: "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Viv%C3%AAncias%20Florescer%20%E2%80%93%20Spa%20%26%20Medita%C3%A7%C3%A3o%20%28sede%20do%20centro%29%20%E2%80%93%20Urubici%20Urubici%20SC",
      categoria: "Yoga & Bem-Estar",
      horarios: {
        segunda: "09:00-18:00",
        terca: "09:00-18:00",
        quarta: "09:00-18:00",
        quinta: "09:00-18:00",
        sexta: "09:00-18:00",
        sabado: "09:00-16:00",
        domingo: "10:00-15:00"
      },
      image: "https://readdy.ai/api/search-image?query=Wellness%20spa%20center%20with%20meditation%20spaces%2C%20healthy%20food%20and%20therapeutic%20treatments%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20holistic%20health%20facility&width=300&height=200&seq=florescer1&orientation=landscape"
    }
  ];

  // Atualizar horário a cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

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

  const navigateToGuiaMedico = () => {
    navigate('/guia-medico');
  };

  const getChipColor = (chip: string) => {
    const colorMap: { [key: string]: string } = {
      'Centro': 'bg-blue-500/20 text-blue-200 border-blue-400/40',
      'Academia': 'bg-green-500/20 text-green-200 border-green-400/40',
      'Musculação': 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      'Funcional': 'bg-orange-500/20 text-orange-200 border-orange-400/40',
      'Pilates': 'bg-pink-500/20 text-pink-200 border-pink-400/40',
      'Yoga': 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
      'Spa': 'bg-teal-500/20 text-teal-200 border-teal-400/40',
      'Lutas': 'bg-red-500/20 text-red-200 border-red-400/40',
      'Aula Experimental': 'bg-yellow-500/20 text-yellow-200 border-yellow-400/40'
    };
    return colorMap[chip] || 'bg-gray-500/20 text-gray-200 border-gray-400/40';
  };

  const categorias = [
    {
      nome: "Academias Completas",
      estabelecimentos: academias.filter(a => a.categoria === "Academias Completas")
    },
    {
      nome: "Treinamento Funcional", 
      estabelecimentos: academias.filter(a => a.categoria === "Treinamento Funcional")
    },
    {
      nome: "Pilates & Fisioterapia",
      estabelecimentos: academias.filter(a => a.categoria === "Pilates & Fisioterapia")
    },
    {
      nome: "Yoga & Bem-Estar",
      estabelecimentos: academias.filter(a => a.categoria === "Yoga & Bem-Estar")
    }
  ];

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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-orange-600/90 text-white">
                          Fitness
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
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
              <i className="ri-run-line text-orange-400"></i>
              Academias & Fitness
              <i className="ri-run-line text-orange-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Exercícios, fitness e atividades físicas em Urubici</p>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <i className="ri-flashlight-fill text-yellow-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">ATALHOS RÁPIDOS</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('categoria-academias-completas');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500/20 hover:bg-orange-400/30 hover:scale-105 active:scale-95 text-orange-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Academias Completas
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('categoria-treinamento-funcional');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500/20 hover:bg-orange-400/30 hover:scale-105 active:scale-95 text-orange-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Treinamento Funcional
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('categoria-pilates-fisioterapia');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500/20 hover:bg-orange-400/30 hover:scale-105 active:scale-95 text-orange-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Pilates & Fisioterapia
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('categoria-yoga-bem-estar');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-500/20 hover:bg-orange-400/30 hover:scale-105 active:scale-95 text-orange-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Yoga & Bem-Estar
              </button>
              <button
                onClick={() => navigate('/guia-medico/farmacias-drogarias')}
                className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Farmácias 24h
              </button>
              <button
                onClick={() => navigate('/guia-medico/emergencias-servicos-publicos')}
                className="bg-red-500/90 hover:bg-red-400 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm whitespace-nowrap"
              >
                Emergência
              </button>
            </div>
          </div>
        </div>

        {/* Academias por Categoria */}
        <div className="px-4 mb-6">
          {categorias.map((categoria, categoriaIndex) => (
            <div key={categoriaIndex} className="mb-8">
              <div 
                id={`categoria-${categoria.nome.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="mb-4"
              >
                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <i className="ri-run-line text-orange-400"></i>
                  {categoria.nome}
                </h3>
                <p className="text-white/70 text-sm">
                  {categoria.estabelecimentos.length} {categoria.estabelecimentos.length === 1 ? 'estabelecimento disponível' : 'estabelecimentos disponíveis'}
                </p>
              </div>

              <div className="space-y-4">
                {categoria.estabelecimentos.map((academia) => {
                  const estabelecimentoAberto = isOpen(academia.horarios);
                  
                  return (
                    <div key={academia.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={academia.nome}
                            className="w-full h-full object-cover"
                            src={academia.image}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-bold text-sm leading-tight">
                              {academia.nome}
                            </h4>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${
                              estabelecimentoAberto 
                                ? 'bg-green-500/20 text-green-200 border-green-400/30' 
                                : 'bg-red-500/20 text-red-200 border-red-400/30'
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                estabelecimentoAberto ? 'bg-green-300' : 'bg-red-300'
                              }`}></div>
                              {estabelecimentoAberto ? 'Aberto' : 'Fechado'}
                            </div>
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {academia.descricao}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {academia.chips.map((chip, chipIndex) => (
                              <div
                                key={chipIndex}
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getChipColor(chip)}`}
                              >
                                <i className="ri-star-line text-xs"></i>
                                <span>{chip}</span>
                              </div>
                            ))}
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-2">
                            {academia.whatsapp && (
                              <a
                                href={`https://wa.me/${academia.whatsapp.replace(/\D/g, '')}?text=Olá! Gostaria de informações sobre ${academia.nome}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
                              >
                                <i className="ri-whatsapp-line text-sm"></i>
                                <span>WhatsApp</span>
                              </a>
                            )}
                            <button 
                              disabled
                              className="inline-flex items-center gap-1 px-3 py-2 bg-gray-500 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap"
                              title="Em breve"
                            >
                              <i className="ri-calendar-line text-sm"></i>
                              <span>Agendar</span>
                            </button>
                            <button 
                              disabled
                              className="inline-flex items-center gap-1 px-3 py-2 bg-gray-500 cursor-not-allowed rounded-lg text-white text-xs font-medium opacity-50 whitespace-nowrap"
                              title="Em breve"
                            >
                              <i className="ri-eye-line text-sm"></i>
                              <span>Ver Página</span>
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Cadastre seu Serviço */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-orange-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre sua Academia</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você possui academia, estúdio ou espaço fitness? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar minha academia/estúdio fitness no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Academia</span>
              </a>
              <button
                onClick={() => navigate('/guia-medico')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-7

                00 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
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
            <p className="text-white/70 text-xs text-center mt-1">Conheça nossos parceiros de confiança</p>
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
