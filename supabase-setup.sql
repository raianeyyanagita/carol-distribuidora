-- ============================================================================
-- Carol Distribuidora — Script de Criação do Banco de Dados (Supabase SQL)
-- Cole este código no "SQL Editor" do seu painel Supabase e clique em "Run"
-- ============================================================================

-- 1. Cria a tabela de produtos (panelas e suprimentos)
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'esmaltadas',
  category_label TEXT NOT NULL DEFAULT 'Carol Distribuidora',
  badge TEXT NOT NULL DEFAULT 'Destaque',
  badge_type TEXT NOT NULL DEFAULT 'fab',
  featured BOOLEAN NOT NULL DEFAULT true,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  colors JSONB DEFAULT '["#B85222", "#1C1510", "#C0C0C0"]'::jsonb,
  specs JSONB DEFAULT '["Atacado & Varejo"]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Cria a tabela de configurações gerais da loja (ex: foto de capa Hero)
CREATE TABLE IF NOT EXISTS public.store_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Habilita Row Level Security (RLS) com leitura pública e escrita pelo painel ADM
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso para a tabela products
DROP POLICY IF EXISTS "Leitura pública de produtos" ON public.products;
CREATE POLICY "Leitura pública de produtos"
  ON public.products FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Inserção e edição pelo Painel ADM" ON public.products;
CREATE POLICY "Inserção e edição pelo Painel ADM"
  ON public.products FOR ALL
  USING (true)
  WITH CHECK (true);

-- Políticas de acesso para a tabela store_settings
DROP POLICY IF EXISTS "Leitura pública de configurações" ON public.store_settings;
CREATE POLICY "Leitura pública de configurações"
  ON public.store_settings FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Edição de configurações pelo Painel ADM" ON public.store_settings;
CREATE POLICY "Edição de configurações pelo Painel ADM"
  ON public.store_settings FOR ALL
  USING (true)
  WITH CHECK (true);
