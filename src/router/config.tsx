import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import MaisInformacoes from "../pages/mais-informacoes/page";
import OndeIr from "../pages/onde-ir/page";
import OndeFicar from "../pages/onde-ficar/page";
import OndeComer from "../pages/onde-comer/page";
import OQueFazer from "../pages/o-que-fazer/page";
import GuiaMedico from '../pages/guia-medico/page';
import GuiaServicos from '../pages/guia-servicos/page';
import ComercioGeralVarejo from '../pages/guia-servicos/comercio-geral-varejo/page';
import SupermercadosMercearias from '../pages/guia-servicos/comercio-geral-varejo/supermercados-mercearias/page';
import LojasRoupasCalcados from '../pages/guia-servicos/comercio-geral-varejo/lojas-roupas-calcados/page';
import ArtesanatoSouvenirs from '../pages/guia-servicos/comercio-geral-varejo/artesanato-souvenirs/page';
import MaterialCasa from '../pages/guia-servicos/comercio-geral-varejo/material-casa/page';
import ServicosFinanceirosLegais from '../pages/guia-servicos/servicos-financeiros-legais/page';
import BancosFinanceiros from '../pages/guia-servicos/servicos-financeiros-legais/bancos-financeiros/page';
import ContabilidadeLegalPage from '../pages/guia-servicos/servicos-financeiros-legais/contabilidade-legal/page';
import ImobiliariasCorretoresPage from '../pages/guia-servicos/servicos-financeiros-legais/imobiliarias-corretores/page';
import VeiculosAutoTransporte from '../pages/guia-servicos/veiculos-auto-transporte/page';
import PostosCombustivel from '../pages/guia-servicos/veiculos-auto-transporte/postos-combustivel/page';
import OficinasMecanicas from '../pages/guia-servicos/veiculos-auto-transporte/oficinas-mecanicas/page';
import TransportePassageiros from '../pages/guia-servicos/veiculos-auto-transporte/transporte-passageiros/page';
import ServicosProfissionaisTecnicos from '../pages/guia-servicos/servicos-profissionais-tecnicos/page';
import BelezaEstetica from '../pages/guia-servicos/servicos-profissionais-tecnicos/beleza-estetica/page';
import ReparosDomiciliares from '../pages/guia-servicos/servicos-profissionais-tecnicos/reparos-domiciliares/page';
import TecnologiaComunicacao from '../pages/guia-servicos/tecnologia-comunicacao/page';
import InformaticaSuporte from '../pages/guia-servicos/tecnologia-comunicacao/informatica-suporte/page';
import InternetTelecom from '../pages/guia-servicos/tecnologia-comunicacao/internet-telecom/page';
import ServicosDomesticosLimpeza from '../pages/guia-servicos/servicos-domesticos-limpeza/page';
import LavanderiaCostura from '../pages/guia-servicos/servicos-domesticos-limpeza/lavanderia-costura/page';
import LimpezaJardinagem from '../pages/guia-servicos/servicos-domesticos-limpeza/limpeza-jardinagem/page';
import UtilidadePublicaGoverno from '../pages/guia-servicos/utilidade-publica-governo/page';
import CorreiosCartorios from '../pages/guia-servicos/utilidade-publica-governo/correios-cartorios/page';
import ReparticoesPublicas from '../pages/guia-servicos/utilidade-publica-governo/reparticoes-publicas/page';
import ServicosAgropecuariosRural from '../pages/guia-servicos/servicos-agropecuarios-rural/page';
import AgropecuariaVeterinaria from '../pages/guia-servicos/servicos-agropecuarios-rural/agropecuaria-veterinaria/page';
import ImplementosMaquinas from '../pages/guia-servicos/servicos-agropecuarios-rural/implementos-maquinas/page';
import EducacaoCursos from '../pages/guia-servicos/educacao-cursos/page';
import CursosProfissionalizantes from '../pages/guia-servicos/educacao-cursos/cursos-profissionalizantes/page';
import Autoescolas from '../pages/guia-servicos/educacao-cursos/autoescolas/page';
import EventosLazer from '../pages/guia-servicos/eventos-lazer/page';
import FestasBuffets from '../pages/guia-servicos/eventos-lazer/festas-buffets/page';
import OutrosServicosEssenciais from '../pages/guia-servicos/outros-servicos-essenciais/page';
import OticasJoalherias from '../pages/guia-servicos/outros-servicos-essenciais/oticas-joalherias/page';
import ChaveirosCarimbos from '../pages/guia-servicos/outros-servicos-essenciais/chaveiros-carimbos/page';
import EmergenciasServicosPublicos from '../pages/guia-medico/emergencias-servicos-publicos/page';
import EspecialidadesDiagnosticos from '../pages/guia-medico/especialidades-diagnosticos/page';
import MedicosEspecialistas from '../pages/guia-medico/medicos-especialistas/page';
import PsicologiaTerapias from '../pages/guia-medico/psicologia-terapias/page';
import BiomedicinaEstetica from '../pages/guia-medico/biomedicina-estetica/page';
import Odontologia from '../pages/guia-medico/odontologia/page';
import FisioterapiaReabilitacao from '../pages/guia-medico/fisioterapia-reabilitacao/page';
import ClinicasCentrosDiagnostico from '../pages/guia-medico/clinicas-centros-diagnostico/page';
import AtendimentoOnline from '../pages/guia-medico/atendimento-online/page';
import FarmaciasDrogarias from '../pages/guia-medico/farmacias-drogarias/page';
import PlanosSaudeConvenios from '../pages/guia-medico/planos-saude-convenios/page';
import BemEstarEstetica from '../pages/guia-medico/bem-estar-estetica/page';
import AcademiasFitness from '../pages/guia-medico/academias-fitness/page';
import GraficasComunicacao from '../pages/guia-servicos/servicos-profissionais-tecnicos/graficas-comunicacao/page';
import ImportPage from '../admin/pages/import/page';

