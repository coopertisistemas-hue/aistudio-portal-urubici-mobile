import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Odontologia() {
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
      title: "Clínica Odontológica Urubici",
      subtitle: "Cuidados Dentários Completos",
      image: "https://readdy.ai/api/search-image?query=Modern%20dental%20clinic%20exterior%20building%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20odontologia%20facility%2C%20dental%20care%20center%20with%20mountain%20background&width=300&height=200&seq=dental1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Ortodontia Especializada",
      subtitle: "Aparelhos & Alinhamento Dental",
      image: "https://readdy.ai/api/search-image?query=Professional%20orthodontic%20clinic%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20dental%20orthodontia%20facility%2C%20teeth%20alignment%20treatment%20center&width=300&height=200&seq=ortho1&orientation=landscape",
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

  const specialties = [
    "Clínica Geral",
    "Endodontia",
    "Implantodontia",
    "Odontopediatria",
    "Ortodontia",
    "Periodontia"
  ];

  const professionals = [
    {
      name: "Dr. Carlos Mendes",
      specialty: "Clínica Geral",
      crm: "Dentista - CRO 12345",
      description: "Dentista clínico geral com 20 anos de experiência. Especialista em odontologia preventiva, restauradora e estética. Atendimento humanizado com tecnologia moderna.",
      phone: "5549327812345",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20dentist%20in%20white%20coat%20with%20dental%20tools%2C%20general%20dentistry%20specialist%2C%20dental%20care%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_carlos&orientation=squarish",
      tags: ["Clínica Geral", "Odontologia Preventiva", "Restaurações", "Atendimento Humanizado"]
    },
    {
      name: "Dr. Paulo Rodrigues",
      specialty: "Clínica Geral",
      crm: "Dentista - CRO 78901",
      description: "Dentista clínico geral com foco em odontologia estética. Especialista em lentes de contato dental, clareamento e harmonização do sorriso.",
      phone: "5549327878901",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20aesthetic%20dentist%2C%20cosmetic%20dentistry%20specialist%2C%20dental%20beauty%20expert%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_paulo&orientation=squarish",
      tags: ["Odontologia Estética", "Lentes de Contato", "Clareamento Dental", "Harmonização"]
    },
    {
      name: "Dra. Juliana Ferreira",
      specialty: "Endodontia",
      crm: "Dentista - CRO 67890",
      description: "Endodontista especializada em tratamento de canal. Utiliza técnicas modernas e indolores para preservação dental com microscopia operatória.",
      phone: "5549327867890",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20endodontist%20dentist%20specialist%2C%20root%20canal%20treatment%20expert%2C%20dental%20preservation%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_juliana&orientation=squarish",
      tags: ["Tratamento de Canal", "Microscopia Operatória", "Preservação Dental", "Técnicas Modernas"]
    },
    {
      name: "Dra. Patrícia Lima",
      specialty: "Endodontia",
      crm: "Dentista - CRO 23401",
      description: "Endodontista com microscopia operatória. Especialista em tratamentos de canal de alta precisão com tecnologia de ponta e procedimentos indolores.",
      phone: "5549327823401",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20endodontist%20microscopy%20specialist%2C%20precision%20root%20canal%20expert%2C%20advanced%20dental%20technology%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_patricia&orientation=squarish",
      tags: ["Endodontia Avançada", "Alta Precisão", "Tecnologia de Ponta", "Procedimentos Indolores"]
    },
    {
      name: "Dr. Roberto Costa",
      specialty: "Implantodontia",
      crm: "Dentista - CRO 34567",
      description: "Especialista em implantes dentários e cirurgia oral. Utiliza tecnologia avançada para reabilitação oral completa com implantes de última geração.",
      phone: "5549327834567",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20implantodontia%20dentist%20specialist%2C%20dental%20implants%20expert%2C%20oral%20surgery%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_roberto&orientation=squarish",
      tags: ["Implantes Dentários", "Cirurgia Oral", "Reabilitação Oral", "Tecnologia Avançada"]
    },
    {
      name: "Dr. Ricardo Pereira",
      specialty: "Implantodontia",
      crm: "Dentista - CRO 90123",
      description: "Implantodontista com especialização em carga imediata. Realiza implantes e próteses no mesmo dia utilizando tecnologia 3D e planejamento digital.",
      phone: "5549327890123",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20dental%20implant%20specialist%2C%20immediate%20loading%20expert%2C%203D%20dental%20technology%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_ricardo&orientation=squarish",
      tags: ["Carga Imediata", "Tecnologia 3D", "Planejamento Digital", "Próteses Rápidas"]
    },
    {
      name: "Dra. Ana Paula Santos",
      specialty: "Odontopediatria",
      crm: "Dentista - CRO 45678",
      description: "Odontopediatra dedicada ao cuidado dental infantil. Cria ambiente lúdico e utiliza técnicas especializadas para tornar o tratamento agradável para crianças.",
      phone: "5549327845678",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20pediatric%20dentist%20odontopediatria%20specialist%2C%20children%20dental%20care%20expert%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_ana&orientation=squarish",
      tags: ["Odontopediatria", "Ambiente Lúdico", "Cuidado Infantil", "Técnicas Especializadas"]
    },
    {
      name: "Dra. Letícia Martins",
      specialty: "Odontopediatria",
      crm: "Dentista - CRO 01234",
      description: "Odontopediatra com especialização em sedação consciente. Atendimento especializado para crianças com necessidades especiais e ansiedade dental.",
      phone: "5549327801234",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20pediatric%20dentist%20special%20needs%20specialist%2C%20children%20dental%20care%20expert%20with%20sedation%2C%20odontopediatria%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_leticia&orientation=squarish",
      tags: ["Sedação Consciente", "Necessidades Especiais", "Ansiedade Dental", "Cuidado Especializado"]
    },
    {
      name: "Dra. Marina Silva",
      specialty: "Ortodontia",
      crm: "Dentista - CRO 23456",
      description: "Ortodontista especializada em aparelhos fixos e móveis. Oferece tratamentos modernos para alinhamento dental e correção da mordida em todas as idades.",
      phone: "5549327823456",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20orthodontist%20dentist%2C%20ortodontia%20specialist%20with%20braces%2C%20dental%20alignment%20expert%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_marina&orientation=squarish",
      tags: ["Aparelhos Fixos", "Aparelhos Móveis", "Alinhamento Dental", "Correção da Mordida"]
    },
    {
      name: "Dra. Camila Alves",
      specialty: "Ortodontia",
      crm: "Dentista - CRO 89012",
      description: "Ortodontista especializada em aparelhos invisíveis e alinhadores. Oferece tratamentos discretos e eficazes para adultos que buscam estética durante o tratamento.",
      phone: "5549327889012",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20orthodontist%20invisible%20braces%20specialist%2C%20clear%20aligners%20expert%2C%20modern%20orthodontics%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_camila&orientation=squarish",
      tags: ["Aparelhos Invisíveis", "Alinhadores", "Tratamentos Discretos", "Ortodontia Adulta"]
    },
    {
      name: "Dr. Fernando Oliveira",
      specialty: "Periodontia",
      crm: "Dentista - CRO 56789",
      description: "Periodontista especializado em tratamento de gengivas e doenças periodontais. Foca na prevenção e cuidados especializados para saúde gengival.",
      phone: "5549327856789",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20periodontist%20dentist%20specialist%2C%20gum%20treatment%20expert%2C%20periodontal%20care%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_fernando&orientation=squarish",
      tags: ["Tratamento Gengival", "Doenças Periodontais", "Prevenção", "Saúde Gengival"]
    },
    {
      name: "Dr. Marcos Souza",
      specialty: "Periodontia",
      crm: "Dentista - CRO 12340",
      description: "Periodontista especializado em cirurgia plástica gengival e regeneração óssea. Oferece tratamentos avançados para saúde periodontal e estética gengival.",
      phone: "5549327812340",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20periodontal%20surgery%20specialist%2C%20gum%20plastic%20surgery%20expert%2C%20bone%20regeneration%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=dent_marcos&orientation=squarish",
      tags: ["Cirurgia Plástica Gengival", "Regeneração Óssea", "Estética Gengival", "Tratamentos Avançados"]
    }
  ];

  // Função para obter classes de cores das tags por especialidade
  const getTagColorClasses = (tag: string, specialty: string) => {
    const colorMap = {
      "Clínica Geral": {
        "Clínica Geral": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Odontologia Preventiva": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Restaurações": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Atendimento Humanizado": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Odontologia Estética": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Lentes de Contato": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Clareamento Dental": "bg-blue-500/20 text-blue-200 border-blue-400/30",
        "Harmonização": "bg-blue-500/20 text-blue-200 border-blue-400/30"
      },
      "Endodontia": {
        "Tratamento de Canal": "bg-red-500/20 text-red-200 border-red-400/30",
        "Microscopia Operatória": "bg-red-500/20 text-red-200 border-red-400/30",
        "Preservação Dental": "bg-red-500/20 text-red-200 border-red-400/30",
        "Técnicas Modernas": "bg-red-500/20 text-red-200 border-red-400/30",
        "Endodontia Avançada": "bg-red-500/20 text-red-200 border-red-400/30",
        "Alta Precisão": "bg-red-500/20 text-red-200 border-red-400/30",
        "Tecnologia de Ponta": "bg-red-500/20 text-red-200 border-red-400/30",
        "Procedimentos Indolores": "bg-red-500/20 text-red-200 border-red-400/30"
      },
      "Implantodontia": {
        "Implantes Dentários": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Cirurgia Oral": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Reabilitação Oral": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Tecnologia Avançada": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Carga Imediata": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Tecnologia 3D": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Planejamento Digital": "bg-purple-500/20 text-purple-200 border-purple-400/30",
        "Próteses Rápidas": "bg-purple-500/20 text-purple-200 border-purple-400/30"
      },
      "Odontopediatria": {
        "Odontopediatria": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Ambiente Lúdico": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Cuidado Infantil": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Técnicas Especializadas": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Sedação Consciente": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Necessidades Especiais": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Ansiedade Dental": "bg-pink-500/20 text-pink-200 border-pink-400/30",
        "Cuidado Especializado": "bg-pink-500/20 text-pink-200 border-pink-400/30"
      },
      "Ortodontia": {
        "Aparelhos Fixos": "bg-green-500/20 text-green-200 border-green-400/30",
        "Aparelhos Móveis": "bg-green-500/20 text-green-200 border-green-400/30",
        "Alinhamento Dental": "bg-green-500/20 text-green-200 border-green-400/30",
        "Correção da Mordida": "bg-green-500/20 text-green-200 border-green-400/30",
        "Aparelhos Invisíveis": "bg-green-500/20 text-green-200 border-green-400/30",
        "Alinhadores": "bg-green-500/20 text-green-200 border-green-400/30",
        "Tratamentos Discretos": "bg-green-500/20 text-green-200 border-green-400/30",
        "Ortodontia Adulta": "bg-green-500/20 text-green-200 border-green-400/30"
      },
      "Periodontia": {
        "Tratamento Gengival": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Doenças Periodontais": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Prevenção": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Saúde Gengival": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Cirurgia Plástica Gengival": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Regeneração Óssea": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Estética Gengival": "bg-orange-500/20 text-orange-200 border-orange-400/30",
        "Tratamentos Avançados": "bg-orange-500/20 text-orange-200 border-orange-400/30"
      }
    };

    return colorMap[specialty as keyof typeof colorMap]?.[tag as keyof typeof colorMap[keyof typeof colorMap]] || 
           "bg-gray-500/20 text-gray-200 border-gray-400/30";
  };

  // Função para obter ícone da tag
  const getTagIcon = (tag: string) => {
    const iconMap = {
      "Clínica Geral": "ri-tooth-line",
      "Odontologia Preventiva": "ri-shield-line",
      "Restaurações": "ri-tools-line",
      "Atendimento Humanizado": "ri-heart-line",
      "Odontologia Estética": "ri-magic-line",
      "Lentes de Contato": "ri-eye-line",
      "Clareamento Dental": "ri-sun-line",
      "Harmonização": "ri-palette-line",
      "Tratamento de Canal": "ri-syringe-line",
      "Microscopia Operatória": "ri-microscope-line",
      "Preservação Dental": "ri-shield-check-line",
      "Técnicas Modernas": "ri-rocket-line",
      "Endodontia Avançada": "ri-cpu-line",
      "Alta Precisão": "ri-focus-3-line",
      "Tecnologia de Ponta": "ri-computer-line",
      "Procedimentos Indolores": "ri-heart-pulse-line",
      "Implantes Dentários": "ri-hammer-line",
      "Cirurgia Oral": "ri-surgical-mask-line",
      "Reabilitação Oral": "ri-refresh-line",
      "Tecnologia Avançada": "ri-robot-line",
      "Carga Imediata": "ri-timer-line",
      "Tecnologia 3D": "ri-3d-view-line",
      "Planejamento Digital": "ri-draft-line",
      "Próteses Rápidas": "ri-speed-line",
      "Odontopediatria": "ri-bear-smile-line",
      "Ambiente Lúdico": "ri-gamepad-line",
      "Cuidado Infantil": "ri-baby-line",
      "Técnicas Especializadas": "ri-star-line",
      "Sedação Consciente": "ri-mental-health-line",
      "Necessidades Especiais": "ri-wheelchair-line",
      "Ansiedade Dental": "ri-emotion-line",
      "Cuidado Especializado": "ri-hand-heart-line",
      "Aparelhos Fixos": "ri-grid-line",
      "Aparelhos Móveis": "ri-phone-line",
      "Alinhamento Dental": "ri-align-center",
      "Correção da Mordida": "ri-scissors-line",
      "Aparelhos Invisíveis": "ri-eye-off-line",
      "Alinhadores": "ri-straighten-line",
      "Tratamentos Discretos": "ri-lock-line",
      "Ortodontia Adulta": "ri-user-line",
      "Tratamento Gengival": "ri-drop-line",
      "Doenças Periodontais": "ri-virus-line",
      "Prevenção": "ri-shield-star-line",
      "Saúde Gengival": "ri-heart-add-line",
      "Cirurgia Plástica Gengival": "ri-scissors-cut-line",
      "Regeneração Óssea": "ri-bone-line",
      "Estética Gengival": "ri-brush-line",
      "Tratamentos Avançados": "ri-award-line"
    };

    return iconMap[tag as keyof typeof iconMap] || "ri-tooth-line";
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

  const scrollToSpecialty = (specialty: string) => {
    const element = document.getElementById(specialty.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover-bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                title="Voltar à homepage"
              >
                <i className="ri-home-line text-white text-lg"></i>
              </button>
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdown(!languageDropdown)}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm hover-bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
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
                        className={`w-full px-3 py-2 text-left text-sm hover-bg-white/50 transition-colors ${
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
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover-bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
                title="Buscar"
              >
                <i className="ri-search-line text-white text-lg"></i>
              </button>
              <button
                onClick={goBack}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm hover-bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20"
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
                  <div className="relative overflow-hidden shadow-lg hover-shadow-xl transition-all duration-300 group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover-bg-white/15 hover-scale-105">
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
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover-scale-110"
                          src={ad.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-green-600/90 text-white">
                          Odontologia
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover-text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover-shadow-xl transform hover-scale-105 bg-gradient-to-r from-green-600 to-green-700 hover-from-green-700 hover-to-green-800 text-white">
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
                    currentSlide === dotIndex ? 'bg-white w-8' : 'bg-white/40 hover-bg-white/60 w-2'
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
              <i className="ri-tooth-line text-green-400"></i>
              Odontologia
              <i className="ri-tooth-line text-green-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Dentistas e clínicas odontológicas</p>
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
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSpecialty(specialty)}
                  className="bg-white/20 hover-bg-white/30 hover-scale-105 active-scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus-outline-none focus-ring-2 focus-ring-white/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {specialty}
                </button>
              ))}
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
                    <i className="ri-tooth-line text-green-400"></i>
                    {specialty}
                  </h3>
                  <div className="h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {specialtyProfessionals.map((professional, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover-bg-white/15 transition-all duration-300">
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
                              <p className="text-green-200 text-xs font-medium">{professional.crm}</p>
                            </div>
                            <div className="bg-green-500/20 text-green-200 border border-green-400/30 px-2 py-1 rounded-full text-xs font-medium">
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
                              className="inline-flex items-center gap-1 px-3 py-2 bg-green-600 hover-bg-green-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover-scale-105 whitespace-nowrap"
                            >
                              <i className="ri-whatsapp-line text-sm"></i>
                              <span>WhatsApp</span>
                            </a>
                            <button className="inline-flex items-center gap-1 px-3 py-2 bg-purple-600 hover-bg-purple-700 rounded-lg text-white text-xs font-medium transition-all duration-200 hover-scale-105 whitespace-nowrap">
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
              <i className="ri-add-circle-line text-green-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você é dentista ou possui clínica odontológica? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço odontológico no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover-bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover-scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar Serviço</span>
              </a>
              <button
                onClick={() => navigate('/guia-medico')}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover-bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover-scale-105 whitespace-nowrap"
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
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover-bg-white/15 hover-scale-105 transition-all duration-300 cursor-pointer h-full">
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover-from-green-700 hover-to-green-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover-scale-105 mt-auto">
                        <span>Clique para visitar</span>
                        <i className="ri-arrow-right-line text-xs"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {partners.slice(0, 3).map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 mx-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover-bg-white/15 hover-scale-105 transition-all duration-300 cursor-pointer h-full">
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover-from-green-700 hover-to-green-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover-scale-105 mt-auto">
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
                    currentPartnerSlide === dotIndex ? 'bg-white w-6' : 'bg-white/40 hover-bg-white/60 w-1.5'
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
                  className="flex flex-col items-center gap-1 text-gray-600 hover-text-green-600 transition-colors"
                >
                  <i className="ri-whatsapp-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/portalurubici"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-gray-600 hover-text-pink-600 transition-colors"
                >
                  <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com.br/portalurubici"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-gray-600 hover-text-blue-600 transition-colors"
                >
                  <i className="ri-facebook-line text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="mailto:portalurubici@gmail.com"
                  className="flex flex-col items-center gap-1 text-gray-600 hover-text-blue-600 transition-colors"
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
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover-from-teal-600 hover-to-teal-700 text-white rounded-full shadow-lg hover-shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-teal-400/30 hover-scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover-transform group-hover--translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover-opacity-100 group-hover-scale-150 transition-all duration-300"></div>
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
