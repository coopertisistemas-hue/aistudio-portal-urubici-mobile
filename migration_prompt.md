Você é o assistente de engenharia do projeto **Portal Urubici PC – Guia de Serviços**.

**Objetivo:** Migrar uma página de subcategoria do Guia de Serviços para o novo padrão de arquitetura, usando a página **Lavanderia e Costura** (`src/pages/guia-servicos/servicos-domesticos-limpeza/lavanderia-costura`) como **TEMPLATE DE REFERÊNCIA**, sem alterá-la.

A migração de cada página deve SEMPRE seguir DUAS ETAPAS, nesta ordem:

1. **RESET COMPLETO** do Caminho Alvo (apagar tudo que é específico dessa subcategoria).
2. **CRIAÇÃO DE UMA NOVA PÁGINA** do zero, seguindo o padrão de Lavanderia e Costura e as configurações fornecidas.

---

## 1. CONFIGURAÇÕES DA NOVA PÁGINA (PREENCHER ANTES DE EXECUTAR)

- **Nome da Página (subcategoria):**  
  `[NOME DA PÁGINA]`  
  Ex.: `Limpeza e Jardinagem`, `Beleza e Estética`

- **Caminho Alvo (Target Path):**  
  `src/pages/guia-servicos/[PASTA_CATEGORIA]/[PASTA_SUBCATEGORIA]`  
  Ex.: `src/pages/guia-servicos/servicos-domesticos-limpeza/limpeza-jardinagem`

- **Slug da API (subcategory):**  
  `[slug-da-subcategoria]`  
  Ex.: `limpeza-jardinagem`, `beleza-estetica`

- **Título da Página (subcategoria):**  
  `[Título da página]`  
  Ex.: `Limpeza e Jardinagem`

- **Subtítulo da Hero (descrição curta):**  
  `[Descrição da subcategoria]`  
  Ex.: `Serviços de limpeza residencial, comercial e jardinagem em Urubici e região`

- **Ícone Principal da Subcategoria (Remix Icon):**  
  `[ex.: ri-leaf-line, ri-scissors-2-line]`

- **Cor de Destaque da Subcategoria (Tailwind):**  
  `[ex.: text-emerald-400, text-rose-400]`  
  > Usar apenas em elementos específicos da subcategoria (ícones, badges, chips), sem alterar a paleta global do Portal (Hero principal) nem do footer.

- **Grupos de Classificação (para Cabeçalhos + Atalhos):**  
  > Esses grupos serão usados para:
  > - gerar cabeçalhos de seção na lista de estabelecimentos  
  > - gerar os Atalhos Rápidos (chips)  
  > - ordenar tudo alfabeticamente

  - Grupo 1: `[Nome do Grupo 1]` — Keywords: `[palavras-chave 1, 2, 3...]`  
  - Grupo 2: `[Nome do Grupo 2]` — Keywords: `[palavras-chave 1, 2, 3...]`  
  - Grupo 3: (opcional) `[Nome do Grupo 3]` — Keywords: `[...]`  
  - Grupo 4: (opcional) `[Nome do Grupo 4]` — Keywords: `[...]`  

---

## 2. ETAPA 1 – RESET COMPLETO DO CAMINHO ALVO

**Nessa etapa, você NÃO deve criar nada novo. Apenas limpar.**

1. Localize o diretório do **Caminho Alvo**, por exemplo:  
   `src/pages/guia-servicos/servicos-domesticos-limpeza/limpeza-jardinagem`

2. Dentro desse diretório, **APAGUE COMPLETAMENTE TUDO que for específico dessa subcategoria**, incluindo:
   - arquivo da página (`page.tsx` ou equivalente),
   - pasta `hooks/` local,
   - pasta `components/` local,
   - pasta `utils/` local,
   - quaisquer outros arquivos auxiliares existentes dentro desse diretório.

3. Se necessário, você pode remover o diretório da subcategoria inteiro e recriá-lo vazio, garantindo que:
   - **não reste nenhum arquivo ou referência antiga** dessa subcategoria no frontend.

4. **NÃO APAGUE e NÃO ALTERE**:
   - a página **Lavanderia e Costura**,
   - a Golden Master (Supermercados e Mercearias),
   - a página de Oficinas Mecânicas,
   - outros diretórios de subcategorias,
   - componentes globais compartilhados (header, footer, etc.).

5. Ao final da **ETAPA 1**, o `Caminho Alvo` deve existir como diretório vazio (ou apenas com as pastas recriadas), sem nenhum código legado da implementação anterior.

Registre no log um resumo do que foi apagado e confirme que o diretório foi limpo.

---

## 3. ETAPA 2 – CRIAR A NOVA PÁGINA A PARTIR DO TEMPLATE (LAVANDERIA E COSTURA)

Agora, com o `Caminho Alvo` limpo, crie uma nova página do zero, usando **Lavanderia e Costura** como modelo de referência:

- Template de referência (NÃO ALTERAR):  
  `src/pages/guia-servicos/servicos-domesticos-limpeza/lavanderia-costura`

A página da nova subcategoria deve se comportar como uma “irmã” de Lavanderia e Costura, apenas com textos, ícone, cor de destaque, slug e grupos adaptados às configurações.

### 3.1. Estrutura de diretórios

No **Caminho Alvo**, recrie a estrutura básica:
- `page.tsx`
- `hooks/`
- `components/`
- `utils/`

### 3.2. Hook de estabelecimentos (`useEstablishments`)

