# 📁 ESTRUTURA DE PASTAS E ARQUIVOS
## Portal Turístico de Urubici - SC

---

## 📋 ÍNDICE

1. [Visão Geral](#1-visão-geral)
2. [Estrutura Completa](#2-estrutura-completa)
3. [Descrição das Pastas](#3-descrição-das-pastas)
4. [Convenções de Nomenclatura](#4-convenções-de-nomenclatura)
5. [Padrões de Organização](#5-padrões-de-organização)

---

## 1. VISÃO GERAL

### 1.1 Estrutura de Alto Nível

```
portal-urubici/
├── docs/                    # Documentação do projeto
├── public/                  # Arquivos públicos estáticos
├── src/                     # Código-fonte da aplicação
├── supabase/               # Edge Functions do Supabase
├── .env                    # Variáveis de ambiente
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
└── tailwind.config.ts      # Configuração TailwindCSS
```

---

## 2. ESTRUTURA COMPLETA

```
portal-urubici/
│
├── docs/                                    # 📚 Documentação
│   ├── 01-VISAO-GERAL.md
│   ├── 02-ARQUITETURA-TECNICA.md
│   ├── 03-SCHEMA-SUPABASE.md
│   ├── 04-FEATURES-IMPLEMENTADAS.md
│   ├── 05-FEATURES-PENDENTES.md
│   ├── 06-ESTRUTURA-PASTAS.md
│   ├── 07-ROTAS-NAVEGACAO.md
│   ├── 08-APIS-EDGE-FUNCTIONS.md
│   ├── 09-GUIA-EXPORTACAO.md
│   └── 10-CONFIGURACOES.md
│
├── public/                                  # 🌐 Arquivos públicos
│   └── videos/
│       └── cachoeira-rio-dos-bugres.mp4
│
├── src/                                     # 💻 Código-fonte
│   │
│   ├── admin/                              # 🔧 Área administrativa
│   │   ├── pages/
│   │   │   └── import/
│   │   │       └── page.tsx
│   │   └── scraping/
│   │       ├── mappers/
│   │       │   ├── establishment.mapper.ts
│   │       │   └── place.mapper.ts
│   │       ├── scrapers/
│   │       │   ├── guia-medico.scraper.ts
│   │       │   ├── o-que-fazer.scraper.ts
│   │       │   ├── onde-comer.scraper.ts
│   │       │   ├── onde-ficar.scraper.ts
│   │       │   └── onde-ir.scraper.ts
│   │       ├── services/
│   │       │   ├── deduplication.service.ts
│   │       │   └── import.service.ts
│   │       └── types/
│   │           └── scraping.types.ts
│   │
│   ├── components/                         # 🧩 Componentes
│   │   ├── base/                          # Componentes básicos
│   │   │   └── BackgroundVideo.tsx
│   │   └── feature/                       # Componentes de funcionalidade
│   │
│   ├── hooks/                              # 🪝 Custom Hooks
│   │
│   ├── i18n/                               # 🌍 Internacionalização
│   │   ├── local/
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── lib/                                # 📚 Bibliotecas
│   │   └── supabase.ts
│   │
│   ├── pages/                              # 📄 Páginas
│   │   │
│   │   ├── home/                          # Homepage
│   │   │   └── page.tsx
│   │   │
│   │   ├── clima/                         # Clima
│   │   │   └── page.tsx
│   │   │
│   │   ├── eventos/                       # Eventos
│   │   │   └── page.tsx
│   │   │
│   │   ├── localizacao/                   # Localização
│   │   │   └── page.tsx
│   │   │
│   │   ├── noticias/                      # Notícias
│   │   │   └── page.tsx
│   │   │
│   │   ├── mais-informacoes/              # Mais Informações
│   │   │   └── page.tsx
│   │   │
│   │   ├── onde-ficar/                    # 🏨 Hospedagens
│   │   │   ├── page.tsx
│   │   │   ├── pousadas/
│   │   │   │   └── page.tsx
│   │   │   ├── hoteis/
│   │   │   │   └── page.tsx
│   │   │   ├── chales/
│   │   │   │   └── page.tsx
│   │   │   ├── cabanas/
│   │   │   │   └── page.tsx
│   │   │   ├── boutique/
│   │   │   │   └── page.tsx
│   │   │   ├── camping-glamping/
│   │   │   │   └── page.tsx
│   │   │   ├── casas-temporada/
│   │   │   │   └── page.tsx
│   │   │   ├── eco-pousadas-eco-villages/
│   │   │   │   └── page.tsx
│   │   │   ├── hospedagem-rural-fazendas/
│   │   │   │   └── page.tsx
│   │   │   ├── hostels/
│   │   │   │   └── page.tsx
│   │   │   ├── lodges/
│   │   │   │   └── page.tsx
│   │   │   └── lofts/
│   │   │       └── page.tsx
│   │   │
│   │   ├── onde-comer/                    # 🍽️ Gastronomia
│   │   │   ├── page.tsx
│   │   │   ├── restaurantes/
│   │   │   │   └── page.tsx
│   │   │   ├── bistros/
│   │   │   │   └── page.tsx
│   │   │   ├── pizzarias/
│   │   │   │   └── page.tsx
│   │   │   ├── hamburguerias/
│   │   │   │   └── page.tsx
│   │   │   ├── cafeterias-docerias/
│   │   │   │   └── page.tsx
│   │   │   ├── cafe-colonial/
│   │   │   │   └── page.tsx
│   │   │   ├── cozinha-italiana/
│   │   │   │   └── page.tsx
│   │   │   ├── cozinha-japonesa/
│   │   │   │   └── page.tsx
│   │   │   ├── cozinha-internacional/
│   │   │   │   └── page.tsx
│   │   │   ├── churrascarias-steakhouse/
│   │   │   │   └── page.tsx
│   │   │   ├── peixes-trutarias/
│   │   │   │   └── page.tsx
│   │   │   ├── gastrobares-bares/
│   │   │   │   └── page.tsx
│   │   │   ├── vinicolas-bistros-vinicola/
│   │   │   │   └── page.tsx
│   │   │   ├── fondue-sequencias/
│   │   │   │   └── page.tsx
│   │   │   ├── complexos-gastronomicos/
│   │   │   │   └── page.tsx
│   │   │   ├── complexos-gastronomicos-pracas-alimentacao/
│   │   │   │   └── page.tsx
│   │   │   ├── lanches-delivery/
│   │   │   │   └── page.tsx
│   │   │   ├── padarias-confeitarias/
│   │   │   │   └── page.tsx
│   │   │   └── chocolaterias-gelaterias/
│   │   │       └── page.tsx
│   │   │
│   │   ├── onde-ir/                       # 🗺️ Atrativos
│   │   │   ├── page.tsx
│   │   │   ├── mirantes-montanhas/
│   │   │   │   └── page.tsx
│   │   │   ├── canions-estradas-cenicas/
│   │   │   │   └── page.tsx
│   │   │   ├── cachoeiras/
│   │   │   │   └── page.tsx
│   │   │   ├── grutas-cavernas/
│   │   │   │   └── page.tsx
│   │   │   ├── patrimonio-cultura/
│   │   │   │   └── page.tsx
│   │   │   └── parques-areas-protegidas/
│   │   │       └── page.tsx
│   │   │
│   │   ├── o-que-fazer/                   # 🎯 Atividades
│   │   │   ├── page.tsx
│   │   │   ├── aventura-parques/
│   │   │   │   └── page.tsx
│   │   │   ├── bem-estar-natureza/
│   │   │   │   └── page.tsx
│   │   │   └── cachoeiras-banhos-rio/
│   │   │       └── page.tsx
│   │   │
│   │   ├── guia-medico/                   # 🏥 Guia Médico
│   │   │   ├── page.tsx
│   │   │   ├── emergencias-servicos-publicos/
│   │   │   │   └── page.tsx
│   │   │   ├── especialidades-diagnosticos/
│   │   │   │   └── page.tsx
│   │   │   ├── medicos-especialistas/
│   │   │   │   └── page.tsx
│   │   │   ├── psicologia-terapias/
│   │   │   │   └── page.tsx
│   │   │   ├── biomedicina-estetica/
│   │   │   │   └── page.tsx
│   │   │   ├── odontologia/
│   │   │   │   └── page.tsx
│   │   │   ├── fisioterapia-reabilitacao/
│   │   │   │   └── page.tsx
│   │   │   ├── clinicas-centros-diagnostico/
│   │   │   │   └── page.tsx
│   │   │   ├── atendimento-online/
│   │   │   │   └── page.tsx
│   │   │   ├── farmacias-drogarias/
│   │   │   │   └── page.tsx
│   │   │   ├── planos-saude-convenios/
│   │   │   │   └── page.tsx
│   │   │   ├── bem-estar-estetica/
│   │   │   │   └── page.tsx
│   │   │   └── academias-fitness/
│   │   │       └── page.tsx
│   │   │
│   │   └── guia-servicos/                 # 🛠️ Guia de Serviços
│   │       ├── page.tsx
│   │       │
│   │       ├── comercio-geral-varejo/
│   │       │   ├── page.tsx
│   │       │   ├── supermercados-mercearias/
│   │       │   │   ├── page.tsx
│   │       │   │   ├── components/
│   │       │   │   │   ├── PageHeader.tsx
│   │       │   │   │   ├── PageFooter.tsx
│   │       │   │   │   ├── EstablishmentCard.tsx
│   │       │   │   │   ├── EstablishmentGroupSection.tsx
│   │       │   │   │   ├── FeaturedAdsCarousel.tsx
│   │       │   │   │   ├── PartnersCarousel.tsx
│   │       │   │   │   ├── QuickShortcuts.tsx
│   │       │   │   │   └── CallToAction.tsx
│   │       │   │   ├── hooks/
│   │       │   │   │   └── useEstablishments.ts
│   │       │   │   └── utils/
│   │       │   │       └── classification.ts
│   │       │   ├── lojas-roupas-calcados/
│   │       │   │   └── [mesma estrutura]
│   │       │   ├── artesanato-souvenirs/
│   │       │   │   └── [mesma estrutura]
│   │       │   └── material-casa/
│   │       │       └── [mesma estrutura]
│   │       │
│   │       ├── servicos-financeiros-legais/
│   │       │   ├── page.tsx
│   │       │   ├── bancos-financeiros/
│   │       │   ├── contabilidade-legal/
│   │       │   └── imobiliarias-corretores/
│   │       │
│   │       ├── veiculos-auto-transporte/
│   │       │   ├── page.tsx
│   │       │   ├── postos-combustivel/
│   │       │   ├── oficinas-mecanicas/
│   │       │   └── transporte-passageiros/
│   │       │
│   │       ├── servicos-profissionais-tecnicos/
│   │       │   ├── page.tsx
│   │       │   ├── beleza-estetica/
│   │       │   ├── reparos-domiciliares/
│   │       │   └── graficas-comunicacao/
│   │       │
│   │       ├── tecnologia-comunicacao/
│   │       │   ├── page.tsx
│   │       │   ├── informatica-suporte/
│   │       │   └── internet-telecom/
│   │       │
│   │       ├── servicos-domesticos-limpeza/
│   │       │   ├── page.tsx
│   │       │   ├── lavanderia-costura/
│   │       │   └── limpeza-jardinagem/
│   │       │
│   │       ├── utilidade-publica-governo/
│   │       │   ├── page.tsx
│   │       │   ├── correios-cartorios/
│   │       │   └── reparticoes-publicas/
│   │       │
│   │       ├── servicos-agropecuarios-rural/
│   │       │   ├── page.tsx
│   │       │   ├── agropecuaria-veterinaria/
│   │       │   └── implementos-maquinas/
│   │       │
│   │       ├── educacao-cursos/
│   │       │   ├── page.tsx
│   │       │   ├── cursos-profissionalizantes/
│   │       │   └── autoescolas/
│   │       │
│   │       ├── eventos-lazer/
│   │       │   ├── page.tsx
│   │       │   └── festas-buffets/
│   │       │
│   │       └── outros-servicos-essenciais/
│   │           ├── page.tsx
│   │           ├── oticas-joalherias/
│   │           └── chaveiros-carimbos/
│   │
│   ├── router/                             # 🛣️ Roteamento
│   │   ├── config.tsx
│   │   └── index.ts
│   │
│   ├── App.tsx                            # 📱 Componente principal
│   ├── main.tsx                           # 🚀 Entry point
│   ├── index.css                          # 🎨 Estilos globais
│   └── vite-env.d.ts                      # 📝 Tipos Vite
│
├── supabase/                               # ☁️ Supabase
│   └── functions/
│       ├── partners-api/
│       │   └── index.ts
│       ├── categories-api/
│       │   └── index.ts
│       ├── places-api/
│       │   └── index.ts
│       ├── ads-api/
│       │   └── index.ts
│       ├── news-api/
│       │   └── index.ts
│       ├── medical-establishments-api/
│       │   └── index.ts
│       ├── service-establishments-api/
│       │   └── index.ts
│       ├── public-services-api/
│       │   └── index.ts
│       ├── moderation-api/
│       │   └── index.ts
│       ├── homepage-api/
│       │   └── index.ts
│       ├── search/
│       │   └── index.ts
│       ├── sitemap/
│       │   └── index.ts
│       ├── rss-feed/
│       │   └── index.ts
│       ├── track-view/
│       │   └── index.ts
│       ├── scrape-urubici/
│       │   └── index.ts
│       ├── sync-blogger-news/
│       │   └── index.ts
│       ├── sync-google-places/
│       │   └── index.ts
│       └── generate-category-defaults/
│           └── index.ts
│
├── .env                                    # 🔐 Variáveis de ambiente
├── .gitignore                             # 🚫 Arquivos ignorados
├── package.json                           # 📦 Dependências
├── tsconfig.json                          # ⚙️ Config TypeScript
├── tsconfig.app.json                      # ⚙️ Config TS App
├── tsconfig.node.json                     # ⚙️ Config TS Node
├── vite.config.ts                         # ⚡ Config Vite
├── tailwind.config.ts                     # 🎨 Config Tailwind
├── postcss.config.ts                      # 🎨 Config PostCSS
└── README.md                              # 📖 Leia-me
```

---

## 3. DESCRIÇÃO DAS PASTAS

### 3.1 `/docs` - Documentação

Contém toda a documentação do projeto em formato Markdown.

**Arquivos**:
- `01-VISAO-GERAL.md`: Visão geral do projeto
- `02-ARQUITETURA-TECNICA.md`: Arquitetura e stack
- `03-SCHEMA-SUPABASE.md`: Schema do banco de dados
- `04-FEATURES-IMPLEMENTADAS.md`: Features prontas
- `05-FEATURES-PENDENTES.md`: Roadmap
- `06-ESTRUTURA-PASTAS.md`: Este arquivo
- `07-ROTAS-NAVEGACAO.md`: Sistema de rotas
- `08-APIS-EDGE-FUNCTIONS.md`: APIs e functions
- `09-GUIA-EXPORTACAO.md`: Backup e migração
- `10-CONFIGURACOES.md`: Configurações

### 3.2 `/public` - Arquivos Públicos

Arquivos estáticos servidos diretamente.

**Conteúdo**:
- `videos/`: Vídeos de fundo e mídia

### 3.3 `/src` - Código-fonte

#### 3.3.1 `/src/admin` - Área Administrativa

Sistema de administração e importação de dados.

**Subpastas**:
- `pages/`: Páginas administrativas
- `scraping/`: Sistema de scraping
  - `mappers/`: Normalização de dados
  - `scrapers/`: Scrapers específicos
  - `services/`: Serviços de importação
  - `types/`: Tipos TypeScript

#### 3.3.2 `/src/components` - Componentes

Componentes React reutilizáveis.

**Subpastas**:
- `base/`: Componentes básicos (Button, Input, etc.)
- `feature/`: Componentes de funcionalidade

#### 3.3.3 `/src/hooks` - Custom Hooks

Hooks React customizados para lógica reutilizável.

#### 3.3.4 `/src/i18n` - Internacionalização

Sistema de tradução e localização.

#### 3.3.5 `/src/lib` - Bibliotecas

Configurações de bibliotecas externas (Supabase, etc.).

#### 3.3.6 `/src/pages` - Páginas

Todas as páginas da aplicação organizadas por categoria.

**Estrutura padrão de página de listagem**:
```
categoria/subcategoria/
├── page.tsx              # Página principal
├── components/           # Componentes específicos
│   ├── PageHeader.tsx
│   ├── PageFooter.tsx
│   ├── EstablishmentCard.tsx
│   ├── EstablishmentGroupSection.tsx
│   ├── FeaturedAdsCarousel.tsx
│   ├── PartnersCarousel.tsx
│   ├── QuickShortcuts.tsx
│   └── CallToAction.tsx
├── hooks/               # Hooks específicos
│   └── useEstablishments.ts
└── utils/               # Utilitários
    └── classification.ts
```

#### 3.3.7 `/src/router` - Roteamento

Configuração do React Router.

**Arquivos**:
- `config.tsx`: Definição de rotas
- `index.ts`: Setup do router

### 3.4 `/supabase` - Backend

Edge Functions do Supabase (serverless).

**Estrutura**:
```
functions/
└── nome-da-function/
    └── index.ts
```

---

## 4. CONVENÇÕES DE NOMENCLATURA

### 4.1 Arquivos

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componente React | PascalCase.tsx | `PageHeader.tsx` |
| Hook | camelCase.ts | `useEstablishments.ts` |
| Utilitário | camelCase.ts | `classification.ts` |
| Tipo/Interface | PascalCase.ts | `Establishment.ts` |
| Página | page.tsx | `page.tsx` |
| Configuração | kebab-case.ts | `vite.config.ts` |

### 4.2 Pastas

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Categoria | kebab-case | `onde-ficar/` |
| Subcategoria | kebab-case | `supermercados-mercearias/` |
| Funcionalidade | camelCase | `components/` |

### 4.3 Código

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Variável | camelCase | `userData` |
| Constante | UPPER_SNAKE_CASE | `API_URL` |
| Função | camelCase | `fetchData()` |
| Componente | PascalCase | `UserProfile` |
| Interface | PascalCase | `UserData` |
| Type | PascalCase | `EstablishmentType` |

---

## 5. PADRÕES DE ORGANIZAÇÃO

### 5.1 Importações

Ordem recomendada:

```typescript
// 1. React e bibliotecas externas
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Componentes internos
import PageHeader from '@/components/PageHeader';
import EstablishmentCard from './components/EstablishmentCard';

// 3. Hooks customizados
import { useEstablishments } from './hooks/useEstablishments';

// 4. Utils e helpers
import { classifyEstablishments } from './utils/classification';

// 5. Types
import type { Establishment } from '@/types';

// 6. Estilos (se necessário)
import './styles.css';
```

### 5.2 Estrutura de Componente

```typescript
// Imports
import { useState } from 'react';

// Types/Interfaces
interface ComponentProps {
  title: string;
  data?: any[];
}

// Component
export default function Component({ title, data = [] }: ComponentProps) {
  // State
  const [state, setState] = useState<any>(null);
  
  // Effects
  useEffect(() => {
    // ...
  }, []);
  
  // Handlers
  const handleClick = () => {
    // ...
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### 5.3 Estrutura de Hook

```typescript
// Imports
import { useState, useEffect } from 'react';

// Hook
export function useCustomHook(param: string) {
  // State
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Effects
  useEffect(() => {
    // Logic
  }, [param]);
  
  // Return
  return { data, loading, error };
}
```

---

## 📊 ESTATÍSTICAS

### Contagem de Arquivos

- **Total de páginas**: ~120
- **Componentes**: ~60
- **Hooks**: ~30
- **Edge Functions**: 18
- **Arquivos de configuração**: 8
- **Documentação**: 10

### Tamanho Estimado

- **Código TypeScript**: ~15.000 linhas
- **Componentes**: ~8.000 linhas
- **Páginas**: ~5.000 linhas
- **Hooks**: ~1.000 linhas
- **Edge Functions**: ~1.000 linhas

---

**Arquivo anterior**: [05-FEATURES-PENDENTES.md](./05-FEATURES-PENDENTES.md)
**Próximo arquivo**: [07-ROTAS-NAVEGACAO.md](./07-ROTAS-NAVEGACAO.md)