// Importar páginas dos tipos de hospedagem
import Boutique from '../pages/onde-ficar/boutique/page';
import Cabanas from '../pages/onde-ficar/cabanas/page';
import CampingGlamping from '../pages/onde-ficar/camping-glamping/page';
import CasasTemporada from '../pages/onde-ficar/casas-temporada/page';
import Chales from '../pages/onde-ficar/chales/page';
import EcoPousadasEcoVillages from '../pages/onde-ficar/eco-pousadas-eco-villages/page';
import HospedagemRuralFazendas from '../pages/onde-ficar/hospedagem-rural-fazendas/page';
import Hostels from '../pages/onde-ficar/hostels/page';
import Hoteis from '../pages/onde-ficar/hoteis/page';
import Lodges from '../pages/onde-ficar/lodges/page';
import Lofts from '../pages/onde-ficar/lofts/page';
import Pousadas from '../pages/onde-ficar/pousadas/page';

// Importar páginas dos tipos de gastronomia
import RestaurantesPage from '../pages/onde-comer/restaurantes/page';
import BistrosPage from '../pages/onde-comer/bistros/page';
import PizzariasPage from '../pages/onde-comer/pizzarias/page';
import HamburgueriasPage from '../pages/onde-comer/hamburguerias/page';
import CafeteriasDoceriasPage from '../pages/onde-comer/cafeterias-docerias/page';
import CafeColonialPage from '../pages/onde-comer/cafe-colonial/page';
import CozinhaItalianaPage from '../pages/onde-comer/cozinha-italiana/page';
import ChurrascariasSteakhousePage from '../pages/onde-comer/churrascarias-steakhouse/page';
import PeixesTrutariasPage from '../pages/onde-comer/peixes-trutarias/page';
import CozinhaJaponesaPage from '../pages/onde-comer/cozinha-japonesa/page';
import CozinhaInternacionalPage from '../pages/onde-comer/cozinha-internacional/page';
import GastrobaresBaresPage from '../pages/onde-comer/gastrobares-bares/page';
import VinicolasBistrosVinicolaPage from '../pages/onde-comer/vinicolas-bistros-vinicola/page';
import FondueSequenciasPage from '../pages/onde-comer/fondue-sequencias/page';
import ComplexosGastronomicosPage from '../pages/onde-comer/complexos-gastronomicos/page';
import ComplexosGastronomicosPracasAlimentacaoPage from '../pages/onde-comer/complexos-gastronomicos-pracas-alimentacao/page';
import LanchesDeliveryPage from '../pages/onde-comer/lanches-delivery/page';
import PadariasConfeitariasPage from '../pages/onde-comer/padarias-confeitarias/page';
import ChocolateriasGelateriasPage from '../pages/onde-comer/chocolaterias-gelaterias/page';

