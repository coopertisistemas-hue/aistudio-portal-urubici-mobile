import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function Noticias() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  // Seção de anúncios da página Clima
  const featuredAds = [
    {
      title: "Urubici Park Hotel",
      subtitle: "Hospedagem & Turismo",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20modern%20architecture%2C%20elegant%20hotel%20building%20surrounded%20by%20beautiful%20mountain%20landscape%2C%20hospitality%20accommodation%20with%20scenic%20views&width=300&height=200&seq=hotel1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "São Joaquim Park Hotel",
      subtitle: "Conforto na Serra",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20in%20S%C3%A3o%20Joaquim%20Santa%20Catarina%20Brazil%2C%20luxury%20accommodation%20facility%20with%20panoramic%20mountain%20views%2C%20comfortable%20hospitality%20in%20serra%20catarinense&width=300&height=200&seq=hotel2&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Dany Lumertz",
      subtitle: "Social Media & Conteúdo",
      image:
        "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png",
      link: "#",
      isAd: true
    },
    {
      title: "Anuncie Aqui",
      subtitle: "Promova seu negócio no Portal Urubici",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20advertising%20banner%20with%20megaphone%20icon%2C%20business%20promotion%20concept%2C%20marketing%20and%20advertisement%20design%20with%20mountain%20background%2C%20professional%20advertising%20space&width=300&height=200&seq=advertise1&orientation=landscape",
      link: "#",
      isAd: false
    },
    {
      title: "Café do Vale",
      subtitle: "Cafés & Brunch",
      image:
        "https://readdy.ai/api/search-image?query=Cozy%20mountain%20coffee%20shop%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20rustic%20cafe%20interior%20with%20warm%20lighting%2C%20artisanal%20coffee%20and%20brunch%20setting%20in%20mountain%20valley%20atmosphere&width=300&height=200&seq=cafe1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Trilhas Pedra Furada",
      subtitle: "Passeios & Roteiros",
      image:
        "https://readdy.ai/api/search-image?query=Beautiful%20hiking%20trail%20to%20Pedra%20Furada%20rock%20formation%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20scenic%20mountain%20trekking%20path%20with%20natural%20stone%20arch%2C%20adventure%20tourism%20in%20serra%20catarinense&width=300&height=200&seq=trail1&orientation=landscape",
      link: "#",
      isAd: true
    },
    {
      title: "Vinícola Serra Azul",
      subtitle: "Enoturismo & Degustação",
      image:
        "https://readdy.ai/api/search-image?query=Mountain%20winery%20vineyard%20in%20Serra%20Azul%20Urubici%20Santa%20Catarina%20Brazil%2C%20wine%20tasting%20facility%20with%20grape%20vines%20and%20mountain%20backdrop%2C%20enotourism%20experience%20in%20high%20altitude%20vineyard&width=300&height=200&seq=winery1&orientation=landscape",
      link: "#",
      isAd: true
    }
  ];

  // Auto‑slide for featured ads
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredAds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovering, featuredAds.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => navigate('/');

  const goBack = () => {
    navigate(-1);
  };

  // 5 últimas notícias
  const noticias = [
    {
      title: "Nova trilha inaugurada no Morro da Igreja",
      summary: "Trilha ecológica de 3km oferece vista panorâmica da serra catarinense",
      date: "23 de Janeiro, 2025",
      category: "Turismo",
      image: "https://readdy.ai/api/search-image?query=New%20ecological%20trail%20at%20Morro%20da%20Igreja%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20hiking%20path%20with%20panoramic%20views%2C%20sustainable%20tourism%20infrastructure%20in%20serra%20catarinense&width=300&height=200&seq=trilha-nova1&orientation=landscape",
      readTime: "3 min"
    },
    {
      title: "Festival de Inverno confirma programação",
      summary: "Evento acontece de 15 a 17 de julho com shows nacionais e gastronomia local",
      date: "22 de Janeiro, 2025",
      category: "Eventos",
      image: "https://readdy.ai/api/search-image?query=Winter%20festival%20announcement%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20cultural%20event%20poster%20with%20mountain%20backdrop%2C%20music%20festival%20in%20serra%20catarinense&width=300&height=200&seq=festival-inverno1&orientation=landscape",
      readTime: "5 min"
    },
    {
      title: "Ocupação hoteleira bate recorde",
      summary: "Janeiro registra 95% de ocupação nas pousadas e hotéis da região",
      date: "21 de Janeiro, 2025",
      category: "Economia",
      image: "https://readdy.ai/api/search-image?query=Hotel%20occupancy%20record%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20hotels%20and%20inns%20with%20high%20tourism%20demand%2C%20hospitality%20success%20in%20serra%20catarinense&width=300&height=200&seq=ocupacao-hotel1&orientation=landscape",
      readTime: "4 min"
    },
    {
      title: "Novos restaurantes abrem na região central",
      summary: "Três estabelecimentos gastronômicos iniciam operação no centro histórico",
      date: "20 de Janeiro, 2025",
      category: "Gastronomia",
      image: "https://readdy.ai/api/search-image?query=New%20restaurants%20opening%20in%20historic%20center%20of%20Urubici%20Santa%20Catarina%20Brazil%2C%20mountain%20town%20gastronomy%20establishments%2C%20local%20cuisine%20in%20serra%20catarinense&width=300&height=200&seq=restaurantes-novos1&orientation=landscape",
      readTime: "2 min"
    },
    {
      title: "Projeto de sustentabilidade ambiental",
      summary: "Prefeitura lança programa de preservação das nascentes da região",
      date: "19 de Janeiro, 2025",
      category: "Meio Ambiente",
      image: "https://readdy.ai/api/search-image?query=Environmental%20sustainability%20project%20in%20Urubici%20Santa%20Catarina%20Brazil%2C%20water%20springs%20preservation%20program%2C%20ecological%20conservation%20in%20serra%20catarinense%20mountains&width=300&height=200&seq=sustentabilidade1&orientation=landscape",
      readTime: "6 min"
    }
  ];

  const categorias = ['Todas', 'Destaque', 'Turismo', 'Eventos', 'Economia', 'Gastronomia', 'Meio Ambiente'];

  // Filtrar notícias por categoria
  const noticiasFiltradas = selectedCategory === 'Todas' 
    ? noticias 
    : selectedCategory === 'Destaque'
    ? [noticias[0]] // Primeira notícia como destaque
    : noticias.filter(noticia => noticia.category === selectedCategory);

  return (
    <div className="min-h-screen relative">
      {/* Background Video */}
      <BackgroundVideo />

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

            {/* Navigation Icons */}
            <div className="flex items-center gap-2 absolute top-6 right-4">
              <button
                onClick={navigateToHome}
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

        {/* Featured Ads Carousel - Seção de anúncios da página Clima */}
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
                  <div
                    className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                      ad.isAd
                        ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105'
                        : 'bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-300/30 rounded-3xl hover:from-orange-500/30 hover:to-red-500/30 hover:scale-105'
                    }`}
                  >
                    <a
                      href={ad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`${ad.title} — ${ad.subtitle}`}
                    >
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <img
                          alt={ad.title}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          src={ad.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Badge */}
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium shadow-lg ${
                            ad.isAd ? 'bg-blue-600/90 text-white' : 'bg-orange-600/90 text-white'
                          }`}
                        >
                          {ad.isAd ? 'Patrocinado' : 'Oportunidade'}
                        </div>

                        {/* Special Icon for Advertise Card */}
                        {!ad.isAd && (
                          <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500/80 rounded-full flex items-center justify-center">
                            <i className="ri-megaphone-fill text-white text-lg"></i>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="font-bold text-white text-xl mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                          {ad.title}
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {ad.subtitle}
                        </p>

                        {/* CTA Button */}
                        <div
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 ${
                            ad.isAd
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                              : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                          }`}
                        >
                          <span>{ad.isAd ? 'Saiba Mais' : 'Anunciar Agora'}</span>
                          <i className={`${ad.isAd ? 'ri-arrow-right-line' : 'ri-megaphone-line'} text-sm`}></i>
                        </div>
                      </div>
                    </a>

                    {/* Glass Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
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
              <i className="ri-newspaper-line text-red-400"></i>
              Últimas Notícias
              <i className="ri-newspaper-line text-red-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Fique por dentro de tudo que acontece em Urubici</p>
          </div>
        </div>

        {/* Filter Categories - Incluindo "Destaque" */}
        <div className="px-4 mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setSelectedCategory(categoria)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  categoria === selectedCategory
                    ? 'bg-red-500/80 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* News List - Apenas 5 notícias */}
        <div className="px-4 mb-8">
          <div className="space-y-4">
            {noticiasFiltradas.map((noticia, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:bg-white/15 hover:scale-105 transition-all duration-300">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      alt={noticia.title}
                      className="w-full h-full object-cover"
                      src={noticia.image}
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full">
                        {noticia.category}
                      </span>
                      <span className="text-white/60 text-xs">{noticia.readTime}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm leading-tight mb-1">{noticia.title}</h4>
                    <p className="text-white/80 text-xs leading-relaxed mb-2 line-clamp-2">{noticia.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs">{noticia.date}</span>
                      <button className="text-blue-300 hover:text-blue-200 text-xs font-medium transition-colors">
                        Ler mais →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="px-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30 text-center">
            <i className="ri-mail-line text-blue-300 text-3xl mb-3"></i>
            <h3 className="text-white font-bold text-lg mb-2">Receba as Notícias</h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Cadastre-se para receber as últimas notícias de Urubici no seu e-mail
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 hover:scale-110 whitespace-nowrap">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-8 py-6">
          <div className="px-4 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
                Portal Urubici
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seu portal de notícias<br />
                da serra catarinense
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
              © 2025 Portal Urubici<br />
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                Powered by Readdy
              </a>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[9999] w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border-2 border-teal-400/50 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          style={{ zIndex: 9999 }}
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </button>

        {/* Home Button */}
        <button
          onClick={navigateToHome}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border-2 border-blue-400/50 hover:scale-110 group"
          title="Ir para a página inicial"
          aria-label="Ir para a página inicial"
          style={{ zIndex: 9999 }}
        >
          <div className="relative">
            <i className="ri-home-line text-xl group-hover:transform group-hover:scale-110 transition-transform duration-200"></i>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
          </div>
        </button>

        {/* Inline Styles */}
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
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
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
