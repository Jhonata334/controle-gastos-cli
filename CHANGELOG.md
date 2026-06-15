# Changelog

Todas as mudanças notáveis neste projeto serão documentadas aqui.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
e o projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [2.0.0] - 2026-06-15

### Adicionado
- Integração com banco de dados **Supabase** (PostgreSQL na nuvem)
- Novo módulo `src/db.js` com funções de acesso ao banco (`buscarGastos`, `inserirGasto`, `deletarGasto`)
- Interface **Web** em `web/index.html` com design moderno dark mode
- Deploy da aplicação web no **Vercel**
- Configuração de deploy `vercel.json`
- Testes de integração para o módulo de banco de dados (`tests/db.test.js`)
- Variáveis de ambiente para credenciais do Supabase
- Suporte a `SUPABASE_URL` e `SUPABASE_ANON_KEY` no CI

### Modificado
- `src/index.js` — CLI agora persiste dados no Supabase em vez de arquivo JSON local
- `package.json` — adicionado `@supabase/supabase-js` como dependência de produção
- `README.md` — documentação completa com nova stack, banco de dados e instruções de deploy
- `.github/workflows/ci.yml` — pipeline atualizado com secrets do Supabase

### Removido
- Persistência em arquivo local `gastos.json` (substituída pelo Supabase)

---

## [1.1.0] - 2026-05-20

### Adicionado
- Integração com a **AwesomeAPI** para cotação do dólar (USD-BRL) em tempo real
- Nova opção no menu CLI: "Ver cotação do dólar"
- Módulo `src/api.js` com função `obterCotacaoDolar()`
- Teste de integração com mock da API (`tests/api.test.js`)
- Fluxo profissional: Issue → Branch `entrega-intermediaria` → Pull Request → Merge

---

## [1.0.0] - 2026-05-05

### Adicionado
- Interface CLI funcional com menu interativo
- Funcionalidades: adicionar, listar, remover gastos e calcular total
- Persistência local em arquivo `gastos.json`
- Módulo `src/gastos.js` com regras de negócio
- Testes unitários com **Jest** (`tests/gastos.test.js`)
- Análise estática com **ESLint**
- Pipeline de CI com **GitHub Actions**
- `README.md` completo com instruções de instalação e uso
- Versionamento semântico com `package.json`
