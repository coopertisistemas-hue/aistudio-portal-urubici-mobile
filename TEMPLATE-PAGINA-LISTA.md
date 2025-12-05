# 📘 Template para Páginas de Lista - Guia de Serviços

## 🎯 Objetivo
Este template serve como referência para criar páginas de lista de estabelecimentos no Guia de Serviços de Urubici, garantindo consistência visual, funcional e de código.

---

## 📁 Estrutura de Arquivos

```
src/pages/guia-servicos/[CATEGORIA]/[SUBCATEGORIA]/
├── components/
│   ├── PageHeader.tsx           # Cabeçalho com título e descrição
│   ├── FeaturedAdsCarousel.tsx  # Carrossel de anúncios em destaque
│   ├── QuickShortcuts.tsx       # Atalhos rápidos para navegação
│   ├── EstablishmentGroupSection.tsx  # Seção agrupada por classificação
│   ├── EstablishmentCard.tsx    # Card individual do estabelecimento
│   ├── PartnersCarousel.tsx     # Carrossel de parceiros
│   ├── CallToAction.tsx         # Call-to-action
│   └── PageFooter.tsx           # Footer com links úteis
├── hooks/
│   └── useEstablishments.ts     # Hook para buscar dados via Edge Function
├── utils/
│   └── classification.ts        # Lógica de classificação (Destaque, Premium, Padrão)
└── page.tsx                     # Página principal
```

---

## 🎨 Paleta de Cores Padronizada

### **Cores Principais:**
- **Primary (Teal):** `#14B8A6` - Botões principais, links, destaques
- **Secondary (Amber):** `#F59E0B` - Badges, ícones de destaque
- **Success (Green):** `#10B981` - Status positivo, verificações
- **Background:** `#FFFFFF` - Fundo principal
- **Surface:** `#F9FAFB` - Cards, seções
- **Border:** `#E5E7EB` - Bordas sutis
- **Text Primary:** `#111827` - Texto principal
- **Text Secondary:** `#6B7280` - Texto secundário

### **Gradientes:**
- **Hero:** `from-teal-600 via-teal-500 to-cyan-500`
- **Cards Premium:** `from-amber-50 to-orange-50`
- **Overlay:** `from-black/60 via-black/40 to-transparent`

---

## 🔘 Botões Dinâmicos por Categoria

### **Botões Obrigatórios (Sempre presentes):**
1. **WhatsApp** - `ri-whatsapp-line` - Verde `#10B981`
2. **Ver Página** - `ri-external-link-line` - Teal `#14B8A6`

### **Botões Específicos por Categoria:**

| Categoria | Botão Adicional | Ícone | Cor | Texto |
|-----------|----------------|-------|-----|-------|
| **Restaurantes/Alimentação** | Fazer Pedido | `ri-shopping-bag-line` | Amber `#F59E0B` | Pedir Online |
| **Hospedagem** | Reservar | `ri-calendar-check-line` | Blue `#3B82F6` | Reservar |
| **Serviços de Saúde** | Agendar | `ri-calendar-line` | Purple `#8B5CF6` | Agendar |
| **Beleza/Estética** | Agendar | `ri-calendar-line` | Pink `#EC4899` | Agendar |
| **Lojas/Comércio** | Ver Produtos | `ri-store-line` | Indigo `#6366F1` | Ver Produtos |
| **Serviços Técnicos** | Solicitar Orçamento | `ri-file-list-line` | Slate `#64748B` | Orçamento |
| **Eventos/Lazer** | Reservar | `ri-ticket-line` | Rose `#F43F5E` | Reservar |

### **Exemplo de Implementação:**

```typescript
// Em EstablishmentCard.tsx
const getActionButton = (category: string) => {
  const buttons = {
    'onde-comer': {
      icon: 'ri-shopping-bag-line',
      text: 'Pedir Online',
      color: 'bg-amber-500 hover:bg-amber-600',
    },
    'onde-ficar': {
      icon: 'ri-calendar-check-line',
      text: 'Reservar',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    'guia-medico': {
      icon: 'ri-calendar-line',
      text: 'Agendar',
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    'comercio-geral-varejo': {
      icon: 'ri-store-line',
      text: 'Ver Produtos',
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
    // ... outros
  };
  
  return buttons[category] || null;
};
```

---

## 🔧 Hook useEstablishments.ts

