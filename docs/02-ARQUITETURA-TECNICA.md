# 🏗️ ARQUITETURA TÉCNICA
## Portal Turístico de Urubici - SC

---

## 1. VISÃO GERAL DA ARQUITETURA

### 1.1 Diagrama de Alto Nível

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Pages   │  │Components│  │  Hooks   │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │             │              │                     │
│       └─────────────┴──────────────┘                     │
│                     │                                    │
│              ┌──────▼──────┐                            │
│              │   Router    │                            │
│              └──────┬──────┘                            │
└─────────────────────┼────────────────────────────────────┘
                      │
                      │ HTTP/REST
                      │
┌─────────────────────▼────────────────────────────────────┐
│              SUPABASE (Backend)                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │PostgreSQL│  │   Auth   │  │ Storage  │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │             │              │                     │
│  ┌────▼─────────────▼──────────────▼─────┐              │
│  │        Edge Functions (Deno)          │              │
│  └───────────────────────────────────────┘              │
└──────────────────────────────────────────────────────────┘
```

### 1.2 Padrão de Arquitetura

- **Frontend**: Component-Based Architecture (React)
- **Backend**: Serverless Architecture (Supabase Edge Functions)
- **Database**: Relational Database (PostgreSQL)
- **API**: RESTful API
- **State Management**: React Hooks + Context API

---

## 2. STACK TECNOLÓGICO DETALHADO

### 2.1 Frontend

#### 2.1.1 Core
```json
{
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "typescript": "5.8.3",
  "vite": "7.0.3"
}
```

#### 2.1.2 Roteamento
```json
{
  "react-router-dom": "7.6.3"
}
```

#### 2.1.3 Estilização
```json
{
  "tailwindcss": "3.4.17",
  "autoprefixer": "10.4.21",
  "postcss": "8.5.6"
}
```

#### 2.1.4 Internacionalização
```json
{
  "i18next": "25.3.2",
  "react-i18next": "15.6.0",
  "i18next-browser-languagedetector": "8.2.0"
}
```

#### 2.1.5 Integrações
```json
{
  "@supabase/supabase-js": "2.57.4",
  "@stripe/react-stripe-js": "4.0.2",
  "recharts": "3.2.0"
}
```

### 2.2 Backend (Supabase)

#### 2.2.1 Database
- **PostgreSQL**: 15.x
- **Extensions**: pgvector, postgis (preparado)

#### 2.2.2 Authentication
- **Supabase Auth**: JWT-based
- **Providers**: Email, Google, Facebook (preparado)

#### 2.2.3 Storage
- **Supabase Storage**: S3-compatible
- **Buckets**: images, videos, documents

#### 2.2.4 Edge Functions
- **Runtime**: Deno
- **Language**: TypeScript
- **Total**: 18 functions

### 2.3 DevOps

#### 2.3.1 Build Tools
```json
{
  "@vitejs/plugin-react-swc": "3.10.2",
  "unplugin-auto-import": "19.3.0"
}
```

#### 2.3.2 Linting
```json
{
  "eslint": "9.30.1",
  "typescript-eslint": "8.35.1"
}
```

---

## 3. PADRÕES DE CÓDIGO

### 3.1 Estrutura de Componentes

#### 3.1.1 Componente Funcional Padrão
```typescript
import { useState, useEffect } from 'react';

interface ComponentProps {
  title: string;
  data?: any[];
}

export default function Component({ title, data = [] }: ComponentProps) {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    // Effect logic
  }, []);

  return (
    <div className="container">
      <h1>{title}</h1>
      {/* Component content */}
    </div>
  );
}
```

#### 3.1.2 Custom Hook Padrão
```typescript
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function useData(category: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('table')
          .select('*')
          .eq('category', category);
        
        if (error) throw error;
        setData(data || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [category]);

  return { data, loading, error };
}
```

### 3.2 Nomenclatura

#### 3.2.1 Arquivos
- **Componentes**: PascalCase (ex: `PageHeader.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useEstablishments.ts`)
- **Utils**: camelCase (ex: `classification.ts`)
- **Types**: PascalCase (ex: `Establishment.ts`)

#### 3.2.2 Variáveis e Funções
- **Variáveis**: camelCase (ex: `userData`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `API_URL`)
- **Funções**: camelCase (ex: `fetchData`)
- **Componentes**: PascalCase (ex: `UserProfile`)

#### 3.2.3 CSS Classes (Tailwind)
- Usar utility-first approach
- Agrupar por categoria (layout, spacing, colors, typography)
- Usar responsive prefixes quando necessário

```tsx
<div className="
  flex flex-col items-center justify-center
  w-full max-w-4xl mx-auto
  p-4 md:p-6 lg:p-8
  bg-white rounded-lg shadow-lg
  text-gray-800 font-sans
">
  {/* Content */}
