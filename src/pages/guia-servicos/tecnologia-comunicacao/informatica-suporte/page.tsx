import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InformaticaSuportePage() {
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
      name: "Informática Urubici",
      description: "Manutenção de computadores, notebooks e instalação de redes",
      address: "Rua Adolfo Konder, 234 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-1567",
      whatsapp: "5549932781567"
    },
    {
      name: "Tech Serra Assistência Técnica",
      description: "Conserto de celulares, tablets e eletrônicos em geral",
      address: "Av. Nereu Ramos, 456 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-2890",
      whatsapp: "5549932782890"
    },
    {
      name: "Cyber Montanha",
      description: "Loja de informática, vendas de acessórios e suporte técnico",
      address: "Rua São Joaquim, 123 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-3456",
      whatsapp: "5549932783456"
    },
    {
      name: "Cell Tech Urubici",
      description: "Especializada em manutenção de smartphones e tablets",
      address: "Rua Hercílio Luz, 789 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-4567",
      whatsapp: "5549932784567"
    },
    {
      name: "Suporte TI Serra",
      description: "Suporte técnico para empresas, redes e servidores",
      address: "Rua das Flores, 345 - São Pedro",
      city: "Urubici – SC",
      phone: "(49) 3278-5678",
      whatsapp: "5549932785678"
    },
    {
      name: "Info Center Urubici",
      description: "Manutenção de PCs, formatação e recuperação de dados",
      address: "Av. Aristiliano Ramos, 567 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-6789",
      whatsapp: "5549932786789"
    },
    {
      name: "Eletrônica Digital",
      description: "Conserto de eletrônicos, TVs, som e equipamentos diversos",
      address: "Rua Getúlio Vargas, 890 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-7890",
      whatsapp: "5549932787890"
    },
    {
      name: "TechFix Assistência",
      description: "Assistência técnica autorizada, garantia e peças originais",
      address: "Rua Barão do Rio Branco, 234 - Centro",
      city: "Urubici – SC",
      phone: "(49) 3278-8901",
      whatsapp: "5549932788901"
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

      {/* Hero Section */}
      <section className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center max-w-md mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-400/30">
              <i className="ri-computer-line text-xl text-cyan-400"></i>
            </div>
            <h1 className="text-xl font-bold text-cyan-400">Informática e Suporte Técnico em Urubici</h1>
          </div>
          <p className="text-sm text-white/90 ml-[52px]">Assistência técnica, manutenção e vendas de equipamentos.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-md mx-auto px-4 py-3 text-xs">
        <div className="flex items-center gap-2 text-white/60">
          <button onClick={() => navigate('/')} className="hover:text-cyan-400 transition-colors">
            Home
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <button onClick={() => navigate('/guia-servicos')} className="hover:text-cyan-400 transition-colors">
            Guia de Serviços
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <button onClick={() => navigate('/guia-servicos/tecnologia-comunicacao')} className="hover:text-cyan-400 transition-colors">
            Tecnologia & Comunicação
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <span className="text-cyan-400 font-medium">Informática e Suporte Técnico</span>
        </div>
      </nav>

      {/* Establishments List */}
      <section className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <i className="ri-store-2-line text-cyan-400"></i>
          </div>
          <h2 className="text-lg font-semibold text-cyan-400">Estabelecimentos</h2>
        </div>

        <div className="space-y-3">
          {establishments.map((establishment) => (
            <div
              key={establishment.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center flex-shrink-0 border border-cyan-400/40">
                  <i className="ri-computer-line text-cyan-300 text-xl"></i>
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
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <i className="ri-whatsapp-line text-sm"></i>
                      WhatsApp
                    </a>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-cyan-400/30">
                      <i className="ri-map-pin-line text-sm text-cyan-400"></i>
                      Ver Localização
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Badge */}
        <div className="mt-6 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <i className="ri-information-line text-cyan-400 text-xl"></i>
            <h3 className="text-white font-bold text-base">Sobre esta Página</h3>
          </div>
          <p className="text-white/90 text-sm leading-relaxed text-center mb-4">
            Esta página reúne os principais serviços de informática e suporte técnico de Urubici, 
            facilitando sua busca por assistência técnica, manutenção de equipamentos e soluções tecnológicas 
            para moradores e empresas da região.
          </p>
          <p className="text-white/80 text-sm leading-relaxed text-center mb-4">
            Em breve, esta lista será atualizada automaticamente com informações completas, 
            horários de funcionamento e avaliações dos clientes.
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-xs">
            <i className="ri-time-line"></i>
            <span className="font-medium">Lista em atualização constante</span>
          </div>
        </div>
      </section>

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
  );
}
