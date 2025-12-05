# 📋 DOCUMENTAÇÃO DO PROJETO - VISÃO GERAL
## Portal Turístico de Urubici - SC

---

## 📌 ÍNDICE DA DOCUMENTAÇÃO

1. **01-VISAO-GERAL.md** (este arquivo)
2. **02-ARQUITETURA-TECNICA.md**
3. **03-SCHEMA-SUPABASE.md**
4. **04-FEATURES-IMPLEMENTADAS.md**
5. **05-FEATURES-PENDENTES.md**
6. **06-ESTRUTURA-PASTAS.md**
7. **07-ROTAS-NAVEGACAO.md**
8. **08-APIS-EDGE-FUNCTIONS.md**
9. **09-GUIA-EXPORTACAO.md**
10. **10-CONFIGURACOES.md**

---

## 1. DESCRIÇÃO DO PROJETO

### 1.1 O que é o Portal Urubici?

Portal turístico completo da cidade de Urubici/SC, oferecendo informações centralizadas sobre:

- **Hospedagens** (Onde Ficar) - 12 tipos diferentes
- **Gastronomia** (Onde Comer) - 19 categorias
- **Atrativos Turísticos** (Onde Ir) - 6 tipos
- **Atividades e Experiências** (O Que Fazer) - 3 categorias
- **Guia Médico** - 13 especialidades
- **Guia de Serviços** - 10 categorias principais com 30+ subcategorias
- **Notícias e Eventos**
- **Clima e Localização**

### 1.2 Objetivo Principal

Centralizar todas as informações turísticas e de serviços de Urubici em uma plataforma moderna, responsiva e de fácil navegação, conectando turistas, moradores e estabelecimentos locais.

### 1.3 Público-Alvo

- **Turistas**: Buscando informações sobre hospedagem, gastronomia e atrativos
- **Moradores**: Procurando serviços locais e informações da cidade
- **Estabelecimentos**: Divulgando seus negócios e serviços
- **Administradores**: Gerenciando conteúdo e moderação

---

## 2. TECNOLOGIAS PRINCIPAIS

### 2.1 Frontend

```json
{
  "framework": "React 19.1.0",
  "linguagem": "TypeScript 5.8.3",
  "bundler": "Vite 7.0.3",
  "css": "TailwindCSS 3.4.17",
  "roteamento": "React Router DOM 7.6.3",
  "i18n": "i18next 25.3.2"
}
```

### 2.2 Backend

```json
{
  "plataforma": "Supabase",
  "database": "PostgreSQL",
  "auth": "Supabase Auth",
  "storage": "Supabase Storage",
  "functions": "Supabase Edge Functions (Deno)"
}
```

### 2.3 Integrações

```json
{
  "pagamentos": "Stripe (preparado)",
  "analytics": "Supabase Analytics",
  "graficos": "Recharts 3.2.0"
}
```

---

## 3. CARACTERÍSTICAS PRINCIPAIS

### 3.1 Arquitetura

- ✅ **SPA (Single Page Application)** com React
- ✅ **SSR-Ready** (preparado para Server-Side Rendering)
- ✅ **API-First** (todas as funcionalidades via API)
- ✅ **Mobile-First** (design responsivo)
- ✅ **SEO-Friendly** (otimizado para motores de busca)

### 3.2 Funcionalidades Principais

- ✅ Sistema de navegação hierárquica
- ✅ Listagem de estabelecimentos por categoria
- ✅ Sistema de anúncios e publicidade
- ✅ Integração com banco de dados Supabase
- ✅ Sistema de scraping para importação de dados
- ✅ APIs RESTful para todas as entidades
- ✅ Painel administrativo de importação

### 3.3 Diferenciais

- 🎨 **Design Moderno**: Interface limpa e intuitiva
- 🚀 **Performance**: Carregamento rápido e otimizado
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🔒 **Seguro**: Row Level Security (RLS) no Supabase
- 🌐 **Escalável**: Arquitetura preparada para crescimento
- 🔍 **SEO**: Otimizado para Google e outros buscadores

---

## 4. ESTRUTURA DO PROJETO

### 4.1 Módulos Principais

```
Portal Urubici
├── Onde Ficar (12 tipos de hospedagem)
├── Onde Comer (19 tipos de gastronomia)
├── Onde Ir (6 tipos de atrativos)
├── O Que Fazer (3 tipos de atividades)
├── Guia Médico (13 especialidades)
├── Guia de Serviços (30+ subcategorias)
├── Notícias
├── Eventos
├── Clima
├── Localização
└── Admin (importação de dados)
```

### 4.2 Componentes Reutilizáveis

