import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../../../components/base/BackgroundVideo';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import FeaturedAdsCarousel from './components/FeaturedAdsCarousel';
import PartnersCarousel from './components/PartnersCarousel';
import QuickShortcuts from './components/QuickShortcuts';
import EstablishmentGroupSection from './components/EstablishmentGroupSection';
import CallToAction from './components/CallToAction';
import { useEstablishments } from './hooks/useEstablishments';
import { groupEstablishments } from './utils/classification';

const FEATURED_ADS = [
  {
    title: "Táxi Urubici 24h",
    subtitle: "Atendimento rápido em toda a cidade e região",
    image: "https://readdy.ai/api/search-image?query=Yellow%20taxi%20cab%20on%20scenic%20mountain%20road%20Urubici%20Brazil&width=300&height=200&seq=taxi01&orientation=landscape",
    link: "#",
    isAd: true
  },
  {
    title: "Serra Transfer",
    subtitle: "Transporte executivo para aeroportos e pontos turísticos",
    image: "https://readdy.ai/api/search-image?query=Luxury%20black%20van%20transfer%20service%20driver%20opening%20door&width=300&height=200&seq=transfer01&orientation=landscape",
    link: "#",
    isAd: true
  }
];

const PARTNERS = [
  {
    name: "Urubici Park Hotel",
    description: "Hospedagem de qualidade no coração de Urubici",
    image: "https://readdy.ai/api/search-image?query=Luxury%20mountain%20hotel%20logo%20Urubici%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20hospitality%20brand%20identity%2C%20elegant%20hotel%20branding&width=100&height=100&seq=logo1&orientation=squarish"
  },
  {
    name: "São Joaquim Park Hotel",
    description: "Experiência única na serra catarinense",
    image: "https://readdy.ai/api/search-image?query=Elegant%20mountain%20resort%20hotel%20logo%20S%C3%A3o%20Joaquim%20Park%20Hotel%20Santa%20Catarina%20Brazil%2C%20luxury%20hospitality%20brand%20identity&width=100&height=100&seq=logo2&orientation=squarish"
  }
];

export default function TransportePassageirosPage() {
  const navigate = useNavigate();
  const { establishments, loading } = useEstablishments();

  const groupedEstablishments = groupEstablishments(establishments);
  const availableGroups = Object.keys(groupedEstablishments).sort((a, b) =>
    a.localeCompare(b, 'pt-BR')
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGroup = (groupId: string) => {
    const element = document.getElementById(`group-${groupId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  const goToServices = () => {
    navigate('/guia-servicos');
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />

      <div className="relative z-10 max-w-md mx-auto">
        <PageHeader onGoHome={goHome} onGoBack={goBack} />

        <FeaturedAdsCarousel ads={FEATURED_ADS} />

        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-taxi-line text-amber-500" />
              Transporte de Passageiros
              <i className="ri-roadster-line text-amber-500" />
            </h2>
            <p className="text-white/70 text-sm">
              Táxis, transfers, aluguel de veículos e passagens em Urubici
            </p>
          </div>
        </div>

        <div className="px-4 mb-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-white/70 text-sm">Carregando opções de transporte...</p>
            </div>
          ) : establishments.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center mb-4">
              <i className="ri-information-line text-amber-500 text-4xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">Nenhum transporte encontrado</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                No momento não há serviços de transporte cadastrados nesta categoria.
              </p>
            </div>
          ) : (
            <>
              <QuickShortcuts groups={availableGroups} onGroupClick={scrollToGroup} />

              <div className="space-y-8">
                {availableGroups.map((group) => (
                  <EstablishmentGroupSection
                    key={group}
                    groupName={group}
                    establishments={groupedEstablishments[group]}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CallToAction onNavigateToServices={goToServices} />

        <PartnersCarousel partners={PARTNERS} />

        <PageFooter />

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-amber-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
          </div>
        </button>
      </div>
      <style>
        {`
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
      </style>
    </div>
  );
}
