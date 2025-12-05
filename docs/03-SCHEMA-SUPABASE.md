# 🗄️ SCHEMA DO SUPABASE - EXPORTAÇÃO COMPLETA
## Portal Turístico de Urubici - SC

---

## 📋 ÍNDICE

1. [Visão Geral do Schema](#1-visão-geral-do-schema)
2. [Tabelas Principais](#2-tabelas-principais)
3. [Tabelas de Relacionamento](#3-tabelas-de-relacionamento)
4. [Views](#4-views)
5. [Índices](#5-índices)
6. [Triggers e Functions](#6-triggers-e-functions)
7. [Row Level Security (RLS)](#7-row-level-security-rls)
8. [Dados Iniciais (Seeds)](#8-dados-iniciais-seeds)

---

## 1. VISÃO GERAL DO SCHEMA

### 1.1 Estatísticas

- **Total de Tabelas**: 34
- **Views**: 5
- **Índices**: 15+
- **Triggers**: 3
- **Functions**: 2
- **Policies (RLS)**: 10+

### 1.2 Diagrama de Relacionamentos

```
cities (1) ──────< (N) establishments
cities (1) ──────< (N) places
cities (1) ──────< (N) events

profiles (1) ────< (N) establishments (owner)
profiles (1) ────< (N) reviews
profiles (1) ────< (N) favorites
profiles (1) ────< (N) advertisements

categories (1) ──< (N) establishments
categories (1) ──< (N) places

establishments (1) ─< (N) reviews
establishments (1) ─< (N) favorites
establishments (1) ─< (1) medical_establishments
establishments (1) ─< (1) service_establishments

places (1) ──────< (N) reviews
places (1) ──────< (N) favorites
```

---

## 2. TABELAS PRINCIPAIS

### 2.1 CITIES (Cidades)

```sql
CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT DEFAULT 'Brasil',
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE cities IS 'Cidades cadastradas no sistema';
```

### 2.2 PROFILES (Perfis de Usuários)

```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user', -- 'user', 'admin', 'moderator', 'business_owner'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE profiles IS 'Perfis de usuários do sistema';
COMMENT ON COLUMN profiles.role IS 'Papel do usuário: user, admin, moderator, business_owner';
```

### 2.3 CATEGORIES (Categorias)

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  type TEXT NOT NULL, -- 'accommodation', 'restaurant', 'attraction', 'activity', 'medical', 'service'
  icon TEXT,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE categories IS 'Categorias hierárquicas do sistema';
COMMENT ON COLUMN categories.type IS 'Tipo: accommodation, restaurant, attraction, activity, medical, service';
```

### 2.4 ESTABLISHMENTS (Estabelecimentos)

```sql
CREATE TABLE establishments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id),
  subcategory TEXT,
  description TEXT,
  short_description TEXT,
  
  -- Localização
  address TEXT,
  neighborhood TEXT,
  city_id UUID REFERENCES cities(id),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Contato
  phone TEXT,
  whatsapp TEXT,
  email TEXT,
  website TEXT,
  instagram TEXT,
  facebook TEXT,
  
  -- Mídia
  logo_url TEXT,
  cover_image_url TEXT,
  images JSONB DEFAULT '[]',
  
  -- Horários e Informações
  opening_hours JSONB,
  amenities JSONB DEFAULT '[]',
  price_range TEXT, -- '$', '$$', '$$$', '$$$$'
  
  -- Classificação e Status
  rating DECIMAL(3, 2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  
  -- Metadados
  owner_id UUID REFERENCES profiles(id),
  views_count INTEGER DEFAULT 0,
  favorites_count INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE establishments IS 'Estabelecimentos comerciais e de serviços';
COMMENT ON COLUMN establishments.price_range IS 'Faixa de preço: $, $$, $$$, $$$$';
COMMENT ON COLUMN establishments.status IS 'Status: pending, approved, rejected';
```

### 2.5 PLACES (Lugares Turísticos)

```sql
CREATE TABLE places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id),
  type TEXT NOT NULL, -- 'attraction', 'activity'
  description TEXT,
  short_description TEXT,
  
  -- Localização
  address TEXT,
  city_id UUID REFERENCES cities(id),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Mídia
  cover_image_url TEXT,
  images JSONB DEFAULT '[]',
  
  -- Informações
  difficulty_level TEXT, -- 'easy', 'moderate', 'hard'
  duration TEXT,
  best_season TEXT,
  entry_fee TEXT,
  opening_hours JSONB,
  
  -- Classificação
  rating DECIMAL(3, 2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  
  views_count INTEGER DEFAULT 0,
  favorites_count INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE places IS 'Lugares turísticos e atrativos';
COMMENT ON COLUMN places.difficulty_level IS 'Nível de dificuldade: easy, moderate, hard';
```

### 2.6 MEDICAL_ESTABLISHMENTS (Estabelecimentos Médicos)

```sql
CREATE TABLE medical_establishments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  establishment_id UUID REFERENCES establishments(id) ON DELETE CASCADE,
  specialties TEXT[] DEFAULT '{}',
  accepts_insurance BOOLEAN DEFAULT false,
  insurance_plans TEXT[] DEFAULT '{}',
  emergency_service BOOLEAN DEFAULT false,
  online_consultation BOOLEAN DEFAULT false,
  crm TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE medical_establishments IS 'Informações específicas de estabelecimentos médicos';
```

### 2.7 SERVICE_ESTABLISHMENTS (Estabelecimentos de Serviços)

```sql
CREATE TABLE service_establishments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  establishment_id UUID REFERENCES establishments(id) ON DELETE CASCADE,
  service_types TEXT[] DEFAULT '{}',
  certifications TEXT[] DEFAULT '{}',
  delivery_available BOOLEAN DEFAULT false,
  online_service BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE service_establishments IS 'Informações específicas de estabelecimentos de serviços';
```

---

## 3. TABELAS DE RELACIONAMENTO

### 3.1 REVIEWS (Avaliações)

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  establishment_id UUID REFERENCES establishments(id) ON DELETE CASCADE,
  place_id UUID REFERENCES places(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  images JSONB DEFAULT '[]',
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT review_target CHECK (
    (establishment_id IS NOT NULL AND place_id IS NULL) OR
    (establishment_id IS NULL AND place_id IS NOT NULL)
  )
);

COMMENT ON TABLE reviews IS 'Avaliações de estabelecimentos e lugares';
```

### 3.2 FAVORITES (Favoritos)

```sql
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  establishment_id UUID REFERENCES establishments(id) ON DELETE CASCADE,
  place_id UUID REFERENCES places(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT favorite_target CHECK (
    (establishment_id IS NOT NULL AND place_id IS NULL) OR
    (establishment_id IS NULL AND place_id IS NOT NULL)
  ),
  UNIQUE(user_id, establishment_id),
  UNIQUE(user_id, place_id)
);

COMMENT ON TABLE favorites IS 'Favoritos dos usuários';
```

### 3.3 ADVERTISEMENTS (Anúncios)

```sql
CREATE TABLE advertisements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  link_url TEXT,
  advertiser_id UUID REFERENCES profiles(id),
  
  -- Configurações
  type TEXT NOT NULL, -- 'banner', 'featured', 'sponsored'
  placement TEXT, -- 'hero', 'sidebar', 'footer', 'inline'
  category_id UUID REFERENCES categories(id),
  
  -- Período
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected', 'expired'
  
  -- Métricas
  impressions_count INTEGER DEFAULT 0,
  clicks_count INTEGER DEFAULT 0,
  budget DECIMAL(10, 2),
  cost_per_click DECIMAL(10, 2),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE advertisements IS 'Anúncios e publicidade';
```

### 3.4 NEWS (Notícias)

```sql
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  cover_image_url TEXT,
  author_id UUID REFERENCES profiles(id),
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE news IS 'Notícias e artigos';
```

### 3.5 EVENTS (Eventos)

```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  cover_image_url TEXT,
  images JSONB DEFAULT '[]',
  
  -- Data e Local
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  address TEXT,
  city_id UUID REFERENCES cities(id),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Informações
  category TEXT,
  organizer TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  ticket_url TEXT,
  price TEXT,
  
  -- Status
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'upcoming', -- 'upcoming', 'ongoing', 'finished', 'cancelled'
  
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE events IS 'Eventos da cidade';
```

---

## 4. VIEWS

### 4.1 ESTABLISHMENTS_PUBLIC

```sql
CREATE VIEW establishments_public AS
SELECT 
  id, name, slug, category_id, subcategory, description, short_description,
  address, neighborhood, city_id, latitude, longitude,
  phone, whatsapp, email, website, instagram, facebook,
  logo_url, cover_image_url, images,
  opening_hours, amenities, price_range,
  rating, review_count, is_featured, is_verified,
  views_count, favorites_count,
  created_at, updated_at
FROM establishments
WHERE is_active = true AND status = 'approved';

COMMENT ON VIEW establishments_public IS 'View pública de estabelecimentos aprovados';
```

### 4.2 PLACES_PUBLIC

```sql
CREATE VIEW places_public AS
SELECT 
  id, name, slug, category_id, type, description, short_description,
  address, city_id, latitude, longitude,
  cover_image_url, images,
  difficulty_level, duration, best_season, entry_fee, opening_hours,
  rating, review_count, is_featured,
  views_count, favorites_count,
  created_at, updated_at
FROM places
WHERE is_active = true;

COMMENT ON VIEW places_public IS 'View pública de lugares turísticos ativos';
```

### 4.3 PARTNERS_PUBLIC

```sql
CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT,
  website TEXT,
  description TEXT,
  category TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE VIEW partners_public AS
SELECT id, name, logo_url, website, description, category, display_order
FROM partners
WHERE is_active = true
ORDER BY display_order;

COMMENT ON VIEW partners_public IS 'View pública de parceiros ativos';
```

---

## 5. ÍNDICES

```sql
-- Establishments
CREATE INDEX idx_establishments_category ON establishments(category_id);
CREATE INDEX idx_establishments_city ON establishments(city_id);
CREATE INDEX idx_establishments_slug ON establishments(slug);
CREATE INDEX idx_establishments_status ON establishments(status);
CREATE INDEX idx_establishments_featured ON establishments(is_featured) WHERE is_featured = true;
CREATE INDEX idx_establishments_active ON establishments(is_active) WHERE is_active = true;
CREATE INDEX idx_establishments_subcategory ON establishments(subcategory);

-- Places
CREATE INDEX idx_places_category ON places(category_id);
CREATE INDEX idx_places_city ON places(city_id);
CREATE INDEX idx_places_slug ON places(slug);
CREATE INDEX idx_places_type ON places(type);
CREATE INDEX idx_places_featured ON places(is_featured) WHERE is_featured = true;

-- Reviews
CREATE INDEX idx_reviews_establishment ON reviews(establishment_id);
CREATE INDEX idx_reviews_place ON reviews(place_id);
CREATE INDEX idx_reviews_user ON reviews(user_id);
CREATE INDEX idx_reviews_active ON reviews(is_active) WHERE is_active = true;

-- Advertisements
CREATE INDEX idx_ads_active ON advertisements(is_active) WHERE is_active = true;
CREATE INDEX idx_ads_category ON advertisements(category_id);
CREATE INDEX idx_ads_dates ON advertisements(start_date, end_date);

-- News
CREATE INDEX idx_news_published ON news(is_published) WHERE is_published = true;
CREATE INDEX idx_news_slug ON news(slug);

-- Events
CREATE INDEX idx_events_dates ON events(start_date, end_date);
CREATE INDEX idx_events_city ON events(city_id);
```

---

## 6. TRIGGERS E FUNCTIONS

### 6.1 Function: update_updated_at_column

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION update_updated_at_column IS 'Atualiza automaticamente o campo updated_at';
```

### 6.2 Triggers para updated_at

```sql
CREATE TRIGGER update_establishments_updated_at
  BEFORE UPDATE ON establishments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_places_updated_at
  BEFORE UPDATE ON places
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### 6.3 Function: update_review_count

```sql
CREATE OR REPLACE FUNCTION update_review_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.establishment_id IS NOT NULL THEN
      UPDATE establishments
      SET review_count = review_count + 1,
          rating = (SELECT AVG(rating) FROM reviews WHERE establishment_id = NEW.establishment_id AND is_active = true)
      WHERE id = NEW.establishment_id;
    ELSIF NEW.place_id IS NOT NULL THEN
      UPDATE places
      SET review_count = review_count + 1,
          rating = (SELECT AVG(rating) FROM reviews WHERE place_id = NEW.place_id AND is_active = true)
      WHERE id = NEW.place_id;
    END IF;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.establishment_id IS NOT NULL THEN
      UPDATE establishments
      SET review_count = review_count - 1,
          rating = (SELECT AVG(rating) FROM reviews WHERE establishment_id = OLD.establishment_id AND is_active = true)
      WHERE id = OLD.establishment_id;
    ELSIF OLD.place_id IS NOT NULL THEN
      UPDATE places
      SET review_count = review_count - 1,
          rating = (SELECT AVG(rating) FROM reviews WHERE place_id = OLD.place_id AND is_active = true)
      WHERE id = OLD.place_id;
    END IF;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION update_review_count IS 'Atualiza contagem e média de avaliações';
```

### 6.4 Trigger para review_count

```sql
CREATE TRIGGER update_establishment_review_count
  AFTER INSERT OR DELETE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_review_count();
```

---

## 7. ROW LEVEL SECURITY (RLS)

### 7.1 Habilitar RLS

```sql
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE establishments ENABLE ROW LEVEL SECURITY;
ALTER TABLE places ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE advertisements ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
```

### 7.2 Policies para ESTABLISHMENTS

```sql
-- Leitura pública de estabelecimentos aprovados
CREATE POLICY "Establishments públicos são visíveis para todos"
  ON establishments FOR SELECT
  USING (is_active = true AND status = 'approved');

-- Usuários podem criar establishments
CREATE POLICY "Usuários podem criar establishments"
  ON establishments FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

-- Proprietários podem atualizar seus establishments
CREATE POLICY "Proprietários podem atualizar seus establishments"
  ON establishments FOR UPDATE
  USING (auth.uid() = owner_id);

-- Admins podem ver todos
CREATE POLICY "Admins podem ver todos os establishments"
  ON establishments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

### 7.3 Policies para PLACES

```sql
CREATE POLICY "Places ativos são visíveis para todos"
  ON places FOR SELECT
  USING (is_active = true);
```

### 7.4 Policies para REVIEWS

```sql
CREATE POLICY "Reviews ativas são visíveis para todos"
  ON reviews FOR SELECT
  USING (is_active = true);

CREATE POLICY "Usuários autenticados podem criar reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar suas próprias reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);
```

### 7.5 Policies para FAVORITES

```sql
CREATE POLICY "Usuários podem ver seus próprios favoritos"
  ON favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem adicionar favoritos"
  ON favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem remover seus favoritos"
  ON favorites FOR DELETE
  USING (auth.uid() = user_id);
```

---

## 8. DADOS INICIAIS (SEEDS)

### 8.1 Cidade de Urubici

```sql
INSERT INTO cities (name, state, country, latitude, longitude, description)
VALUES (
  'Urubici',
  'Santa Catarina',
  'Brasil',
  -28.0136,
  -49.5919,
  'Conhecida como a cidade mais fria do Brasil, Urubici é um destino turístico de montanha com paisagens deslumbrantes, cachoeiras, vinícolas e rica gastronomia serrana.'
) ON CONFLICT DO NOTHING;
```

### 8.2 Categorias Principais

```sql
INSERT INTO categories (name, slug, type, icon, display_order) VALUES
('Hospedagem', 'hospedagem', 'accommodation', 'ri-hotel-line', 1),
('Gastronomia', 'gastronomia', 'restaurant', 'ri-restaurant-line', 2),
('Atrativos', 'atrativos', 'attraction', 'ri-map-pin-line', 3),
('Atividades', 'atividades', 'activity', 'ri-riding-line', 4),
('Saúde', 'saude', 'medical', 'ri-health-book-line', 5),
('Serviços', 'servicos', 'service', 'ri-service-line', 6)
ON CONFLICT (slug) DO NOTHING;
```

---

## 📝 SCRIPT COMPLETO DE EXPORTAÇÃO

Para exportar todo o schema, execute:

```bash
# Via Supabase CLI
supabase db dump -f schema-complete.sql

# Ou via pg_dump
pg_dump -h [HOST] -U [USER] -d [DATABASE] \
  --schema-only \
  --no-owner \
  --no-privileges \
  > schema-complete.sql
```

---

**Arquivo anterior**: [02-ARQUITETURA-TECNICA.md](./02-ARQUITETURA-TECNICA.md)
**Próximo arquivo**: [04-FEATURES-IMPLEMENTADAS.md](./04-FEATURES-IMPLEMENTADAS.md)
