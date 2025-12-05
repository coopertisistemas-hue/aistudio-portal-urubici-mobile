import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BemEstarEstetica() {
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

  // Função para verificar se está aberto
  const isOpen = (horarios: any) => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = domingo, 1 = segunda, etc.
    const currentTime = now.getHours() * 60 + now.getMinutes(); // minutos desde meia-noite
    
    const dayNames = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    const today = dayNames[currentDay];
    
    if (!horarios[today] || horarios[today].fechado) {
      return false;
    }
    
    const { abertura, fechamento } = horarios[today];
    const [aberturaHora, aberturaMin] = abertura.split(':').map(Number);
    const [fechamentoHora, fechamentoMin] = fechamento.split(':').map(Number);
    
    const aberturaMinutos = aberturaHora * 60 + aberturaMin;
    const fechamentoMinutos = fechamentoHora * 60 + fechamentoMin;
    
    return currentTime >= aberturaMinutos && currentTime <= fechamentoMinutos;
  };

  // Componente de Status
  const StatusTag = ({ horarios }: { horarios: any }) => {
    const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false);
    
    useEffect(() => {
      const checkStatus = () => {
        setIsCurrentlyOpen(isOpen(horarios));
      };
      
      checkStatus();
      const interval = setInterval(checkStatus, 60000); // Atualiza a cada minuto
      
      return () => clearInterval(interval);
    }, [horarios]);
    
    return (
      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${
        isCurrentlyOpen 
          ? 'bg-green-500/20 text-green-200 border-green-400/30' 
          : 'bg-red-500/20 text-red-200 border-red-400/30'
      }`}>
        <div className={`w-2 h-2 rounded-full ${isCurrentlyOpen ? 'bg-green-400' : 'bg-red-400'}`}></div>
        <span>{isCurrentlyOpen ? 'Aberto' : 'Fechado'}</span>
      </div>
    );
  };

  const featuredAds = [
    {
      title: "Clínica Bella Vita",
      subtitle: "Estética Avançada & Bem-Estar",
      image: "https://readdy.ai/api/search-image?query=Modern%20aesthetic%20clinic%20Bella%20Vita%20with%20beauty%20treatments%20and%20wellness%20services%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20spa%20facility%20with%20mountain%20landscape%20background&width=300&height=200&seq=bella_vita1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Spa Wellness Serra",
      subtitle: "Relaxamento & Terapias Naturais",
      image: "https://readdy.ai/api/search-image?query=Luxury%20spa%20wellness%20center%20with%20natural%20therapies%20and%20relaxation%20treatments%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20spa%20facility&width=300&height=200&seq=spa_wellness1&orientation=landscape",
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

  // Dados dos serviços de bem-estar e estética organizados por categoria
  const servicosData = {
    "CLÍNICAS DE ESTÉTICA": [
      {
        id: 1,
        nome: "Clínica Bella Vita",
        categoria: "Estética Avançada",
        telefone: "(49) 3278-1500",
        whatsapp: "5549327815001",
        descricao: "Clínica de estética com tratamentos avançados para rosto e corpo. Procedimentos estéticos minimamente invasivos e cuidados personalizados.",
        imagem: "https://readdy.ai/api/search-image?query=Bella%20Vita%20aesthetic%20clinic%20interior%20with%20modern%20equipment%20and%20treatment%20rooms%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20beauty%20clinic%20facility&width=200&height=200&seq=bella_vita_interior&orientation=squarish",
        horarios: {
          segunda: { abertura: "08:00", fechamento: "18:00" },
          terca: { abertura: "08:00", fechamento: "18:00" },
          quarta: { abertura: "08:00", fechamento: "18:00" },
          quinta: { abertura: "08:00", fechamento: "18:00" },
          sexta: { abertura: "08:00", fechamento: "18:00" },
          sabado: { abertura: "08:00", fechamento: "12:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Tratamentos Faciais", type: "service", color: "pink" },
          { label: "Procedimentos Corporais", type: "service", color: "purple" },
          { label: "Tecnologia Avançada", type: "feature", color: "blue" }
        ]
      },
      {
        id: 2,
        nome: "Estética Renovare",
        categoria: "Estética Facial",
        telefone: "(49) 3278-2600",
        whatsapp: "5549327826002",
        descricao: "Especializada em rejuvenescimento facial e tratamentos anti-idade. Protocolos personalizados para cada tipo de pele.",
        imagem: "https://readdy.ai/api/search-image?query=Renovare%20facial%20aesthetic%20clinic%20with%20anti-aging%20treatments%20and%20skincare%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20facial%20rejuvenation%20facility&width=200&height=200&seq=renovare_clinic&orientation=squarish",
        horarios: {
          segunda: { abertura: "09:00", fechamento: "17:00" },
          terca: { abertura: "09:00", fechamento: "17:00" },
          quarta: { abertura: "09:00", fechamento: "17:00" },
          quinta: { abertura: "09:00", fechamento: "17:00" },
          sexta: { abertura: "09:00", fechamento: "17:00" },
          sabado: { fechado: true },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Rejuvenescimento", type: "service", color: "pink" },
          { label: "Anti-idade", type: "feature", color: "purple" },
          { label: "Protocolos Personalizados", type: "feature", color: "blue" }
        ]
      }
    ],
    "BARBEARIAS": [
      {
        id: 3,
        nome: "Junior Barbearia Urubici",
        categoria: "Barbearia Tradicional",
        telefone: "(49) 3278-3400",
        whatsapp: "5549327834003",
        descricao: "Barbearia tradicional com atendimento personalizado e cortes clássicos. Especializada em barba, bigode e cortes masculinos tradicionais e modernos.",
        imagem: "https://readdy.ai/api/search-image?query=Junior%20Barbearia%20traditional%20barbershop%20interior%20with%20classic%20barber%20chairs%20and%20professional%20grooming%20services%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=junior_barbearia&orientation=squarish",
        horarios: {
          segunda: { abertura: "08:00", fechamento: "18:00" },
          terca: { abertura: "08:00", fechamento: "18:00" },
          quarta: { abertura: "08:00", fechamento: "18:00" },
          quinta: { abertura: "08:00", fechamento: "18:00" },
          sexta: { abertura: "08:00", fechamento: "18:00" },
          sabado: { abertura: "08:00", fechamento: "16:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Cortes Tradicionais", type: "service", color: "blue" },
          { label: "Barba Profissional", type: "service", color: "orange" },
          { label: "Atendimento Personalizado", type: "feature", color: "green" }
        ]
      },
      {
        id: 4,
        nome: "Capelli Barbearia",
        categoria: "Barbearia Masculina",
        telefone: "(49) 3278-3500",
        whatsapp: "5549327835004",
        descricao: "Barbearia especializada em cortes masculinos modernos e tradicionais. Serviços de barba, bigode e cuidados com cabelo masculino.",
        imagem: "https://readdy.ai/api/search-image?query=Capelli%20Barbearia%20modern%20barbershop%20interior%20with%20professional%20barber%20chairs%20and%20masculine%20grooming%20services%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=capelli_barbearia&orientation=squarish",
        horarios: {
          segunda: { fechado: true },
          terca: { abertura: "09:00", fechamento: "19:00" },
          quarta: { abertura: "09:00", fechamento: "19:00" },
          quinta: { abertura: "09:00", fechamento: "19:00" },
          sexta: { abertura: "09:00", fechamento: "19:00" },
          sabado: { abertura: "08:00", fechamento: "17:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Cortes Masculinos", type: "service", color: "blue" },
          { label: "Barba & Bigode", type: "service", color: "orange" },
          { label: "Cuidados Masculinos", type: "feature", color: "purple" }
        ]
      },
      {
        id: 5,
        nome: "Bellvedere Barber Shop",
        categoria: "Barber Shop",
        telephone: "(49) 3278-4600",
        whatsapp: "5549327846005",
        descricao: "Barber shop com ambiente moderno e serviços completos para o homem moderno. Cortes, barba, relaxamento e produtos masculinos.",
        imagem: "https://readdy.ai/api/search-image?query=Bellvedere%20Barber%20Shop%20modern%20masculine%20barbershop%20with%20professional%20services%20and%20relaxing%20atmosphere%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bellvedere_barber&orientation=squarish",
        horarios: {
          segunda: { abertura: "08:30", fechamento: "18:30" },
          terca: { abertura: "08:30", fechamento: "18:30" },
          quarta: { abertura: "08:30", fechamento: "18:30" },
          quinta: { abertura: "08:30", fechamento: "18:30" },
          sexta: { abertura: "08:30", fechamento: "18:30" },
          sabado: { abertura: "08:00", fechamento: "15:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Ambiente Moderno", type: "feature", color: "blue" },
          { label: "Serviços Completos", type: "service", color: "green" },
          { label: "Produtos Masculinos", type: "feature", color: "orange" }
        ]
      }
    ],
    "SPA & WELLNESS": [
      {
        id: 6,
        nome: "Spa Wellness Serra",
        categoria: "Spa Completo",
        telefone: "(49) 3278-3700",
        whatsapp: "5549327837006",
        descricao: "Spa completo com terapias relaxantes, massagens terapêuticas e tratamentos de bem-estar. Ambiente tranquilo na serra.",
        imagem: "https://readdy.ai/api/search-image?query=Wellness%20Serra%20spa%20with%20relaxing%20therapies%20and%20massage%20treatments%20in%20mountain%20setting%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=wellness_serra&orientation=squarish",
        horarios: {
          segunda: { abertura: "09:00", fechamento: "18:00" },
          terca: { abertura: "09:00", fechamento: "18:00" },
          quarta: { abertura: "09:00", fechamento: "18:00" },
          quinta: { abertura: "09:00", fechamento: "18:00" },
          sexta: { abertura: "09:00", fechamento: "18:00" },
          sabado: { abertura: "09:00", fechamento: "16:00" },
          domingo: { abertura: "10:00", fechamento: "15:00" }
        },
        tags: [
          { label: "Massagens Terapêuticas", type: "service", color: "green" },
          { label: "Terapias Relaxantes", type: "service", color: "blue" },
          { label: "Ambiente Serrano", type: "feature", color: "orange" }
        ]
      },
      {
        id: 7,
        nome: "Zen Spa Urubici",
        categoria: "Spa Terapêutico",
        telefone: "(49) 3278-4800",
        whatsapp: "5549327848007",
        descricao: "Spa focado em terapias holísticas e bem-estar integral. Tratamentos com pedras quentes, aromaterapia e reflexologia.",
        imagem: "https://readdy.ai/api/search-image?query=Zen%20Spa%20with%20holistic%20therapies%20hot%20stone%20treatments%20and%20aromatherapy%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20therapeutic%20spa%20facility&width=200&height=200&seq=zen_spa&orientation=squarish",
        horarios: {
          segunda: { fechado: true },
          terca: { abertura: "10:00", fechamento: "19:00" },
          quarta: { abertura: "10:00", fechamento: "19:00" },
          quinta: { abertura: "10:00", fechamento: "19:00" },
          sexta: { abertura: "10:00", fechamento: "19:00" },
          sabado: { abertura: "09:00", fechamento: "17:00" },
          domingo: { abertura: "10:00", fechamento: "16:00" }
        },
        tags: [
          { label: "Terapias Holísticas", type: "service", color: "purple" },
          { label: "Pedras Quentes", type: "service", color: "orange" },
          { label: "Aromaterapia", type: "feature", color: "green" }
        ]
      }
    ],
    "MASSOTERAPIA": [
      {
        id: 8,
        nome: "Centro de Massoterapia Vital",
        categoria: "Massoterapia",
        telefone: "(49) 3278-5900",
        whatsapp: "5549327859008",
        descricao: "Centro especializado em massoterapia terapêutica e relaxante. Profissionais qualificados em diversas técnicas de massagem.",
        imagem: "https://readdy.ai/api/search-image?query=Vital%20massage%20therapy%20center%20with%20therapeutic%20and%20relaxing%20massage%20treatments%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20professional%20massage%20facility&width=200&height=200&seq=vital_massage&orientation=squarish",
        horarios: {
          segunda: { abertura: "08:00", fechamento: "17:00" },
          terca: { abertura: "08:00", fechamento: "17:00" },
          quarta: { abertura: "08:00", fechamento: "17:00" },
          quinta: { abertura: "08:00", fechamento: "17:00" },
          sexta: { abertura: "08:00", fechamento: "17:00" },
          sabado: { abertura: "08:00", fechamento: "12:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Massagem Terapêutica", type: "service", color: "blue" },
          { label: "Massagem Relaxante", type: "service", color: "green" },
          { label: "Profissionais Qualificados", type: "feature", color: "purple" }
        ]
      },
      {
        id: 9,
        nome: "Terapias Manuais Serra",
        categoria: "Terapias Manuais",
        telefone: "(49) 3278-6000",
        whatsapp: "5549327860009",
        descricao: "Especializada em terapias manuais, quiropraxia e osteopatia. Tratamento de dores musculares e problemas posturais.",
        imagem: "https://readdy.ai/api/search-image?query=Manual%20therapy%20center%20with%20chiropractic%20and%20osteopathy%20treatments%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20therapeutic%20manual%20treatment%20facility&width=200&height=200&seq=manual_therapy&orientation=squarish",
        horarios: {
          segunda: { abertura: "07:00", fechamento: "18:00" },
          terca: { abertura: "07:00", fechamento: "18:00" },
          quarta: { abertura: "07:00", fechamento: "18:00" },
          quinta: { abertura: "07:00", fechamento: "18:00" },
          sexta: { abertura: "07:00", fechamento: "18:00" },
          sabado: { abertura: "07:00", fechamento: "13:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Quiropraxia", type: "service", color: "blue" },
          { label: "Osteopatia", type: "service", color: "purple" },
          { label: "Tratamento Postural", type: "feature", color: "green" }
        ]
      }
    ],
    "MEDICINA ALTERNATIVA": [
      {
        id: 10,
        nome: "Centro de Acupuntura Oriental",
        categoria: "Acupuntura",
        telefone: "(49) 3278-7100",
        whatsapp: "5549327871010",
        descricao: "Centro especializado em acupuntura e medicina tradicional chinesa. Tratamentos para dor, estresse e equilíbrio energético.",
        imagem: "https://readdy.ai/api/search-image?query=Oriental%20acupuncture%20center%20with%20traditional%20Chinese%20medicine%20treatments%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20alternative%20medicine%20facility&width=200&height=200&seq=acupuncture_center&orientation=squarish",
        horarios: {
          segunda: { abertura: "08:00", fechamento: "19:00" },
          terca: { abertura: "08:00", fechamento: "19:00" },
          quarta: { abertura: "08:00", fechamento: "19:00" },
          quinta: { abertura: "08:00", fechamento: "19:00" },
          sexta: { abertura: "08:00", fechamento: "19:00" },
          sabado: { abertura: "08:00", fechamento: "14:00" },
          domingo: { fechado: true }
        },
        tags: [
          { label: "Medicina Chinesa", type: "service", color: "orange" },
          { label: "Tratamento de Dor", type: "service", color: "red" },
          { label: "Equilíbrio Energético", type: "feature", color: "purple" }
        ]
      },
      {
        id: 11,
        nome: "Terapias Integrativas Harmonia",
        categoria: "Terapias Integrativas",
        telefone: "(49) 3278-8200",
        whatsapp: "5549327882011",
        descricao: "Centro de terapias integrativas com reiki, florais, cristaloterapia e outras práticas de cura natural.",
        imagem: "https://readdy.ai/api/search-image?query=Harmonia%20integrative%20therapies%20center%20with%20reiki%20crystal%20therapy%20and%20natural%20healing%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=harmonia_therapies&orientation=squarish",
        horarios: {
          segunda: { abertura: "09:00", fechamento: "18:00" },
          terca: { abertura: "09:00", fechamento: "18:00" },
          quarta: { fechado: true },
          quinta: { abertura: "09:00", fechamento: "18:00" },
          sexta: { abertura: "09:00", fechamento: "18:00" },
          sabado: { abertura: "09:00", fechamento: "15:00" },
          domingo: { abertura: "14:00", fechamento: "18:00" }
        },
        tags: [
          { label: "Reiki", type: "service", color: "purple" },
          { label: "Cristaloterapia", type: "service", color: "blue" },
          { label: "Cura Natural", type: "feature", color: "green" }
        ]
      }
    ]
  };

  // Categorias para atalhos
  const categorias = Object.keys(servicosData);

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

  // Agrupar serviços por categoria
  const servicosPorCategoria = categorias.reduce((acc, categoria) => {
    acc[categoria] = servicosData[categoria];
    return acc;
  }, {} as Record<string, typeof servicosData[keyof typeof servicosData]>);

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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-pink-600/90 text-white">
                          Bem-Estar
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-pink-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white">
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
              <i className="ri-heart-pulse-line text-pink-400"></i>
              Bem-Estar & Estética
              <i className="ri-heart-pulse-line text-pink-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Cuidados estéticos e bem-estar</p>
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
                  className="bg-pink-500/20 hover:bg-pink-400/30 hover:scale-105 active:scale-95 text-pink-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services by Category */}
        <div className="px-4 mb-6">
          {categorias.map((categoria) => {
            const servicos = servicosPorCategoria[categoria];
            if (!servicos || servicos.length === 0) return null;

            return (
              <div key={categoria} className="mb-8">
                <div
                  id={`categoria-${categoria.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="mb-4"
                >
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-heart-pulse-line text-pink-400"></i>
                    {categoria}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {servicos.length} {servicos.length === 1 ? 'serviço disponível' : 'serviços disponíveis'}
                  </p>
                </div>

                <div className="space-y-4">
                  {servicos.map((servico) => (
                    <div key={servico.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/20 flex-shrink-0">
                          <img
                            alt={servico.nome}
                            className="w-full h-full object-cover"
                            src={servico.imagem}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-white font-bold text-sm leading-tight">
                              {servico.nome}
                            </h4>
                            <div className="bg-pink-500/20 text-pink-200 border-pink-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {servico.categoria}
                            </div>
                          </div>

                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {servico.descricao}
                          </p>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {/* Status Tag */}
                            <StatusTag horarios={servico.horarios} />
                            
                            {servico.tags.map((tag, tagIndex) => {
                              const getTagColors = (color) => {
                                const colors = {
                                  blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                                  green: "bg-green-500/20 text-green-200 border-green-400/30",
                                  purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                                  red: "bg-red-500/20 text-red-200 border-red-400/30",
                                  orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                                  pink: "bg-pink-500/20 text-pink-200 border-pink-400/30"
                                };
                                return colors[color] || colors.blue;
                              };

                              const getTagIcon = (type) => {
                                const icons = {
                                  service: "ri-service-line",
                                  feature: "ri-star-line",
                                  status: "ri-circle-fill",
                                  payment: "ri-bank-card-line"
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
                            <div className="flex gap-2 justify-center">
                              {servico.whatsapp && (
                                <a
                                  href={`https://wa.me/${servico.whatsapp}?text=Olá! Gostaria de informações sobre os serviços da ${servico.nome}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap min-h-[44px]"
                                >
                                  <i className="ri-whatsapp-line text-base"></i>
                                  <span>WhatsApp</span>
                                </a>
                              )}
                              <button 
                                disabled
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-500 cursor-not-allowed rounded-lg text-white text-sm font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                                title="Em breve"
                              >
                                <i className="ri-calendar-line text-base"></i>
                                <span>Agendar</span>
                              </button>
                            </div>
                            <button 
                              disabled
                              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-500 cursor-not-allowed rounded-lg text-white text-sm font-medium opacity-50 whitespace-nowrap min-h-[44px]"
                              title="Em breve"
                            >
                              <i className="ri-eye-line text-base"></i>
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
              <i className="ri-add-circle-line text-pink-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você oferece serviços de bem-estar ou estética? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço de bem-estar/estética no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap min-h-[44px]"
              >
                <i className="ri-whatsapp-line text-base"></i>
                <span>Entrar em Contato</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