</div>
```

### 3.3 Organização de Imports

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

---

## 4. ARQUITETURA DE COMPONENTES

### 4.1 Hierarquia de Componentes

```
App
├── Router
│   ├── Layout
│   │   ├── Header
│   │   ├── Navigation
│   │   └── Footer
│   └── Pages
│       ├── Home
│       ├── Category Pages
│       │   ├── PageHeader
│       │   ├── FeaturedAdsCarousel
│       │   ├── QuickShortcuts
│       │   ├── EstablishmentGroupSection
│       │   │   └── EstablishmentCard (multiple)
│       │   ├── PartnersCarousel
│       │   ├── CallToAction
│       │   └── PageFooter
│       └── Detail Pages
```

### 4.2 Tipos de Componentes

#### 4.2.1 Base Components (`src/components/base/`)
- Componentes básicos e reutilizáveis
- Sem lógica de negócio
- Altamente configuráveis via props
- Exemplos: Button, Input, Card, Modal

#### 4.2.2 Feature Components (`src/components/feature/`)
- Componentes com lógica de negócio
- Específicos para funcionalidades
- Podem usar hooks customizados
- Exemplos: UserProfile, SearchBar, LoginForm

#### 4.2.3 Page Components (`src/pages/`)
- Componentes de página completa
- Composição de outros componentes
- Gerenciam estado da página
- Exemplos: HomePage, CategoryPage, DetailPage

#### 4.2.4 Layout Components
- Componentes de estrutura
- Header, Footer, Sidebar
- Navegação e estrutura geral

---

## 5. GERENCIAMENTO DE ESTADO

### 5.1 Estado Local (useState)
```typescript
// Para estado simples de componente
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '' });
```

### 5.2 Estado de Efeito (useEffect)
```typescript
// Para side effects e sincronização
useEffect(() => {
  fetchData();
}, [dependency]);
```

### 5.3 Estado Compartilhado (Context API)
```typescript
// Para estado global (quando necessário)
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

### 5.4 Estado de Servidor (Supabase)
```typescript
// Para dados do servidor
const { data, loading, error } = useSupabaseQuery('establishments');
```

---

## 6. ROTEAMENTO

### 6.1 Estrutura de Rotas

```typescript
// src/router/config.tsx
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/onde-ficar',
    element: <OndeFicar />,
    children: [
      {
        path: 'pousadas',
        element: <Pousadas />
      }
    ]
  }
];
```

### 6.2 Navegação Programática

```typescript
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/onde-ficar/pousadas');
  };
  
  return <button onClick={handleClick}>Ver Pousadas</button>;
}
```

### 6.3 Parâmetros de Rota

```typescript
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Usar id para buscar dados
}
```

---

## 7. INTEGRAÇÃO COM SUPABASE

### 7.1 Cliente Supabase

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 7.2 Queries

```typescript
// SELECT
const { data, error } = await supabase
  .from('establishments')
  .select('*')
  .eq('category', 'restaurant')
  .order('name');

// INSERT
const { data, error } = await supabase
  .from('establishments')
  .insert({ name: 'New Restaurant', category: 'restaurant' });

// UPDATE
const { data, error } = await supabase
  .from('establishments')
  .update({ name: 'Updated Name' })
  .eq('id', id);

// DELETE
const { data, error } = await supabase
  .from('establishments')
  .delete()
  .eq('id', id);
```

### 7.3 Realtime Subscriptions

```typescript
const subscription = supabase
  .channel('establishments')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'establishments' },
    (payload) => {
      console.log('Change received!', payload);
    }
  )
  .subscribe();

// Cleanup
return () => {
  subscription.unsubscribe();
};
```

---

## 8. PERFORMANCE E OTIMIZAÇÃO

### 8.1 Code Splitting

```typescript
// Lazy loading de componentes
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 8.2 Memoização

```typescript
import { useMemo, useCallback } from 'react';

// useMemo para valores computados
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// useCallback para funções
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

### 8.3 Otimização de Imagens

```typescript
// Lazy loading de imagens
<img 
  src={imageUrl} 
  loading="lazy" 
  alt="Description"
/>

// Responsive images
<img 
  srcSet={`
    ${imageUrl}?w=400 400w,
    ${imageUrl}?w=800 800w,
    ${imageUrl}?w=1200 1200w
  `}
  sizes="(max-width: 768px) 100vw, 50vw"
  src={imageUrl}
  alt="Description"
/>
```

---

## 9. SEGURANÇA

### 9.1 Row Level Security (RLS)

```sql
-- Exemplo de policy
CREATE POLICY "Users can view published establishments"
  ON establishments FOR SELECT
  USING (status = 'published');

CREATE POLICY "Users can update their own establishments"
  ON establishments FOR UPDATE
  USING (auth.uid() = owner_id);
```

### 9.2 Validação de Dados

```typescript
// Validação no frontend
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação no backend (Edge Function)
if (!email || !validateEmail(email)) {
  return new Response(
    JSON.stringify({ error: 'Invalid email' }),
    { status: 400 }
  );
}
```

### 9.3 Sanitização

```typescript
// Sanitizar input do usuário
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .substring(0, 1000);
}
```

---

## 10. TESTES (PREPARADO)

### 10.1 Estrutura de Testes

```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### 10.2 Tipos de Testes

- **Unit Tests**: Testar componentes isolados
- **Integration Tests**: Testar interação entre componentes
- **E2E Tests**: Testar fluxos completos (Cypress/Playwright)

---

**Arquivo anterior**: [01-VISAO-GERAL.md](./01-VISAO-GERAL.md)
**Próximo arquivo**: [03-SCHEMA-SUPABASE.md](./03-SCHEMA-SUPABASE.md)
