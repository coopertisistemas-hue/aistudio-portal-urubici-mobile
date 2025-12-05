import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BiomedicinaEstetica() {
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
      title: "Clínica Estética Urubici",
      subtitle: "Harmonização Facial & Tratamentos",
      image: "https://readdy.ai/api/search-image?query=Modern%20aesthetic%20clinic%20exterior%20building%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20beauty%20treatment%20facility%2C%20cosmetic%20medicine%20center%20with%20mountain%20background&width=300&height=200&seq=estetica1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Biomedicina Avançada",
      subtitle: "Procedimentos Estéticos Seguros",
      image: "https://readdy.ai/api/search-image?query=Professional%20biomedical%20aesthetic%20clinic%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20advanced%20beauty%20treatments%20facility%2C%20medical%20aesthetics%20center&width=300&height=200&seq=bio1&orientation=landscape",
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
    "Harmonização Facial",
    "Preenchimento Labial",
    "Botox",
    "Peeling Químico",
    "Microagulhamento",
    "Tratamentos Faciais"
  ];

  const professionals = [
    {
      name: "Dra. Ana Beatriz Costa",
      specialty: "Biomédica Estética",
      crm: "CRBM 15678",
      description: "Especialista em harmonização facial com técnicas avançadas e seguras. Mais de 8 anos de experiência em procedimentos estéticos.",
      phone: "5549327845123",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20biomedical%20aesthetics%20specialist%20in%20white%20coat%2C%20harmoniza%C3%A7%C3%A3o%20facial%20expert%2C%20beauty%20treatment%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_ana&orientation=squarish",
      tags: [
        { text: "Harmonização Facial", color: "pink", icon: "ri-heart-line" },
        { text: "Preenchimento", color: "purple", icon: "ri-drop-line" },
        { text: "Botox", color: "blue", icon: "ri-syringe-line" },
        { text: "Resultados Naturais", color: "green", icon: "ri-leaf-line" }
      ]
    },
    {
      name: "Dr. Rafael Mendes",
      specialty: "Biomédico Estético",
      crm: "CRBM 23456",
      description: "Biomédico especializado em aplicação de toxina botulínica e preenchimentos. Atendimento personalizado e resultados naturais.",
      phone: "5549327856789",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20biomedical%20aesthetics%20specialist%2C%20botox%20treatment%20expert%2C%20cosmetic%20medicine%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_rafael&orientation=squarish",
      tags: [
        { text: "Toxina Botulínica", color: "blue", icon: "ri-syringe-line" },
        { text: "Preenchimento Labial", color: "pink", icon: "ri-heart-line" },
        { text: "Atendimento Personalizado", color: "green", icon: "ri-user-heart-line" },
        { text: "Técnicas Avançadas", color: "purple", icon: "ri-star-line" }
      ]
    },
    {
      name: "Dra. Carla Fernandes",
      specialty: "Biomédica Estética",
      crm: "CRBM 34567",
      description: "Especialista em microagulhamento e tratamentos de rejuvenescimento facial. Técnicas modernas para cuidados com a pele.",
      phone: "5549327867890",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20biomedical%20specialist%20microagulhamento%20expert%2C%20skin%20treatment%20professional%2C%20aesthetic%20medicine%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_carla&orientation=squarish",
      tags: [
        { text: "Microagulhamento", color: "orange", icon: "ri-needle-line" },
        { text: "Rejuvenescimento", color: "pink", icon: "ri-heart-pulse-line" },
        { text: "Cuidados da Pele", color: "green", icon: "ri-leaf-line" },
        { text: "Técnicas Modernas", color: "blue", icon: "ri-flashlight-line" }
      ]
    },
    {
      name: "Dr. Lucas Silva",
      specialty: "Biomédico Estético",
      crm: "CRBM 45678",
      description: "Biomédico com especialização em peelings químicos e tratamentos para rejuvenescimento da pele. Protocolos personalizados.",
      phone: "5549327878901",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20biomedical%20peeling%20qu%C3%ADmico%20specialist%2C%20skin%20treatment%20expert%2C%20aesthetic%20medicine%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_lucas&orientation=squarish",
      tags: [
        { text: "Peeling Químico", color: "orange", icon: "ri-drop-line" },
        { text: "Rejuvenescimento", color: "pink", icon: "ri-heart-pulse-line" },
        { text: "Protocolos Personalizados", color: "purple", icon: "ri-file-list-line" },
        { text: "Especialização", color: "blue", icon: "ri-award-line" }
      ]
    },
    {
      name: "Dra. Juliana Santos",
      specialty: "Biomédica Estética",
      crm: "CRBM 56789",
      description: "Especialista em preenchimento labial e harmonização orofacial. Resultados naturais com técnicas avançadas e seguras.",
      phone: "5549327889012",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20biomedical%20lip%20filler%20specialist%2C%20preenchimento%20labial%20expert%2C%20aesthetic%20medicine%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_juliana&orientation=squarish",
      tags: [
        { text: "Preenchimento Labial", color: "pink", icon: "ri-heart-line" },
        { text: "Harmonização Orofacial", color: "purple", icon: "ri-user-smile-line" },
        { text: "Resultados Naturais", color: "green", icon: "ri-leaf-line" },
        { text: "Técnicas Seguras", color: "blue", icon: "ri-shield-check-line" }
      ]
    },
    {
      name: "Dr. Pedro Oliveira",
      specialty: "Biomédico Estético",
      crm: "CRBM 67890",
      description: "Biomédico especializado em tratamentos faciais avançados e cuidados estéticos. Protocolos inovadores para beleza e saúde da pele.",
      phone: "5549327890123",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20biomedical%20facial%20treatments%20specialist%2C%20aesthetic%20medicine%20expert%2C%20beauty%20treatment%20professional%20in%20Urubici%20Santa%20Catarina%20Brazil&width=200&height=200&seq=bio_pedro&orientation=squarish",
      tags: [
        { text: "Tratamentos Faciais", color: "pink", icon: "ri-user-smile-line" },
        { text: "Cuidados Estéticos", color: "purple", icon: "ri-heart-pulse-line" },
        { text: "Protocolos Inovadores", color: "blue", icon: "ri-lightbulb-line" },
        { text: "Saúde da Pele", color: "green", icon: "ri-leaf-line" }
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

  const getTagColorClasses = (color: string) => {
    const colorMap = {
      pink: 'bg-pink-500/20 text-pink-200 border-pink-400/30',
      purple: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
      blue: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
      green: 'bg-green-500/20 text-green-200 border-green-400/30',
      orange: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
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
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg bg-pink-600/90 text-white">
                          Estética
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
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
              Biomedicina & Estética
              <i className="ri-heart-pulse-line text-pink-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Biomédicos e clínicas de estética avançada</p>
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
                  className="bg-white/20 hover:bg-white/30 hover:scale-105 active:scale-95 text-white font-medium px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px] text-sm whitespace-nowrap"
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Professionals List */}
        <div className="px-4 mb-6">
          <div className="mb-4">
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              <i className="ri-heart-pulse-line text-pink-400"></i>
              Profissionais de Biomedicina Estética
            </h3>
            <div className="h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
          </div>

          <div className="space-y-4">
            {professionals.map((professional, index) => (
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
                        <p className="text-pink-200 text-xs font-medium">{professional.specialty} - {professional.crm}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-xs leading-relaxed mb-3">{professional.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {professional.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getTagColorClasses(tag.color)}`}
                        >
                          <i className={`${tag.icon} text-xs`}></i>
                          <span>{tag.text}</span>
                        </div>
                      ))}
                    </div>

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
            ))}
          </div>
        </div>

        {/* Call to Action - Cadastre seu Serviço */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="mb-4">
              <i className="ri-add-circle-line text-pink-400 text-4xl mb-3"></i>
              <h3 className="text-white font-bold text-lg mb-2">Cadastre seu Serviço</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Você é profissional de biomedicina estética? Cadastre-se em nossa plataforma!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/5551986859236?text=Olá! Gostaria de cadastrar meu serviço de biomedicina estética no Portal Urubici"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-lg"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Cadastrar via WhatsApp</span>
              </a>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-lg"
              >
                <i className="ri-arrow-up-line text-lg"></i>
                <span>Voltar ao Topo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