1. Crie em `hooks/` um hook equivalente ao `useEstablishments` usado em Lavanderia e Costura.
2. Esse hook deve:
   - consumir a Edge Function `public-services-api`,
   - usar:
     - `subcategory = [Slug da API configurado]`,
     - `city = "Urubici"` (padrão, a menos que explicitamente mudado),
   - tratar estados de `loading`, `error` e lista vazia da mesma forma que Lavanderia e Costura.

3. **Nenhum dado mockado** pode ser usado. Todos os estabelecimentos dessa página devem vir da API.

### 3.3. Módulo de classificação (`classification.ts` ou similar em `utils/`)

1. Crie um util de classificação semelhante ao de Lavanderia e Costura.
2. A função de classificação deve:
   - receber a lista de estabelecimentos da subcategoria,
   - atribuir a cada estabelecimento um **grupo** com base:
     - em campos estruturados (tipo, tags), se existirem,
     - nas **keywords** definidas para cada grupo nas configurações.

3. A saída deve ser algo como:  
   `grupo → lista de estabelecimentos`.

4. Regras obrigatórias:
   - Os nomes dos grupos exibidos na interface devem ser **exatamente** os definidos em “Grupos de Classificação”.
   - Apenas grupos com pelo menos 1 estabelecimento devem ser exibidos.
   - A lista de grupos exibidos deve ser ordenada **alfabeticamente pelo nome do grupo**.
   - Dentro de cada grupo, os estabelecimentos devem ser ordenados **alfabeticamente pelo nome**.

### 3.4. Lista com Cabeçalhos + Atalhos Rápidos

1. Na listagem de estabelecimentos da nova página:
   - Renderize um **cabeçalho de seção** para cada grupo com pelo menos 1 estabelecimento.
   - Abaixo de cada cabeçalho, liste os cards dos estabelecimentos pertencentes àquele grupo.

2. A ordem dos cabeçalhos de grupo deve seguir a **ordem alfabética dos nomes de grupos**.

3. Na seção de **Atalhos Rápidos**:
   - Gere um chip/atalho para cada grupo ativo (com estabelecimentos).
   - Use como label do atalho exatamente o nome do grupo.
   - Exiba os atalhos na mesma ordem alfabética dos cabeçalhos.

4. Ao clicar em um atalho:
   - Leve o usuário diretamente para a seção/cabeçalho daquele grupo (scroll ou comportamento padrão adotado no Guia).

### 3.5. `EstablishmentCard` da nova subcategoria

1. Crie um card de estabelecimentos equivalente ao de Lavanderia e Costura.
2. Regra de imagem:
   - se `image_url` existir e for válida → exibir a **logo** do estabelecimento,
   - se `image_url` NÃO existir → exibir um avatar/fallback com o **Ícone Principal da Subcategoria**, usando a **Cor de Destaque** configurada, dentro de um container visual consistente.

3. Mantenha o mesmo layout de informações (nome, descrição, endereço, CTAs) do padrão atual.

### 3.6. Seção “Cadastre seu [tipo de negócio]”

1. Baseie-se na seção de cadastro de Lavanderia e Costura.
2. Mantenha:
   - layout,
   - estilo (Glassmorphism),
   - hierarquia de títulos e botões.

3. Adapte apenas os textos para o contexto da nova subcategoria, por exemplo:
   - Título: “Cadastre seu [tipo de negócio]”
   - Subtítulo: explicando que o estabelecimento será exibido no Guia de Serviços.
   - CTA principal: “Quero cadastrar meu negócio”.

### 3.7. Hero Global + Bloco da Subcategoria

1. A Hero global “Portal Urubici / Guia de Serviços” deve:
   - usar o mesmo componente global das demais páginas (não criar variação local),
   - manter a mesma paleta do Portal.

2. No bloco específico da subcategoria:
   - usar o **Ícone Principal** configurado,
   - usar o **Título** e **Subtítulo** configurados,
   - aplicar a **Cor de Destaque da Subcategoria** apenas em elementos específicos (ícone/badge/tags), sem alterar o padrão global.

### 3.8. Footer

1. Use o mesmo componente global de footer utilizado em Lavanderia, Oficinas e Supermercados.
2. Não criar um footer local.
3. Não alterar a paleta nem conteúdo global do footer.

---

## 4. VERIFICAÇÃO FINAL

Antes de concluir a migração dessa subcategoria, verifique:

1. **Reset:**
   - Confirme que o diretório do Caminho Alvo foi efetivamente limpo e recriado.
   - Nenhum arquivo antigo da implementação anterior permanece.

2. **API:**
   - A Edge Function `public-services-api` está sendo chamada com o **Slug da API** configurado.
   - Não há dados mockados sendo usados na página.

3. **Grupos + Atalhos:**
   - Os grupos exibidos vêm da classificação definida nas configurações e/ou dados da API.
   - Os cabeçalhos de grupos aparecem em **ordem alfabética**.
   - Dentro de cada grupo, os estabelecimentos aparecem em **ordem alfabética pelo nome**.
   - Os Atalhos Rápidos usam os mesmos nomes de grupos, na mesma ordem alfabética, e levam o usuário à seção correta.

4. **Visual:**
   - A página se comporta como uma “irmã” da Lavanderia e Costura:
     - mesma estrutura de seções,
     - mesmo padrão de cards,
     - mesma lógica de logo + fallback,
     - Hero global e footer idênticos às demais páginas do Guia.

Execute **APENAS** essas duas etapas (reset completo + recriação baseada no template) para a subcategoria configurada, sem alterar nenhuma outra página do Guia de Serviços.
