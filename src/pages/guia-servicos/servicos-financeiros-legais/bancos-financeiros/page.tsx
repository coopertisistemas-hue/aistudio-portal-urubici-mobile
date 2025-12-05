import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import BackgroundVideo from '../../../../components/base/BackgroundVideo';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import FeaturedAdsCarousel from './components/FeaturedAdsCarousel';
import PartnersCarousel from './components/PartnersCarousel';
import QuickShortcuts from './components/QuickShortcuts';
import EstablishmentGroupSection from './components/EstablishmentGroupSection';
import CallToAction from './components/CallToAction';
import { useEstablishments } from './hooks/useEstablishments';
import { groupEstablishments, type EstablishmentGroup } from './utils/classification';

const FEATURED_ADS = [
  {
    title: "Banco do Brasil - Urubici",
    subtitle: "Agência completa com atendimento presencial e caixas eletrônicos 24h",
    image: "https://readdy.ai/api/search-image?query=Modern%20Banco%20do%20Brasil%20bank%20branch%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20professional%20service%2C%20ATM%20machines%20and%20complete%20banking%20facilities%20in%20mountain%20town%20setting&width=300&height=200&seq=bank1&orientation=landscape",
    link: "#",
    isAd: true
  },
  {
    title: "Sicoob Credivale",
    subtitle: "Cooperativa de crédito com atendimento personalizado",
    image: "https://readdy.ai/api/search-image?query=Modern%20Sicoob%20credit%20union%20branch%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20personalized%20service%2C%20financial%20consulting%20and%20cooperative%20banking%20in%20mountain%20region&width=300&height=200&seq=bank2&orientation=landscape",
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
  },
  {
    name: "Dany Lumertz",
    description: "Social Media & Conteúdo Digital — Estratégias e gestão",
    image: "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/bf97cc82fb073911458ac477bcdbe774.png"
  }
];

export default function BancosFinanceirosPage() {
  const navigate = useNavigate();
  const { establishments, loading } = useEstablishments();

  const groupedEstablishments = useMemo(() => groupEstablishments(establishments), [establishments]);
  
  const availableGroups = useMemo(
    () =>
      (Object.keys(groupedEstablishments) as EstablishmentGroup[])
        .filter(group => groupedEstablishments[group]?.length > 0)
        .sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })),
    [groupedEstablishments]
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
              <i className="ri-bank-line text-amber-400" />
              Bancos e Serviços Financeiros
              <i className="ri-bank-line text-amber-400" />
            </h2>
            <p className="text-white/70 text-sm">Agências bancárias, caixas eletrônicos e serviços financeiros em Urubici</p>
          </div>
        </div>

        <div className="px-4 mb-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-white/70 text-sm">Carregando estabelecimentos...</p>
            </div>
          ) : establishments.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center mb-4">
              <i className="ri-information-line text-amber-400 text-4xl mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">Ainda não há estabelecimentos cadastrados</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Estamos atualizando nossa base de dados. Em breve você encontrará os melhores bancos e serviços financeiros de Urubici aqui!
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

        <style>
          {`
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
            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        </style>
      </div>
    </div>
  );
}
