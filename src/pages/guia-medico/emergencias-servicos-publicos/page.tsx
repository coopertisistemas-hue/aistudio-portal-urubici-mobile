import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmergenciasServicosPublicos() {
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
      title: "Hospital Municipal de Urubici",
      subtitle: "Atendimento 24h - Emergências Médicas",
      image: "https://readdy.ai/api/search-image?query=Municipal%20hospital%20Hospital%20Municipal%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20public%20healthcare%20facility%2C%20medical%20center%20building%20with%20mountain%20background&width=300&height=200&seq=hospital1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "SAMU 192",
      subtitle: "Serviço de Atendimento Móvel de Urgência",
      image: "https://readdy.ai/api/search-image?query=SAMU%20ambulance%20emergency%20medical%20service%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20mobile%20emergency%20healthcare%20unit%2C%20medical%20emergency%20response%20vehicle&width=300&height=200&seq=samu1&orientation=landscape",
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

  // Dados dos serviços organizados por categoria em ordem alfabética
  const emergencyData = {
    "BOMBEIROS": [
      {
        id: 1,
        nome: "Corpo de Bombeiros Militar – Urubici",
        especialidade: "Bombeiros",
        descricao: "Emergências 193; combate a incêndio e APH. Atendimento especializado em salvamentos e prevenção de acidentes.",
        telefone: "193",
        telefoneLocal: "(49) 3233-8499",
        endereco: "Rua Oliveira de Souza, 533 – Centro",
        whatsapp: "5549323384990",
        funcionamento: "24 horas",
        imagem: "https://readdy.ai/api/search-image?query=Fire%20department%20building%20Corpo%20de%20Bombeiros%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20firefighters%20station%2C%20emergency%20services%20facility%20in%20mountain%20town&width=200&height=200&seq=bombeiros1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Corpo%20de%20Bombeiros%20Militar%20%E2%80%93%20Urubici%20Rua%20Oliveira%20de%20Souza%2C%20533%20%E2%80%93%20Centro%20Urubici%20SC",
        tags: [
          { label: "24 Horas", type: "status", color: "green" },
          { label: "Emergência 193", type: "service", color: "red" },
          { label: "Combate a Incêndio", type: "service", color: "red" },
          { label: "APH", type: "service", color: "orange" }
        ]
      }
    ],
    "DEFESA CIVIL": [
      {
        id: 2,
        nome: "Defesa Civil – Urubici",
        especialidade: "Defesa Civil",
        descricao: "Defesa Civil municipal; Emergência 199. Prevenção e resposta a desastres naturais, coordenação de emergências.",
        telefone: "199",
        telefoneLocal: "(49) 3191-1609",
        endereco: "Praça Francisco Pereira Souza, 53 – Centro",
        whatsapp: "5549991914083",
        funcionamento: "Seg-Sex: 8:00-18:00",
        imagem: "https://readdy.ai/api/search-image?query=Civil%20defense%20Defesa%20Civil%20office%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20disaster%20prevention%20facility%2C%20emergency%20management%20center&width=200&height=200&seq=dc1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Defesa%20Civil%20%E2%80%93%20Urubici%20Pra%C3%A7a%20Francisco%20Pereira%20Souza%2C%2053%20%E2%80%93%20Centro%20Urubici%20SC",
        tags: [
          { label: "Emergência 199", type: "service", color: "red" },
          { label: "Prevenção", type: "service", color: "blue" },
          { label: "Desastres Naturais", type: "service", color: "orange" },
          { label: "Municipal", type: "feature", color: "purple" }
        ]
      }
    ],
    "EMERGÊNCIA MÉDICA": [
      {
        id: 3,
        nome: "SAMU – Serviço de Atendimento Móvel de Urgência",
        especialidade: "Emergência Médica",
        descricao: "Emergências médicas pelo 192. Atendimento pré-hospitalar móvel de urgência e emergência com equipe médica especializada.",
        telefone: "192",
        endereco: "Base municipal - Urubici",
        whatsapp: "192",
        funcionamento: "24 horas",
        imagem: "https://readdy.ai/api/search-image?query=SAMU%20ambulance%20emergency%20medical%20service%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20mobile%20emergency%20healthcare%20unit%2C%20medical%20emergency%20response%20vehicle&width=200&height=200&seq=samu1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=SAMU%20%E2%80%93%20Servi%C3%A7o%20de%20Atendimento%20M%C3%B3vel%20de%20Urg%C3%AAncia%20%28Base%20Urubici%29%20%28Base%20municipal%29%20Urubici%20SC",
        tags: [
          { label: "24 Horas", type: "status", color: "green" },
          { label: "Emergência 192", type: "service", color: "red" },
          { label: "Atendimento Móvel", type: "service", color: "blue" },
          { label: "Equipe Médica", type: "feature", color: "purple" }
        ]
      }
    ],
    "HOSPITAL": [
      {
        id: 4,
        nome: "Hospital São José de Urubici",
        especialidade: "Hospital",
        descricao: "Pronto atendimento 24h. Hospital com atendimento completo, pronto socorro, internações e procedimentos médicos.",
        telefone: "(49) 3278-4141",
        endereco: "R. Boanerges Pereira de Medeiros, 1196 – Centro",
        whatsapp: "5549327841410",
        funcionamento: "24 horas",
        imagem: "https://readdy.ai/api/search-image?query=Municipal%20hospital%20Hospital%20Municipal%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20public%20healthcare%20facility%2C%20medical%20center%20building%20with%20mountain%20background&width=200&height=200&seq=hospital1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Hospital%20S%C3%A3o%20Jos%C3%A9%20de%20Urubici%20%2824h%29%20R.%20Boanerges%20Pereira%20de%20Medeiros%2C%201196%20%E2%80%93%20Centro%20Urubici%20SC",
        tags: [
          { label: "24 Horas", type: "status", color: "green" },
          { label: "Pronto Socorro", type: "service", color: "red" },
          { label: "Internações", type: "service", color: "blue" },
          { label: "Procedimentos", type: "service", color: "purple" }
        ]
      }
    ],
    "SEGURANÇA PÚBLICA": [
      {
        id: 5,
        nome: "Polícia Militar de Santa Catarina – Urubici",
        especialidade: "Segurança Pública",
        descricao: "Emergência 190; atendimento local. Policiamento ostensivo, segurança pública e atendimento de ocorrências policiais.",
        telefone: "190",
        telefoneLocal: "(49) 3233-8373",
        endereco: "R. Pedro Custódio, 50 – Nossa Senhora Aparecida",
        whatsapp: "190",
        funcionamento: "24 horas",
        imagem: "https://readdy.ai/api/search-image?query=Military%20police%20station%20Pol%C3%ADcia%20Militar%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20public%20security%20facility%2C%20law%20enforcement%20building&width=200&height=200&seq=pm1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Pol%C3%ADcia%20Militar%20de%20Santa%20Catarina%20%E2%80%93%20Urubici%20R.%20Pedro%20Cust%C3%B3dio%2C%2050%20%E2%80%93%20Nossa%20Senhora%20Aparecida%20Urubici%20SC",
        tags: [
          { label: "24 Horas", type: "status", color: "green" },
          { label: "Emergência 190", type: "service", color: "red" },
          { label: "Patrulhamento", type: "service", color: "blue" },
          { label: "Segurança Pública", type: "service", color: "purple" }
        ]
      },
      {
        id: 6,
        nome: "Delegacia de Polícia Civil – Urubici",
        especialidade: "Segurança Pública",
        descricao: "Atendimento policial e registros. Investigação criminal, registro de boletins de ocorrência e procedimentos policiais.",
        telefone: "(49) 3278-4188",
        telefoneAlternativo: "(49) 3278-4511",
        endereco: "Rua Manoel Bruno Mattos, s/n – Aparecida",
        whatsapp: "5549327841880",
        funcionamento: "Seg-Sex: 8:00-18:00",
        imagem: "https://readdy.ai/api/search-image?query=Civil%20police%20station%20Pol%C3%ADcia%20Civil%20delegacia%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20law%20enforcement%20facility%2C%20police%20investigation%20unit&width=200&height=200&seq=pc1&orientation=squarish",
        maps: "https://www.google.com/maps/search/?api=1&query=Delegacia%20de%20Pol%C3%ADcia%20Civil%20%E2%80%93%20Urubici%20%28Comarca%29%20Rua%20Manoel%20Bruno%20Mattos%2C%20s/n%20%E2%80%93%20Aparecida%20Urubici%20SC",
        tags: [
          { label: "Investigação", type: "service", color: "purple" },
          { label: "Boletim de Ocorrência", type: "service", color: "blue" },
          { label: "Comarca", type: "feature", color: "orange" },
          { label: "Atendimento Público", type: "feature", color: "green" }
        ]
      }
    ]
  };

  // Especialidades para atalhos em ordem alfabética
  const especialidades = Object.keys(emergencyData).sort();

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

  // Agrupar serviços por especialidade
  const servicosPorEspecialidade = especialidades.reduce((acc, especialidade) => {
    acc[especialidade] = emergencyData[especialidade];
    return acc;
  }, {} as Record<string, typeof emergencyData[keyof typeof emergencyData]>);

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
                          Emergência
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
              <i className="ri-alarm-warning-line text-red-400"></i>
              Emergências & Serviços Públicos
              <i className="ri-alarm-warning-line text-red-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Atendimento 24h, SAMU, Bombeiros e serviços essenciais</p>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="px-4 mb-6">
          <div className="bg-red-600/30 backdrop-blur-sm rounded-2xl p-4 border border-red-400/40 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-red-500/50 rounded-full flex items-center justify-center">
                <i className="ri-alarm-warning-fill text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">EMERGÊNCIA</h3>
                <p className="text-red-100 text-xs">Em caso de emergência, ligue imediatamente</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <a href="tel:192" className="bg-red-500/40 hover:bg-red-500/60 rounded-lg p-2 text-center transition-colors">
                <div className="text-white font-bold text-lg">192</div>
                <div className="text-red-100 text-xs">SAMU</div>
              </a>
              <a href="tel:193" className="bg-red-500/40 hover:bg-red-500/60 rounded-lg p-2 text-center transition-colors">
                <div className="text-white font-bold text-lg">193</div>
                <div className="text-red-100 text-xs">Bombeiros</div>
              </a>
              <a href="tel:190" className="bg-red-500/40 hover:bg-red-500/60 rounded-lg p-2 text-center transition-colors">
                <div className="text-white font-bold text-lg">190</div>
                <div className="text-red-100 text-xs">Polícia</div>
              </a>
            </div>
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
                  className="bg-red-500/20 hover:bg-red-400/30 hover:scale-105 active:scale-95 text-red-200 font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {especialidade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services by Category */}
        <div className="px-4 mb-6">
          {especialidades.map((especialidade) => {
            const servicos = servicosPorEspecialidade[especialidade];
            if (!servicos || servicos.length === 0) return null;

            return (
              <div key={especialidade} className="mb-8">
                <div
                  id={`especialidade-${especialidade.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="mb-4"
                >
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <i className="ri-alarm-warning-line text-red-400"></i>
                    {especialidade}
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
                            <div className="bg-red-500/20 text-red-200 border-red-400/30 px-2 py-1 rounded-full text-xs font-medium">
                              {servico.especialidade}
                            </div>
                          </div>
                          <p className="text-white/80 text-xs leading-relaxed mb-2">
                            {servico.descricao}
                          </p>

                          {/* Informações de Contato */}
                          <div className="mb-2">
                            <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                              <i className="ri-phone-line text-green-400"></i>
                              <span>{servico.telefone}</span>
                              {servico.telefoneLocal && (
                                <span className="text-white/50">• {servico.telefoneLocal}</span>
                              )}
                              {servico.telefoneAlternativo && (
                                <span className="text-white/50">• {servico.telefoneAlternativo}</span>
                              )}
                            </div>
                            {servico.endereco && (
                              <div className="flex items-center gap-2 text-xs text-white/70 mb-1">
                                <i className="ri-map-pin-line text-blue-400"></i>
                                <span>{servico.endereco}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-xs text-white/70">
                              <i className="ri-time-line text-yellow-400"></i>
                              <span>{servico.funcionamento}</span>
                            </div>
                          </div>

                          {/* Tags Inteligentes */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {servico.tags.map((tag, tagIndex) => {
                              const getTagColors = (color: string) => {
                                const colors = {
                                  blue: "bg-blue-500/20 text-blue-200 border-blue-400/30",
                                  green: "bg-green-500/20 text-green-200 border-green-400/30",
                                  red: "bg-red-500/20 text-red-200 border-red-400/30",
                                  orange: "bg-orange-500/20 text-orange-200 border-orange-400/30",
                                  purple: "bg-purple-500/20 text-purple-200 border-purple-400/30",
                                  cyan: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
                                  pink: "bg-pink-500/20 text-pink-200 border-pink-400/30"
                                };
                                return colors[color as keyof typeof colors] || colors.blue;
                              };

                              const getTagIcon = (type: string) => {
                                const icons = {
                                  service: "ri-service-line",
                                  feature: "ri-star-line",
                                  status: "ri-circle-fill"
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
                              href={`tel:${servico.telefone}`}
                              className="inline-flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors shadow hover:shadow-md"
                            >
                              <i className="ri-phone-line"></i>
                              <span>Ligar</span>
                            </a>
                            {servico.maps && (
                              <button
                                onClick={() => {
                                  window.open(servico.maps, '_blank');
                                }}
                                className="inline-flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow hover:shadow-md"
                              >
                                <i className="ri-map-pin-line"></i>
                                <span>Localização</span>
                              </button>
                            )}
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
              <i className="ri-add-circle-line text-red-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você representa um serviço público de saúde ou emergência? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar um serviço público de emergência no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-7
                00 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
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
      </div>
    </div>
  );
}
