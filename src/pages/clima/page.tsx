import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../components/base/BackgroundVideo';

export default function Clima() {
  const navigate = useNavigate();
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('PT');

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

        {/* Page Title */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-sun-cloudy-line text-yellow-400"></i>
              Clima em Urubici
              <i className="ri-sun-cloudy-line text-yellow-400"></i>
            </h2>
            <p className="text-white/70 text-sm">Informações meteorológicas atualizadas da serra catarinense</p>
          </div>
        </div>

        {/* Current Weather */}
        <div className="px-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-white font-bold text-lg mb-2">Agora</h3>
              <div className="flex items-center justify-center gap-4 mb-4">
                <i className="ri-sun-cloudy-line text-yellow-300 text-4xl"></i>
                <div>
                  <div className="text-white text-4xl font-bold">18°C</div>
                  <div className="text-white/70 text-sm">Parcialmente nublado</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <i className="ri-drop-line text-blue-300 text-lg mb-1"></i>
                  <div className="text-white text-sm font-medium">Umidade</div>
                  <div className="text-white/80 text-xs">75%</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <i className="ri-windy-line text-green-300 text-lg mb-1"></i>
                  <div className="text-white text-sm font-medium">Vento</div>
                  <div className="text-white/80 text-xs">12 km/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="px-4 mb-6">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Previsão para 7 dias</h3>
          <div className="space-y-3">
            {[
              { day: 'Hoje', icon: 'ri-sun-cloudy-line', high: '18°', low: '8°', desc: 'Parcialmente nublado' },
              { day: 'Amanhã', icon: 'ri-cloudy-line', high: '16°', low: '6°', desc: 'Nublado' },
              { day: 'Quinta', icon: 'ri-rainy-line', high: '14°', low: '4°', desc: 'Chuva leve' },
              { day: 'Sexta', icon: 'ri-sun-line', high: '20°', low: '10°', desc: 'Ensolarado' },
              { day: 'Sábado', icon: 'ri-sun-cloudy-line', high: '19°', low: '9°', desc: 'Parcialmente nublado' },
              { day: 'Domingo', icon: 'ri-cloudy-line', high: '17°', low: '7°', desc: 'Nublado' },
              { day: 'Segunda', icon: 'ri-sun-line', high: '21°', low: '11°', desc: 'Ensolarado' }
            ].map((forecast, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <i className={`${forecast.icon} text-yellow-300 text-xl`}></i>
                    <div>
                      <div className="text-white font-medium text-sm">{forecast.day}</div>
                      <div className="text-white/70 text-xs">{forecast.desc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{forecast.high}</div>
                    <div className="text-white/60 text-sm">{forecast.low}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="px-4 mb-6">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Alertas Meteorológicos</h3>
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-orange-300/30 mb-3">
            <div className="flex items-start gap-3">
              <i className="ri-alert-line text-orange-300 text-xl mt-0.5"></i>
              <div>
                <div className="text-orange-200 font-medium text-sm mb-1">Alerta de Geada</div>
                <div className="text-white/80 text-xs leading-relaxed">
                  Possibilidade de geada nas madrugadas dos próximos dias. Temperaturas podem chegar a -2°C.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-300/30">
            <div className="flex items-start gap-3">
              <i className="ri-information-line text-blue-300 text-xl mt-0.5"></i>
              <div>
                <div className="text-blue-200 font-medium text-sm mb-1">Dica de Turismo</div>
                <div className="text-white/80 text-xs leading-relaxed">
                  Ideal para trilhas e atividades ao ar livre. Leve roupas adequadas para o frio da serra.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="px-4 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">Detalhes do Clima</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <i className="ri-eye-line text-blue-300 text-xl mb-2"></i>
              <div className="text-white text-sm font-medium mb-1">Visibilidade</div>
              <div className="text-white/80 text-xs">10 km</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <i className="ri-contrast-2-line text-purple-300 text-xl mb-2"></i>
              <div className="text-white text-sm font-medium mb-1">Pressão</div>
              <div className="text-white/80 text-xs">1013 hPa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <i className="ri-sun-line text-yellow-300 text-xl mb-2"></i>
              <div className="text-white text-sm font-medium mb-1">Nascer do Sol</div>
              <div className="text-white/80 text-xs">06:45</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <i className="ri-moon-line text-indigo-300 text-xl mb-2"></i>
              <div className="text-white text-sm font-medium mb-1">Pôr do Sol</div>
              <div className="text-white/80 text-xs">18:30</div>
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
                Informações meteorológicas atualizadas<br />
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
          className="fixed bottom-6 left-6 z-[9999] w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border-2 border-teal-400/30 hover:scale-110 group"
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
          onClick={goHome}
          className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border-2 border-blue-400/30 hover:scale-110 group"
          title="Ir para Home"
          aria-label="Ir para Home"
          style={{ zIndex: 9999 }}
        >
          <div className="relative">
            <i className="ri-home-line text-xl group-hover:transform group-hover:scale-110 transition-transform duration-200"></i>
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
        `}</style>
      </div>
    </div>
  );
}