- **PageHeader**: Cabeçalho de página com título e descrição
- **PageFooter**: Rodapé com links e informações
- **EstablishmentCard**: Card de estabelecimento
- **EstablishmentGroupSection**: Seção de grupo de estabelecimentos
- **FeaturedAdsCarousel**: Carrossel de anúncios em destaque
- **PartnersCarousel**: Carrossel de parceiros
- **QuickShortcuts**: Atalhos rápidos
- **CallToAction**: Chamada para ação
- **BackgroundVideo**: Vídeo de fundo

---

## 5. ESTATÍSTICAS DO PROJETO

### 5.1 Números Gerais

- **Total de páginas**: 120+
- **Componentes**: 60+
- **Hooks customizados**: 30+
- **Tabelas no banco**: 34
- **Edge Functions**: 18
- **Rotas**: 100+

### 5.2 Linhas de Código (estimativa)

- **TypeScript/TSX**: ~15.000 linhas
- **SQL**: ~2.000 linhas
- **CSS/Tailwind**: ~1.000 linhas
- **Total**: ~18.000 linhas

### 5.3 Categorias de Conteúdo

- **Hospedagens**: 12 tipos
- **Gastronomia**: 19 tipos
- **Atrativos**: 6 tipos
- **Atividades**: 3 tipos
- **Saúde**: 13 especialidades
- **Serviços**: 30+ subcategorias

---

## 6. STATUS ATUAL DO PROJETO

### 6.1 Versão Atual

- **Versão**: 435
- **Status**: Em desenvolvimento ativo
- **Última atualização**: Janeiro 2025

### 6.2 Completude

- ✅ **Estrutura**: 100% completa
- ✅ **Frontend**: 80% completo
- ⏳ **Backend**: 60% completo
- ⏳ **Autenticação**: 0% (pendente)
- ⏳ **Admin**: 20% completo
- ⏳ **Testes**: 0% (pendente)

### 6.3 Próximas Prioridades

1. Sistema de autenticação
2. Painel administrativo completo
3. Sistema de busca avançada
4. Sistema de avaliações
5. Integração com mapas

---

## 7. COMO USAR ESTA DOCUMENTAÇÃO

### 7.1 Para Desenvolvedores

1. Leia **02-ARQUITETURA-TECNICA.md** para entender a estrutura
2. Consulte **03-SCHEMA-SUPABASE.md** para o banco de dados
3. Veja **04-FEATURES-IMPLEMENTADAS.md** para funcionalidades prontas
4. Confira **05-FEATURES-PENDENTES.md** para o roadmap

### 7.2 Para Administradores

1. Leia **09-GUIA-EXPORTACAO.md** para backup e migração
2. Consulte **10-CONFIGURACOES.md** para configurações
3. Veja **08-APIS-EDGE-FUNCTIONS.md** para entender as APIs

### 7.3 Para Designers

1. Consulte **06-ESTRUTURA-PASTAS.md** para localizar componentes
2. Veja **07-ROTAS-NAVEGACAO.md** para entender a navegação

---

## 8. REQUISITOS DO SISTEMA

### 8.1 Para Desenvolvimento

- **Node.js**: 18.x ou superior
- **npm**: 9.x ou superior
- **Git**: 2.x ou superior
- **Editor**: VS Code (recomendado)

### 8.2 Para Produção

- **Servidor**: Qualquer servidor com suporte a Node.js
- **Banco de Dados**: Supabase (PostgreSQL)
- **CDN**: Recomendado para assets estáticos
- **SSL**: Obrigatório (HTTPS)

### 8.3 Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 9. INSTALAÇÃO RÁPIDA

```bash
# 1. Clone o repositório
git clone [URL_DO_REPO]

# 2. Entre na pasta
cd portal-urubici

# 3. Instale dependências
npm install

# 4. Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais

# 5. Inicie o servidor de desenvolvimento
npm run dev

# 6. Acesse no navegador
# http://localhost:3000
```

---

## 10. CONTATOS E SUPORTE

### 10.1 Documentação Oficial

- **React**: https://react.dev
- **Supabase**: https://supabase.com/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev

### 10.2 Recursos Úteis

- **TypeScript**: https://www.typescriptlang.org/docs
- **React Router**: https://reactrouter.com
- **i18next**: https://www.i18next.com

---

## 📝 NOTAS IMPORTANTES

- Este projeto está em **desenvolvimento ativo**
- Algumas funcionalidades estão **pendentes de implementação**
- O banco de dados está **totalmente estruturado** e pronto para uso
- As **APIs estão funcionais** e documentadas
- O **frontend está 80% completo**

---

**Próximo arquivo**: [02-ARQUITETURA-TECNICA.md](./02-ARQUITETURA-TECNICA.md)
