import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PsicologiaTerapias() {
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
      image: "https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20exterior%20building%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20healthcare%20facility%2C%20medical%20center%20architecture%20with%20mountains%20background%2C%20professional%20medical%20services&width=300&height=200&seq=clinic1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Farmácia Central",
      subtitle: "Medicamentos & Produtos de Saúde",
      image: "https://readdy.ai/api/search-image?query=Modern%20pharmacy%20drugstore%20exterior%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20medical%20pharmacy%20building%2C%20healthcare%20facility%20with%20mountain%20landscape%20background&width=300&height=200&seq=pharmacy1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Dr. Carlos Silva",
      subtitle: "Cardiologista - CRM 12345",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20doctor%20cardiologist%20in%20white%20coat%20with%20stethoscope%2C%20medical%20professional%20portrait%2C%20healthcare%20specialist%2C%20clean%20medical%20background%20with%20soft%20lighting&width=300&height=200&seq=doc1&orientation=landscape",
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

  // Dados dos profissionais organizados por especialidade em ordem alfabética
  const psychologyData = {
    "NEUROPSICOLOGIA": [
      {
        name: "Dra. Ana Paula Rodrigues",
        crp: "CRP 12/34567",
        specialty: "Neuropsicologia",
        description: "Neuropsicóloga especializada em avaliação neuropsicológica e reabilitação cognitiva. Atendimento a crianças, adolescentes e adultos com transtornos neurológicos.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20neuropsychologist%20therapist%20in%20office%2C%20neuropsychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=neuropsico1&orientation=squarish",
        whatsapp: "5549327856789",
        tags: [
          { text: "Avaliação Neuropsicológica", color: "purple", icon: "ri-brain-line" },
          { text: "Reabilitação Cognitiva", color: "blue", icon: "ri-refresh-line" },
          { text: "Transtornos Neurológicos", color: "red", icon: "ri-pulse-line" },
          { text: "Todas as Idades", color: "green", icon: "ri-group-line" }
        ]
      },
      {
        name: "Dr. Roberto Lima Santos",
        crp: "CRP 12/45678",
        specialty: "Neuropsicologia",
        description: "Neuropsicólogo com especialização em demências e envelhecimento. Experiência em avaliação cognitiva e orientação familiar.",
        image: "https://readdy.ai/api/search-image?query=Professional%20male%20neuropsychologist%20therapist%20in%20office%2C%20neuropsychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=neuropsico2&orientation=squarish",
        whatsapp: "5549327867890",
        tags: [
          { text: "Demências", color: "orange", icon: "ri-brain-line" },
          { text: "Envelhecimento", color: "cyan", icon: "ri-time-line" },
          { text: "Avaliação Cognitiva", color: "purple", icon: "ri-search-eye-line" },
          { text: "Orientação Familiar", color: "green", icon: "ri-group-line" }
        ]
      }
    ],
    "PSICOLOGIA CLÍNICA": [
      {
        name: "Dra. Maria Santos Silva",
        crp: "CRP 12/12345",
        specialty: "Psicologia Clínica",
        description: "Psicóloga clínica especializada em terapia cognitivo-comportamental. Atendimento presencial e online para ansiedade, depressão e transtornos do humor.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20therapist%20in%20office%2C%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psico1&orientation=squarish",
        whatsapp: "5549327812345",
        tags: [
          { text: "Terapia Cognitivo-Comportamental", color: "blue", icon: "ri-brain-line" },
          { text: "Ansiedade", color: "yellow", icon: "ri-heart-pulse-line" },
          { text: "Depressão", color: "purple", icon: "ri-emotion-sad-line" },
          { text: "Atendimento Online", color: "green", icon: "ri-video-line" }
        ]
      },
      {
        name: "Dr. Carlos Mendes Oliveira",
        crp: "CRP 12/23456",
        specialty: "Psicologia Clínica",
        description: "Psicólogo especializado em transtornos de ansiedade e síndrome do pânico. Abordagem humanística e terapia de aceitação e compromisso.",
        image: "https://readdy.ai/api/search-image?query=Professional%20male%20psychologist%20therapist%20in%20office%2C%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psico2&orientation=squarish",
        whatsapp: "5549327823456",
        tags: [
          { text: "Transtornos de Ansiedade", color: "yellow", icon: "ri-heart-pulse-line" },
          { text: "Síndrome do Pânico", color: "red", icon: "ri-alarm-warning-line" },
          { text: "Abordagem Humanística", color: "green", icon: "ri-heart-line" },
          { text: "Terapia ACT", color: "blue", icon: "ri-checkbox-circle-line" }
        ]
      },
      {
        name: "Dra. Fernanda Costa Lima",
        crp: "CRP 12/34567",
        specialty: "Psicologia Clínica",
        description: "Psicóloga clínica com especialização em trauma e EMDR. Atendimento a vítimas de violência e transtorno de estresse pós-traumático.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20psychologist%20therapist%20in%20office%2C%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psico3&orientation=squarish",
        whatsapp: "5549327834567",
        tags: [
          { text: "Trauma", color: "red", icon: "ri-shield-cross-line" },
          { text: "EMDR", color: "purple", icon: "ri-eye-line" },
          { text: "Violência", color: "orange", icon: "ri-shield-user-line" },
          { text: "TEPT", color: "blue", icon: "ri-mind-map" }
        ]
      }
    ],
    "PSICOLOGIA INFANTIL": [
      {
        name: "Dra. Juliana Ferreira Santos",
        crp: "CRP 12/45678",
        specialty: "Psicologia Infantil",
        description: "Psicóloga infantil especializada em desenvolvimento infantil e ludoterapia. Atendimento a crianças de 3 a 12 anos com dificuldades emocionais e comportamentais.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20child%20psychologist%20therapist%20in%20colorful%20office%2C%20child%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psicoinfantil1&orientation=squarish",
        whatsapp: "5549327845678",
        tags: [
          { text: "Desenvolvimento Infantil", color: "green", icon: "ri-seedling-line" },
          { text: "Ludoterapia", color: "yellow", icon: "ri-gamepad-line" },
          { text: "3 a 12 anos", color: "blue", icon: "ri-calendar-line" },
          { text: "Comportamento", color: "purple", icon: "ri-emotion-line" }
        ]
      },
      {
        name: "Dra. Patrícia Lima Rodrigues",
        crp: "CRP 12/56789",
        specialty: "Psicologia Infantil",
        description: "Psicóloga infantil com especialização em autismo e transtornos do neurodesenvolvimento. Orientação familiar e intervenção precoce.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20child%20psychologist%20therapist%20in%20colorful%20office%2C%20child%20psychology%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psicoinfantil2&orientation=squarish",
        whatsapp: "5549327856789",
        tags: [
          { text: "Autismo", color: "blue", icon: "ri-puzzle-line" },
          { text: "Neurodesenvolvimento", color: "purple", icon: "ri-brain-line" },
          { text: "Orientação Familiar", color: "green", icon: "ri-group-line" },
          { text: "Intervenção Precoce", color: "orange", icon: "ri-time-line" }
        ]
      }
    ],
    "PSICOPEDAGOGIA": [
      {
        name: "Dra. Ana Paula Silva Costa",
        crp: "CRP 12/67890",
        specialty: "Psicopedagogia",
        description: "Psicopedagoga especializada em dificuldades de aprendizagem e desenvolvimento infantil. Avaliação psicopedagógica e intervenção educacional.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20psychopedagogue%20specialist%20in%20office%2C%20educational%20psychology%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psicoped1&orientation=squarish",
        whatsapp: "5549327867890",
        tags: [
          { text: "Dificuldades de Aprendizagem", color: "orange", icon: "ri-book-line" },
          { text: "Desenvolvimento Infantil", color: "green", icon: "ri-seedling-line" },
          { text: "Avaliação Psicopedagógica", color: "blue", icon: "ri-search-eye-line" },
          { text: "Intervenção Educacional", color: "purple", icon: "ri-graduation-cap-line" }
        ]
      },
      {
        name: "Dra. Luciana Martins Souza",
        crp: "CRP 12/78901",
        specialty: "Psicopedagogia",
        description: "Psicopedagoga com especialização em dislexia e transtornos de aprendizagem. Atendimento clínico e institucional.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20psychopedagogue%20specialist%20in%20office%2C%20educational%20psychology%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=psicoped2&orientation=squarish",
        whatsapp: "5549327878901",
        tags: [
          { text: "Dislexia", color: "red", icon: "ri-book-open-line" },
          { text: "Transtornos de Aprendizagem", color: "orange", icon: "ri-mind-map" },
          { text: "Atendimento Clínico", color: "blue", icon: "ri-hospital-line" },
          { text: "Atendimento Institucional", color: "green", icon: "ri-building-line" }
        ]
      }
    ],
    "TERAPIA DE CASAL": [
      {
        name: "Dra. Camila Santos Oliveira",
        crp: "CRP 12/89012",
        specialty: "Terapia de Casal",
        description: "Psicóloga especializada em terapia de casal e relacionamentos. Abordagem sistêmica e terapia focada em emoções para casais em crise.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20couple%20therapist%20in%20office%2C%20relationship%20therapy%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=casal1&orientation=squarish",
        whatsapp: "5549327889012",
        tags: [
          { text: "Terapia de Casal", color: "pink", icon: "ri-heart-line" },
          { text: "Relacionamentos", color: "red", icon: "ri-hearts-line" },
          { text: "Abordagem Sistêmica", color: "blue", icon: "ri-links-line" },
          { text: "Casais em Crise", color: "orange", icon: "ri-emotion-unhappy-line" }
        ]
      }
    ],
    "TERAPIA FAMILIAR": [
      {
        name: "Dra. Fernanda Costa Mendes",
        crp: "CRP 12/90123",
        specialty: "Terapia Familiar",
        description: "Terapeuta familiar e de casal com abordagem sistêmica. Especialista em dinâmicas familiares e resolução de conflitos familiares.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20family%20therapist%20in%20office%2C%20family%20therapy%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=familiar1&orientation=squarish",
        whatsapp: "5549327890123",
        tags: [
          { text: "Terapia Familiar", color: "green", icon: "ri-group-line" },
          { text: "Dinâmicas Familiares", color: "blue", icon: "ri-team-line" },
          { text: "Resolução de Conflitos", color: "orange", icon: "ri-scales-line" },
          { text: "Abordagem Sistêmica", color: "purple", icon: "ri-links-line" }
        ]
      },
      {
        name: "Dr. Gabriel Costa Silva",
        crp: "CRP 12/01234",
        specialty: "Terapia Familiar",
        description: "Terapeuta familiar especializado em adolescência e conflitos familiares. Mediação familiar e orientação parental.",
        image: "https://readdy.ai/api/search-image?query=Professional%20male%20family%20therapist%20in%20office%2C%20family%20therapy%20specialist%20portrait%2C%20mental%20health%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=familiar2&orientation=squarish",
        whatsapp: "5549327901234",
        tags: [
          { text: "Adolescência", color: "cyan", icon: "ri-user-line" },
          { text: "Conflitos Familiares", color: "red", icon: "ri-emotion-unhappy-line" },
          { text: "Mediação Familiar", color: "blue", icon: "ri-scales-line" },
          { text: "Orientação Parental", color: "green", icon: "ri-parent-line" }
        ]
      }
    ],
    "TERAPIA OCUPACIONAL": [
      {
        name: "Dr. Roberto Lima Costa",
        crefito: "CREFITO 10/12345",
        specialty: "Terapia Ocupacional",
        description: "Terapeuta ocupacional especializado em reabilitação e desenvolvimento de habilidades funcionais. Atendimento a pessoas com deficiência e idosos.",
        image: "https://readdy.ai/api/search-image?query=Professional%20male%20occupational%20therapist%20in%20clinic%2C%20therapy%20specialist%20portrait%2C%20rehabilitation%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=ocupacional1&orientation=squarish",
        whatsapp: "5549327912345",
        tags: [
          { text: "Reabilitação", color: "blue", icon: "ri-refresh-line" },
          { text: "Habilidades Funcionais", color: "green", icon: "ri-hand-heart-line" },
          { text: "Pessoas com Deficiência", color: "purple", icon: "ri-wheelchair-line" },
          { text: "Idosos", color: "orange", icon: "ri-user-heart-line" }
        ]
      },
      {
        name: "Dra. Beatriz Almeida Santos",
        crefito: "CREFITO 10/23456",
        specialty: "Terapia Ocupacional",
        description: "Terapeuta ocupacional pediátrica especializada em integração sensorial e desenvolvimento infantil. Atendimento a crianças com TEA e atrasos no desenvolvimento.",
        image: "https://readdy.ai/api/search-image?query=Professional%20female%20occupational%20therapist%20in%20clinic%2C%20pediatric%20therapy%20specialist%20portrait%2C%20rehabilitation%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=ocupacional2&orientation=squarish",
        whatsapp: "5549327923456",
        tags: [
          { text: "Integração Sensorial", color: "yellow", icon: "ri-hand-heart-line" },
          { text: "Desenvolvimento Infantil", color: "green", icon: "ri-seedling-line" },
          { text: "TEA", color: "blue", icon: "ri-puzzle-line" },
          { text: "Atrasos no Desenvolvimento", color: "orange", icon: "ri-time-line" }
        ]
      }
    ]
  };

  const specialtyHeaders = Object.keys(psychologyData).sort();

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

  const scrollToSpecialty = (specialty: string) => {
    const element = document.getElementById(specialty);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTagColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
      purple: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      green: 'bg-green-500/20 text-green-200 border-green-400/30',
      yellow: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30',
      red: 'bg-red-500/20 text-red-200 border-red-400/30',
      orange: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
      pink: 'bg-pink-500/20 text-pink-200 border-pink-400/30',
      cyan: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-500/20 text-gray-200 border-gray-400/30';
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
              <i className="ri-brain-line text-purple-400"></i>
              Psicologia &amp; Terapias
              <i className="ri-brain-line text-purple-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Profissionais de saúde mental e bem-estar</p>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <i className="ri-flashlight-fill text-yellow-400 text-lg"></i>
              <h3 className="text-white font-medium text-sm uppercase tracking-wide">ESPECIALIDADES DISPONÍVEIS</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {specialtyHeaders.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => scrollToSpecialty(specialty)}
                  className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professionals by Specialty */}
        <div className="px-4 mb-6">
          {specialtyHeaders.map((specialty) => {
            const specialtyProfessionals = psychologyData[specialty];
            if (!specialtyProfessionals || specialtyProfessionals.length === 0) return null;

            return (
              <div key={specialty} id={specialty} className="mb-8">
                <div className="mb-4">
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-brain-line text-purple-400"></i>
                    {specialty}
                  </h3>
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
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
                              <p className="text-purple-200 text-xs font-medium">{professional.crp || professional.crefito}</p>
                            </div>
                            <div className="bg-purple-500/20 text-purple-200 border border-purple-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {professional.specialty}
                            </div>
                          </div>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {professional.tags.map((tag, tagIndex) => (
                              <div
                                key={tagIndex}
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTagColorClasses(tag.color)}`}
                              >
                                <div className="w-3 h-3 flex items-center justify-center">
                                  <i className={`${tag.icon} text-xs`}></i>
                                </div>
                                <span>{tag.text}</span>
                              </div>
                            ))}
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-3">{professional.description}</p>
                          <div className="flex gap-2">
                            <a
                              href={`https://wa.me/${professional.whatsapp}?text=Olá! Gostaria de agendar uma sessão com ${professional.name} - ${professional.specialty}`}
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
              <i className="ri-add-circle-line text-purple-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você é psicólogo, terapeuta ou oferece serviços de saúde mental? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço de psicologia/terapia no Portal Urubici"
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
                      <h4 className="text-white font-bold text-sm leading-tight mb-1">{partner.name}</h4>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium">Parceiro Oficial</span>
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
