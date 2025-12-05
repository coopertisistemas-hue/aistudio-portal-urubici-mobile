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
import { groupEstablishments, type EstablishmentGroup } from './utils/classification';

// Constantes movidas para melhor organização
const FEATURED_ADS = [
  {
    title: "Agropecuária Serra Verde",
    subtitle: "Rações, insumos e produtos veterinários",
    image: "https://readdy.ai/api/search-image?query=Modern%20agricultural%20store%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20animal%20feed%20bags%20fertilizers%20farming%20supplies%20organized%20shelves%20and%20professional%20service%20in%20mountain%20region%20clean%20interior&width=300&height=200&seq=agropecuaria1&orientation=landscape",
    link: "#",
    isAd: true
  },
  {
    title: "Clínica Veterinária Pet Care",
    subtitle: "Cuidado completo para seu animal de estimação",
    image: "https://readdy.ai/api/search-image?query=Modern%20veterinary%20clinic%20in%20Urubici%20Santa%20Catarina%20Brazil%20with%20examination%20room%20medical%20equipment%20pet%20care%20facilities%20professional%20veterinarian%20service%20clean%20organized%20interior%20mountain%20region&width=300&height=200&seq=veterinaria1&orientation=landscape",
    link: "#",
    isAd: true
  }
] as const;

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
] as const;

export default function AgropecuariaVeterinaria() {
  const navigate = useNavigate();
  const { establishments, loading } = useEstablishments();

  // Agrupamento e filtragem de estabelecimentos
  const groupedEstablishments = groupEstablishments(establishments);
  const availableGroups = (Object.keys(groupedEstablishments) as EstablishmentGroup[]).filter(
    group => groupedEstablishments[group].length > 0
  );

  // Handlers de navegação
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToGroup = (groupId: string) => {
    const element = document.getElementById(`group-${groupId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGoBack = () => navigate(-1);
  const handleGoHome = () => navigate('/');
  const handleGoToServices = () => navigate('/guia-servicos');

  // Renderização condicional do conteúdo
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-white/70 text-sm">Carregando estabelecimentos...</p>
        </div>
      );
    }

    if (establishments.length === 0) {
      return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg text-center mb-4">
          <i className="ri-information-line text-teal-400 text-4xl mb-3" />
          <h4 className="text-white font-bold text-lg mb-2">Ainda não há estabelecimentos cadastrados</h4>
          <p className="text-white/80 text-sm leading-relaxed">
            Estamos atualizando nossa base de dados. Em breve você encontrará as melhores agropecuárias e clínicas veterinárias de Urubici aqui!
          </p>
        </div>
      );
    }

    return (
      <>
        <QuickShortcuts groups={availableGroups} onGroupClick={handleScrollToGroup} />
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
    );
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />

      <div className="relative z-10 max-w-md mx-auto">
        <PageHeader onGoHome={handleGoHome} onGoBack={handleGoBack} />

        <FeaturedAdsCarousel ads={FEATURED_ADS} />

        {/* Cabeçalho da página */}
        <div className="px-4 mb-6">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <i className="ri-plant-line text-teal-400" />
              Agropecuárias e Clínicas Veterinárias
              <i className="ri-plant-line text-teal-400" />
            </h2>
            <p className="text-white/70 text-sm">Rações, insumos agrícolas e cuidados veterinários em Urubici</p>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="px-4 mb-6">
          {renderContent()}
        </div>

        <CallToAction onNavigateToServices={handleGoToServices} />

        <PartnersCarousel partners={PARTNERS} />

        <PageFooter />

        {/* Botão voltar ao topo */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-teal-400/30 hover:scale-110 group"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <div className="relative">
            <i className="ri-arrow-up-line text-xl group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
}