```typescript
import { useState, useEffect } from 'react';

interface Establishment {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  website: string;
  image_url: string;
  classification: 'destaque' | 'premium' | 'padrao';
  // ... outros campos
}

export const useEstablishments = (subcategory: string) => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEstablishments = async () => {
      try {
        console.log('🚀 INÍCIO - Buscando estabelecimentos via Edge Function...');
        
        const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
        
        if (!supabaseUrl) {
          throw new Error('VITE_PUBLIC_SUPABASE_URL não configurada');
        }

        const baseUrl = supabaseUrl.replace(/\/$/, '');
        const apiUrl = `${baseUrl}/functions/v1/public-services-api?subcategory=${subcategory}&city=Urubici`;

        console.log('📍 PASSO 2 - Preparando requisição...');
        console.log('  🌐 URL:', apiUrl);

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('📍 PASSO 3 - Resposta recebida');
        console.log('  📡 Status:', response.status);
        console.log('  📡 OK?:', response.ok);

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();

        console.log('📍 PASSO 4 - Processando dados...');
        console.log('  ✅ Sucesso:', data.success);
        console.log('  📊 Total:', data.data?.length || 0);

        if (data.success && Array.isArray(data.data)) {
          setEstablishments(data.data);
          console.log('✅ SUCESSO - Estabelecimentos carregados');
        } else {
          setEstablishments([]);
        }
      } catch (error) {
        console.error('💥 ERRO ao carregar estabelecimentos:', error);
        setEstablishments([]);
      } finally {
        console.log('🏁 FINALIZANDO');
        setLoading(false);
      }
    };

    fetchEstablishments();
  }, [subcategory]);

  return { establishments, loading };
};
```

---

## 📦 Componentes Base

### **1. PageHeader.tsx**

```typescript
interface PageHeaderProps {
  title: string;
  description: string;
  icon: string;
}

export const PageHeader = ({ title, description, icon }: PageHeaderProps) => {
  return (
    <div className="relative bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <i className={`${icon} text-5xl`}></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};
```

### **2. EstablishmentCard.tsx**

