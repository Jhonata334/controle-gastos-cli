-- ============================================================
-- Execute este SQL no Supabase SQL Editor para liberar o acesso
-- Supabase Dashboard → SQL Editor → New Query → Cole e Execute
-- ============================================================

-- 1. Habilitar RLS na tabela (caso não esteja)
ALTER TABLE gastos ENABLE ROW LEVEL SECURITY;

-- 2. Permitir SELECT para todos (leitura pública)
CREATE POLICY "Permitir leitura pública"
  ON gastos FOR SELECT
  USING (true);

-- 3. Permitir INSERT para todos (inserção pública)
CREATE POLICY "Permitir inserção pública"
  ON gastos FOR INSERT
  WITH CHECK (true);

-- 4. Permitir DELETE para todos (remoção pública)
CREATE POLICY "Permitir remoção pública"
  ON gastos FOR DELETE
  USING (true);

-- ============================================================
-- Se quiser recriar a tabela do zero (caso ainda não exista):
-- ============================================================
-- CREATE TABLE IF NOT EXISTS gastos (
--   id        BIGSERIAL PRIMARY KEY,
--   nome      TEXT        NOT NULL,
--   categoria TEXT        NOT NULL,
--   valor     NUMERIC(10,2) NOT NULL CHECK (valor > 0),
--   criado_em TIMESTAMPTZ DEFAULT NOW()
-- );
