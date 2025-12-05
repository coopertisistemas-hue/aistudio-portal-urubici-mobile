import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ReparosDomiciliaresPage() {
  const [currentPartner, setCurrentPartner] = useState(0);
  const navigate = useNavigate();

  const establishments = [
    {
      id: 1,
      name: 'Eletricista João Silva',
      description: 'Instalações elétricas residenciais e comerciais, manutenção preventiva e corretiva',
      area: 'Atende Urubici e região',
      phone: '(49) 99876-5432',
      address: 'Rua das Flores, 123',
      neighborhood: 'Centro',
    },
    {
      id: 2,
      name: 'Encanador 24 Horas',
      description: 'Serviços hidráulicos, desentupimento, instalação de aquecedores e reparos emergenciais',
      area: 'Atende Urubici e região',
      phone: '(49) 99765-4321',
      address: 'Avenida Serra Azul, 456',
      neighborhood: 'São Pedro',
    },
    {
      id: 3,
      name: 'Reparos Gerais Montanha',
      description: 'Pequenos reparos, instalação de móveis, consertos diversos e manutenção predial',
      area: 'Atende Urubici e região',
      phone: '(49) 99654-3210',
      address: 'Rua do Comércio, 789',
      neighborhood: 'Centro',
    },
    {
      id: 4,
      name: 'Elétrica e Hidráulica Serra',
      description: 'Serviços completos de elétrica e hidráulica para residências e comércios',
      area: 'Atende Urubici e região',
      phone: '(49) 99543-2109',
      address: 'Rua das Araucárias, 321',
      neighborhood: 'Vila Nova',
    },
    {
      id: 5,
      name: 'Eletricista Pedro Oliveira',
      description: 'Especializado em instalações elétricas, automação residencial e energia solar',
      area: 'Atende Urubici e região',
      phone: '(49) 99432-1098',
      address: 'Avenida Principal, 654',
      neighborhood: 'Centro',
    },
    {
      id: 6,
      name: 'Hidráulica Urubici',
      description: 'Instalação e manutenção de sistemas hidráulicos, aquecimento e tratamento de água',
      area: 'Atende Urubici e região',
      phone: '(49) 99321-0987',
      address: 'Rua dos Pinheiros, 987',
      neighborhood: 'São José',
    },
    {
      id: 7,
      name: 'Manutenção Residencial Express',
      description: 'Reparos rápidos, pintura, gesso, elétrica básica e pequenas reformas',
      area: 'Atende Urubici e região',
      phone: '(49) 99210-9876',
      address: 'Rua Santa Catarina, 147',
      neighborhood: 'Centro',
    },
    {
      id: 8,
      name: 'Eletricista e Encanador Carlos',
      description: 'Atendimento emergencial 24h, elétrica, hidráulica e reparos em geral',
      area: 'Atende Urubici e região',
      phone: '(49) 99109-8765',
      address: 'Avenida das Montanhas, 258',
      neighborhood: 'Vila Alta',
    },
  ];

  const partners = [
    {
      id: 1,
      name: 'Parceiro 1',
      logo: 'https://readdy.ai/api/search-image?query=modern%20professional%20business%20logo%20design%20with%20clean%20minimalist%20style%20on%20white%20background%20corporate%20branding%20identity&width=200&height=100&seq=partner1&orientation=landscape',
    },
    {
      id: 2,
      name: 'Parceiro 2',
      logo: 'https://readdy.ai/api/search-image?query=elegant%20business%20company%20logo%20design%20with%20sophisticated%20minimalist%20aesthetic%20on%20white%20background%20professional%20branding&width=200&height=100&seq=partner2&orientation=landscape',
    },
    {
      id: 3,
      name: 'Parceiro 3',
      logo: 'https://readdy.ai/api/search-image?query=contemporary%20corporate%20logo%20design%20with%20sleek%20modern%20style%20on%20white%20background%20business%20identity%20branding&width=200&height=100&seq=partner3&orientation=landscape',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const handleWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${cleanPhone}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://readdy.ai/api/search-image?query=beautiful%20mountain%20landscape%20with%20green%20valleys%20and%20blue%20sky%20aerial%20view%20nature%20scenery%20peaceful%20countryside%20rolling%20hills&width=1920&height=1080&seq=reparosbg&orientation=landscape"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <i className="ri-map-pin-line text-2xl text-cyan-600"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white whitespace-nowrap">Urubici Connect</h1>
                <p className="text-xs text-cyan-100 whitespace-nowrap">Guia de Serviços</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-200 transition whitespace-nowrap">
                Início
              </Link>
              <Link to="/guia-servicos" className="text-white hover:text-cyan-200 transition whitespace-nowrap">
                Guia de Serviços
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="relative z-20 h-full flex flex-col justify-center max-w-md mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 backdrop-blur-sm flex items-center justify-center border border-orange-400/30">
              <i className="ri-hammer-line text-xl text-orange-400"></i>
            </div>
            <h1 className="text-xl font-bold text-orange-400">Reparos Domiciliares em Urubici</h1>
          </div>
          <p className="text-sm text-white/90 ml-[52px]">Eletricistas, encanadores, pintores e serviços de manutenção.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-md mx-auto px-4 py-3 text-xs">
        <div className="flex items-center gap-2 text-white/60">
          <button onClick={() => navigate('/')} className="hover:text-orange-400 transition-colors">
            Home
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <button onClick={() => navigate('/guia-servicos')} className="hover:text-orange-400 transition-colors">
            Guia de Serviços
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <button onClick={() => navigate('/guia-servicos/servicos-profissionais-tecnicos')} className="hover:text-orange-400 transition-colors">
            Serviços Profissionais & Técnicos
          </button>
          <i className="ri-arrow-right-s-line text-xs"></i>
          <span className="text-orange-400 font-medium">Reparos Domiciliares</span>
        </div>
      </nav>

      {/* Establishments List */}
      <section className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <i className="ri-store-2-line text-orange-400"></i>
          </div>
          <h2 className="text-lg font-semibold text-orange-400">Estabelecimentos</h2>
        </div>

        <div className="space-y-3">
          {establishments.map((establishment) => (
            <div
              key={establishment.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <i className="ri-tools-line text-2xl text-white"></i>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {establishment.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {establishment.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-2 text-sm">
                  <i className="ri-map-pin-line text-cyan-600 mt-0.5 flex-shrink-0"></i>
                  <span className="text-gray-700">
                    {establishment.address}, {establishment.neighborhood} - Urubici – SC
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <i className="ri-map-2-line text-cyan-600 flex-shrink-0"></i>
                  <span className="text-gray-700">{establishment.area}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <i className="ri-phone-line text-cyan-600 flex-shrink-0"></i>
                  <span className="text-gray-700">{establishment.phone}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <a
                  href={`https://wa.me/55${establishment.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <i className="ri-whatsapp-line text-sm"></i>
                  WhatsApp
                </a>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 border border-orange-400/30">
                  <i className="ri-map-pin-line text-sm text-orange-400"></i>
                  Ver Localização
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Badge */}
        <div className="mt-6 bg-orange-500/10 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Sobre esta página
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Esta página reúne profissionais qualificados para manutenção e reparos do dia a dia em Urubici. 
                Encontre eletricistas, encanadores e prestadores de serviços gerais para atender suas necessidades 
                residenciais e comerciais com qualidade e agilidade.
              </p>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-white rounded-lg text-sm text-cyan-700 font-semibold shadow-sm whitespace-nowrap">
                  <i className="ri-refresh-line mr-2"></i>
                  Lista em atualização constante
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-30 py-12 md:py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Nossos Parceiros
            </h2>
            <div className="relative h-32 flex items-center justify-center">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                    index === currentPartner ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-xs object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Urubici Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                Seu guia completo de serviços, estabelecimentos e atrações em Urubici e região.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-cyan-400 transition whitespace-nowrap">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/guia-servicos" className="text-gray-300 hover:text-cyan-400 transition whitespace-nowrap">
                    Guia de Serviços
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Urubici Connect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}