// Importar páginas dos atrativos turísticos
import MirantesMontanhasPage from '../pages/onde-ir/mirantes-montanhas/page';
import CanionsEstradasCenicasPage from '../pages/onde-ir/canions-estradas-cenicas/page';
import CachoeirasPage from '../pages/onde-ir/cachoeiras/page';
import GrutasCavernasPage from '../pages/onde-ir/grutas-cavernas/page';
import PatrimonioCulturaPage from '../pages/onde-ir/patrimonio-cultura/page';
import ParquesAreasProtegidasPage from '../pages/onde-ir/parques-areas-protegidas/page';

// Importar páginas das atividades e experiências
import AventuraParques from '../pages/o-que-fazer/aventura-parques/page';
import BemEstarNatureza from '../pages/o-que-fazer/bem-estar-natureza/page';
import CachoeirasRio from '../pages/o-que-fazer/cachoeiras-banhos-rio/page';

// Importar novas páginas
import Clima from '../pages/clima/page';
import Eventos from '../pages/eventos/page';
import Localizacao from '../pages/localizacao/page';
import Noticias from '../pages/noticias/page';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mais-informacoes",
    element: <MaisInformacoes />,
  },

  // Onde Ir - Atrativos Turísticos
  {
    path: '/onde-ir',
    element: <OndeIr />
  },
  {
    path: '/onde-ir/mirantes-montanhas',
    element: <MirantesMontanhasPage />
  },
  {
    path: '/onde-ir/canions-estradas-cenicas',
    element: <CanionsEstradasCenicasPage />
  },
  {
    path: '/onde-ir/cachoeiras',
    element: <CachoeirasPage />
  },
  {
    path: '/onde-ir/grutas-cavernas',
    element: <GrutasCavernasPage />
  },
  {
    path: '/onde-ir/patrimonio-cultura',
    element: <PatrimonioCulturaPage />
  },
  {
    path: '/onde-ir/parques-areas-protegidas',
    element: <ParquesAreasProtegidasPage />
  },

  {
    path: "/onde-ficar",
    element: <OndeFicar />,
  },
  {
    path: "/onde-comer",
    element: <OndeComer />,
  },
  {
    path: "/o-que-fazer",
    element: <OQueFazer />,
  },

  // O que fazer - Atividades & Experiências
  {
    path: '/o-que-fazer/aventura-parques',
    element: <AventuraParques />
  },
  {
    path: '/o-que-fazer/bem-estar-natureza',
    element: <BemEstarNatureza />
  },
  {
    path: '/o-que-fazer/cachoeiras-banhos-rio',
    element: <CachoeirasRio />
  },

  {
    path: '/guia-medico',
    element: <GuiaMedico />
  },
  {
    path: '/guia-servicos',
    element: <GuiaServicos />
  },
  {
    path: '/guia-servicos/comercio-geral-varejo',
    element: <ComercioGeralVarejo />
  },
  {
    path: '/guia-servicos/comercio-geral-varejo/supermercados-mercearias',
    element: <SupermercadosMercearias />
  },
  {
    path: '/guia-servicos/comercio-geral-varejo/lojas-roupas-calcados',
    element: <LojasRoupasCalcados />
  },
  {
    path: '/guia-servicos/comercio-geral-varejo/artesanato-souvenirs',
    element: <ArtesanatoSouvenirs />
  },
  {
    path: '/guia-servicos/comercio-geral-varejo/material-casa',
    element: <MaterialCasa />
  },
  {
    path: '/guia-servicos/servicos-financeiros-legais',
    element: <ServicosFinanceirosLegais />
  },
  {
    path: '/guia-servicos/servicos-financeiros-legais/bancos-financeiros',
    element: <BancosFinanceiros />
  },
  {
    path: '/guia-servicos/servicos-financeiros-legais/contabilidade-legal',
    element: <ContabilidadeLegalPage />
  },
  {
    path: '/guia-servicos/servicos-financeiros-legais/imobiliarias-corretores',
    element: <ImobiliariasCorretoresPage />
  },
  {
    path: '/guia-servicos/veiculos-auto-transporte',
    element: <VeiculosAutoTransporte />
  },
  {
    path: '/guia-servicos/veiculos-auto-transporte/postos-combustivel',
    element: <PostosCombustivel />
  },
  {
    path: '/guia-servicos/veiculos-auto-transporte/oficinas-mecanicas',
    element: <OficinasMecanicas />
  },
  {
    path: '/guia-servicos/veiculos-auto-transporte/transporte-passageiros',
    element: <TransportePassageiros />
  },
  {
    path: '/guia-servicos/servicos-profissionais-tecnicos',
    element: <ServicosProfissionaisTecnicos />
  },
  {
    path: '/guia-servicos/servicos-profissionais-tecnicos/beleza-estetica',
    element: <BelezaEstetica />
  },
  {
    path: '/guia-servicos/servicos-profissionais-tecnicos/reparos-domiciliares',
    element: <ReparosDomiciliares />
  },
  {
    path: '/guia-servicos/servicos-profissionais-tecnicos/graficas-comunicacao',
    element: <GraficasComunicacao />
  },
  {
    path: '/guia-servicos/tecnologia-comunicacao',
    element: <TecnologiaComunicacao />
  },
  {
    path: '/guia-servicos/tecnologia-comunicacao/informatica-suporte',
    element: <InformaticaSuporte />
  },
  {
    path: '/guia-servicos/tecnologia-comunicacao/internet-telecom',
    element: <InternetTelecom />
  },
  {
    path: '/guia-servicos/servicos-domesticos-limpeza',
    element: <ServicosDomesticosLimpeza />
  },
  {
    path: '/guia-servicos/servicos-domesticos-limpeza/lavanderia-costura',
    element: <LavanderiaCostura />
  },
  {
    path: '/guia-servicos/servicos-domesticos-limpeza/limpeza-jardinagem',
    element: <LimpezaJardinagem />
  },
  {
    path: '/guia-servicos/utilidade-publica-governo',
    element: <UtilidadePublicaGoverno />
  },
  {
    path: '/guia-servicos/utilidade-publica-governo/correios-cartorios',
    element: <CorreiosCartorios />
  },
  {
    path: '/guia-servicos/utilidade-publica-governo/reparticoes-publicas',
    element: <ReparticoesPublicas />
  },
  {
    path: '/guia-servicos/servicos-agropecuarios-rural',
    element: <ServicosAgropecuariosRural />
  },
  {
    path: '/guia-servicos/servicos-agropecuarios-rural/agropecuaria-veterinaria',
    element: <AgropecuariaVeterinaria />
  },
  {
    path: '/guia-servicos/servicos-agropecuarios-rural/implementos-maquinas',
    element: <ImplementosMaquinas />
  },
  {
    path: '/guia-servicos/educacao-cursos',
    element: <EducacaoCursos />
  },
  {
    path: '/guia-servicos/educacao-cursos/cursos-profissionalizantes',
    element: <CursosProfissionalizantes />
  },
  {
    path: '/guia-servicos/educacao-cursos/autoescolas',
    element: <Autoescolas />
  },
  {
    path: '/guia-servicos/eventos-lazer',
    element: <EventosLazer />
  },
  {
    path: '/guia-servicos/eventos-lazer/festas-buffets',
    element: <FestasBuffets />
  },
  {
    path: '/guia-servicos/outros-servicos-essenciais',
    element: <OutrosServicosEssenciais />
  },
  {
    path: '/guia-servicos/outros-servicos-essenciais/oticas-joalherias',
    element: <OticasJoalherias />
  },
  {
    path: '/guia-servicos/outros-servicos-essenciais/chaveiros-carimbos',
    element: <ChaveirosCarimbos />
  },
  {
    path: '/guia-medico/emergencias-servicos-publicos',
    element: <EmergenciasServicosPublicos />
  },
  {
    path: '/guia-medico/especialidades-diagnosticos',
    element: <EspecialidadesDiagnosticos />
  },
  {
    path: '/guia-medico/medicos-especialistas',
    element: <MedicosEspecialistas />
  },
  {
    path: '/guia-medico/psicologia-terapias',
    element: <PsicologiaTerapias />
  },
  {
    path: '/guia-medico/biomedicina-estetica',
    element: <BiomedicinaEstetica />
  },
  {
    path: '/guia-medico/odontologia',
    element: <Odontologia />
  },
  {
    path: '/guia-medico/fisioterapia-reabilitacao',
    element: <FisioterapiaReabilitacao />
  },
  {
    path: '/guia-medico/clinicas-centros-diagnostico',
    element: <ClinicasCentrosDiagnostico />
  },
  {
    path: '/guia-medico/atendimento-online',
    element: <AtendimentoOnline />
  },
  {
    path: '/guia-medico/farmacias-drogarias',
    element: <FarmaciasDrogarias />
  },
  {
    path: '/guia-medico/planos-saude-convenios',
    element: <PlanosSaudeConvenios />
  },
  {
    path: '/guia-medico/bem-estar-estetica',
    element: <BemEstarEstetica />
  },
  {
    path: '/guia-medico/academias-fitness',
    element: <AcademiasFitness />
  },
  // Rotas dos tipos de hospedagem
  {
    path: '/onde-ficar/boutique',
    element: <Boutique />
  },
  {
    path: '/onde-ficar/cabanas',
    element: <Cabanas />
  },
  {
    path: '/onde-ficar/camping-glamping',
    element: <CampingGlamping />
  },
  {
    path: '/onde-ficar/casas-temporada',
    element: <CasasTemporada />
  },
  {
    path: '/onde-ficar/chales',
    element: <Chales />
  },
  {
    path: '/onde-ficar/eco-pousadas-eco-villages',
    element: <EcoPousadasEcoVillages />
  },
  {
    path: '/onde-ficar/hospedagem-rural-fazendas',
    element: <HospedagemRuralFazendas />
  },
  {
    path: '/onde-ficar/hostels',
    element: <Hostels />
  },
  {
    path: '/onde-ficar/hoteis',
    element: <Hoteis />
  },
  {
    path: '/onde-ficar/lodges',
    element: <Lodges />
  },
  {
    path: '/onde-ficar/lofts',
    element: <Lofts />
  },
  {
    path: '/onde-ficar/pousadas',
    element: <Pousadas />
  },
  // Rotas dos tipos de gastronomia
  {
    path: '/onde-comer/restaurantes',
    element: <RestaurantesPage />
  },
  {
    path: '/onde-comer/bistros',
    element: <BistrosPage />
  },
  {
    path: '/onde-comer/pizzarias',
    element: <PizzariasPage />
  },
  {
    path: '/onde-comer/hamburguerias',
    element: <HamburgueriasPage />
  },
  {
    path: '/onde-comer/cafeterias-docerias',
    element: <CafeteriasDoceriasPage />
  },
  {
    path: '/onde-comer/cafe-colonial',
    element: <CafeColonialPage />
  },
  {
    path: '/onde-comer/cozinha-italiana',
    element: <CozinhaItalianaPage />
  },
  {
    path: '/onde-comer/cozinha-japonesa',
    element: <CozinhaJaponesaPage />
  },
  {
    path: '/onde-comer/cozinha-internacional',
    element: <CozinhaInternacionalPage />
  },
  {
    path: '/onde-comer/churrascarias-steakhouse',
    element: <ChurrascariasSteakhousePage />
  },
  {
    path: '/onde-comer/peixes-trutarias',
    element: <PeixesTrutariasPage />
  },
  {
    path: '/onde-comer/gastrobares-bares',
    element: <GastrobaresBaresPage />
  },
  {
    path: '/onde-comer/vinicolas-bistros-vinicola',
    element: <VinicolasBistrosVinicolaPage />
  },
  {
    path: '/onde-comer/fondue-sequencias',
    element: <FondueSequenciasPage />
  },
  {
    path: '/onde-comer/complexos-gastronomicos',
    element: <ComplexosGastronomicosPage />
  },
  {
    path: '/onde-comer/complexos-gastronomicos-pracas-alimentacao',
    element: <ComplexosGastronomicosPracasAlimentacaoPage />
  },
  {
    path: '/onde-comer/lanches-delivery',
    element: <LanchesDeliveryPage />
  },
  {
    path: '/onde-comer/padarias-confeitarias',
    element: <PadariasConfeitariasPage />
  },
  {
    path: '/onde-comer/chocolaterias-gelaterias',
    element: <ChocolateriasGelateriasPage />
  },
  // Novas rotas
  {
    path: '/clima',
    element: <Clima />
  },
  {
    path: '/eventos',
    element: <Eventos />
  },
  {
    path: '/localizacao',
    element: <Localizacao />
  },
  {
    path: '/noticias',
    element: <Noticias />
  },
  {
    path: '/admin/import',
    element: <ImportPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;