```typescript
interface EstablishmentCardProps {
  establishment: Establishment;
  category: string; // Para determinar botão específico
}

export const EstablishmentCard = ({ establishment, category }: EstablishmentCardProps) => {
  const isPremium = establishment.classification === 'premium';
  const isDestaque = establishment.classification === 'destaque';
  
  const actionButton = getActionButton(category);

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
      isPremium ? 'ring-2 ring-amber-400' : ''
    } ${isDestaque ? 'ring-2 ring-teal-500' : ''}`}>
      {/* Badge de classificação */}
      {(isPremium || isDestaque) && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isDestaque ? 'bg-teal-500 text-white' : 'bg-amber-400 text-white'
          }`}>
            {isDestaque ? '⭐ Destaque' : '👑 Premium'}
          </span>
        </div>
      )}

      {/* Imagem */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={establishment.image_url || 'https://readdy.ai/api/search-image?query=business%20storefront%20modern%20clean%20simple%20background&width=400&height=300&seq=default&orientation=landscape'}
          alt={establishment.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{establishment.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{establishment.description}</p>

        {/* Informações */}
        <div className="space-y-2 mb-4">
          {establishment.address && (
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <i className="ri-map-pin-line text-teal-500 mt-0.5"></i>
              <span className="line-clamp-1">{establishment.address}</span>
            </div>
          )}
          {establishment.phone && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <i className="ri-phone-line text-teal-500"></i>
              <span>{establishment.phone}</span>
            </div>
          )}
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2">
          {/* WhatsApp - OBRIGATÓRIO */}
          {establishment.whatsapp && (
            <a
              href={`https://wa.me/${establishment.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              WhatsApp
            </a>
          )}

          {/* Botão Específico da Categoria - CONDICIONAL */}
          {actionButton && (
            <button className={`flex-1 ${actionButton.color} text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer`}>
              <i className={`${actionButton.icon} text-lg`}></i>
              {actionButton.text}
            </button>
          )}

          {/* Ver Página - OBRIGATÓRIO */}
          {establishment.website && (
            <a
              href={establishment.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-external-link-line text-lg"></i>
              Ver Página
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
```

---

## ✅ Checklist de Validação

Antes de considerar a página completa, verificar:

### **Funcionalidade:**
- [ ] Dados carregam corretamente via Edge Function
- [ ] Logs de debug aparecem no console
- [ ] Classificação automática funciona (Destaque, Premium, Padrão)
- [ ] Carrossel de anúncios em destaque funciona
- [ ] Atalhos rápidos navegam corretamente
- [ ] Botões WhatsApp abrem conversa
- [ ] Botões "Ver Página" abrem links externos
- [ ] Botão específico da categoria está presente e funcional

### **Visual:**
- [ ] Paleta de cores está correta
- [ ] Gradientes estão aplicados
- [ ] Badges de classificação aparecem
- [ ] Imagens carregam com fallback
- [ ] Cards têm hover effect
- [ ] Espaçamentos estão consistentes
- [ ] Responsividade funciona (mobile, tablet, desktop)

### **Código:**
- [ ] Sem erros no console
- [ ] Sem warnings de TypeScript
- [ ] Componentes estão modularizados
- [ ] Código está comentado
- [ ] Nomes de variáveis são descritivos

### **SEO:**
- [ ] Título da página está correto
- [ ] Meta description está presente
- [ ] H1 está presente e único
- [ ] Imagens têm alt text
- [ ] Links têm rel="noopener noreferrer"

---

## 🚀 Processo de Criação (Passo a Passo)

### **Passo 1: Definir Informações da Página**
```
Categoria: [ex: comercio-geral-varejo]
Subcategoria: [ex: artesanato-souvenirs]
Título: [ex: Artesanato e Souvenirs em Urubici]
Descrição: [ex: Descubra lojas de artesanato local...]
Ícone: [ex: ri-gift-line]
Botão Específico: [ex: Ver Produtos]
```

### **Passo 2: Criar Estrutura de Pastas**
```
src/pages/guia-servicos/[CATEGORIA]/[SUBCATEGORIA]/
```

### **Passo 3: Criar Componentes**
- Copiar componentes base do template
- Ajustar textos e ícones
- Configurar botão específico da categoria

### **Passo 4: Criar Hook**
- Copiar `useEstablishments.ts`
- Ajustar subcategoria

### **Passo 5: Criar Página Principal**
- Importar todos os componentes
- Configurar layout
- Testar funcionalidade

### **Passo 6: Validar**
- Executar checklist completo
- Corrigir erros
- Testar em diferentes dispositivos

---

## 📝 Exemplo de Prompt para Criar Nova Página

```
Crie uma página de lista para [CATEGORIA] seguindo o template TEMPLATE-PAGINA-LISTA.md:

**Informações:**
- Categoria: [categoria]
- Subcategoria: [subcategoria]
- Título: [título]
- Descrição: [descrição]
- Ícone: [ícone Remix Icon]
- Botão Específico: [nome do botão] com ícone [ícone] e cor [cor]

**Requisitos:**
1. Seguir paleta de cores do template
2. Incluir botões obrigatórios (WhatsApp + Ver Página)
3. Incluir botão específico da categoria
4. Usar Edge Function 'public-services-api'
5. Logs de debug detalhados
6. Componentes modularizados
7. Validar com checklist completo

**Validação:**
Após criar, executar checklist de validação e reportar status.
```

---

## 🎯 Categorias e Botões Específicos

### **Mapeamento Completo:**

| Categoria Principal | Subcategoria | Botão Específico | Ícone | Cor |
|---------------------|--------------|------------------|-------|-----|
| **Onde Comer** | Todas | Pedir Online | `ri-shopping-bag-line` | Amber |
| **Onde Ficar** | Todas | Reservar | `ri-calendar-check-line` | Blue |
| **Guia Médico** | Todas | Agendar | `ri-calendar-line` | Purple |
| **Comércio Geral** | Lojas | Ver Produtos | `ri-store-line` | Indigo |
| **Comércio Geral** | Supermercados | Ver Produtos | `ri-shopping-cart-line` | Indigo |
| **Serviços Profissionais** | Beleza | Agendar | `ri-calendar-line` | Pink |
| **Serviços Profissionais** | Reparos | Orçamento | `ri-file-list-line` | Slate |
| **Eventos e Lazer** | Todas | Reservar | `ri-ticket-line` | Rose |
| **Veículos e Auto** | Oficinas | Orçamento | `ri-tools-line` | Gray |
| **Educação** | Todas | Matricular | `ri-book-line` | Violet |

---

## 📚 Referências

- **Páginas de Sucesso:**
  - `src/pages/guia-servicos/comercio-geral-varejo/artesanato-souvenirs/`
  - `src/pages/guia-servicos/comercio-geral-varejo/supermercados-mercearias/`

- **Edge Function:**
  - `supabase/functions/public-services-api/index.ts`

- **Paleta de Cores:**
  - Baseada em Tailwind CSS v3
  - Cores principais: Teal, Amber, Green

---

**Última atualização:** 2024
**Versão:** 1.0
**Autor:** Template baseado em páginas de sucesso do projeto
