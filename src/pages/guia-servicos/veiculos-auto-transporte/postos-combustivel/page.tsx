import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostosCombustivelPage() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  const languages = [
    { code: 'PT', name: 'Português' },
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'DE', name: 'Deutsch' }
  ];

  const establishments = [
    {
      name: "Posto Ipiranga Urubici",
      description: "Combustível de qualidade, loja de conveniência e serviços básicos",
      address: "Rua Adolfo Konder, 890 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-1500",
      whatsapp: "5549932781500"
    },
    {
      name: "Posto Shell Serra Azul",
      description: "Abastecimento completo, troca de óleo e calibragem",
      address: "Av. Nereu Ramos, 1234 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-2100",
      whatsapp: "5549932782100"
    },
    {
      name: "Posto Petrobras Montanha",
      description: "Gasolina, diesel, etanol e GNV, loja de conveniência 24h",
      address: "Rodovia SC-370, km 12",
      city: "Urubici – SC",
      phone: "(49) 3278-3200",
      whatsapp: "5549932783200"
    },
    {
      name: "Auto Posto Serra Catarinense",
      description: "Combustível, lavagem rápida e borracharia",
      address: "Rua São Joaquim, 567 - São Pedro",
      city: "Urubici – SC",
      phone: "(49) 3278-4300",
      whatsapp: "5549932784300"
    },
    {
      name: "Posto BR Urubici",
      description: "Abastecimento, loja de conveniência e restaurante",
      address: "Rodovia SC-370, km 8",
      city: "Urubici – SC",
      phone: "(49) 3278-5400",
      whatsapp: "5549932785400"
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/434045526.hd.mp4?s=c27edd8e6a27e1aeb1a5c8b5c5f5c5f5c5f5c5f5&profile_id=175"
            type="video/mp4"
          />
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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

        {/* Hero Section */}
        <section className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center max-w-md mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 backdrop-blur-sm flex items-center justify-center border border-rose-400/30">
                <i className="ri-gas-station-line text-xl text-rose-400"></i>
              </div>
              <h1 className="text-xl font-bold text-rose-400">Postos de Combustível em Urubici</h1>
            </div>
            <p className="text-sm text-white/90 ml-[52px]">Abastecimento e serviços para seu veículo.</p>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="max-w-md mx-auto px-4 py-3 text-xs">
          <div className="flex items-center gap-2 text-white/60">
            <button onClick={() => navigate('/')} className="hover:text-rose-400 transition-colors">
              Home
            </button>
            <i className="ri-arrow-right-s-line text-xs"></i>
            <button onClick={() => navigate('/guia-servicos')} className="hover:text-rose-400 transition-colors">
              Guia de Serviços
            </button>
            <i className="ri-arrow-right-s-line text-xs"></i>
            <button onClick={() => navigate('/guia-servicos/veiculos-auto-transporte')} className="hover:text-rose-400 transition-colors">
              Veículos, Auto & Transporte
            </button>
            <i className="ri-arrow-right-s-line text-xs"></i>
            <span className="text-rose-400 font-medium">Postos de Combustível</span>
          </div>
        </nav>

        {/* Establishments List */}
        <section className="max-w-md mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
              <i className="ri-store-2-line text-rose-400"></i>
            </div>
            <h2 className="text-lg font-semibold text-rose-400">Estabelecimentos</h2>
          </div>

          <div className="space-y-3">
            {establishments.map((establishment) => (
              <div
                key={establishment.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center flex-shrink-0 border border-cyan-400/40">
                    <i className="ri-gas-station-line text-cyan-300 text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-base mb-1 leading-tight">
                      {establishment.name}
                    </h4>
                    <p className="text-white/80 text-sm mb-3 leading-relaxed">
                      {establishment.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-white/70 text-xs">
                        <i className="ri-map-pin-line text-cyan-400 mt-0.5 flex-shrink-0"></i>
                        <span>{establishment.address}<br />{establishment.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-xs">
                        <i className="ri-phone-line text-cyan-400 flex-shrink-0"></i>
                        <span>{establishment.phone}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <a
                        href={`https://wa.me/55${establishment.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-rose-500 hover:bg-rose-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <i className="ri-whatsapp-line text-sm"></i>
                        WhatsApp
                      </a>
                      <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-rose-400/30">
                        <i className="ri-map-pin-line text-sm text-rose-400"></i>
                        Ver Localização
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Badge */}
          <div className="mt-6 bg-rose-500/10 backdrop-blur-sm border border-rose-400/30 rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs">
              <i className="ri-time-line"></i>
              <span className="font-medium">Lista em atualização constante</span>
            </div>
          </div>
        </section>

        {/* Complementary Text */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <i className="ri-information-line text-cyan-400 text-xl"></i>
              <h3 className="text-white font-bold text-base">Sobre esta Página</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed text-center mb-4">
              Esta página reúne os principais postos de combustível e pontos de abastecimento de Urubici, 
              facilitando sua busca por serviços automotivos básicos.
            </p>
            <p className="text-white/80 text-sm leading-relaxed text-center mb-4">
              Em breve, esta lista será atualizada automaticamente com informações completas, 
              horários de funcionamento e serviços disponíveis em cada estabelecimento.
            </p>
            <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs">
              <i className="ri-time-line"></i>
              <span className="font-medium">Lista em atualização constante</span>
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto whitespace-nowrap">
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 rounded-lg text-white text-xs font-medium transition-all duration-200 hover:scale-105 mt-auto whitespace-nowrap">
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
