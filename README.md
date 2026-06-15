# 💸 Controle de Gastos

![CI](https://github.com/Jhonata334/controle-gastos-cli/actions/workflows/ci.yml/badge.svg)
![Versão](https://img.shields.io/badge/versão-2.0.0-8b5cf6)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?logo=supabase)
![License](https://img.shields.io/badge/licença-ISC-blue)

Aplicação **CLI + Web** para controle de gastos pessoais, desenvolvida em Node.js com persistência de dados em banco de dados PostgreSQL na nuvem (**Supabase**) e interface web publicada no Vercel.

---

## 🚀 Aplicação Publicada (Deploy)

> **🔗 [Acesse aqui a aplicação web](https://controle-gastos-cli-bootcamp.vercel.app)**

---

## 🎯 Problema

Muitas pessoas enfrentam dificuldades para controlar seus gastos diários, seja por falta de ferramentas simples ou por não manterem uma rotina de registro financeiro.

Essa falta de controle pode gerar:

* desorganização financeira;
* gastos desnecessários;
* dificuldade em economizar dinheiro.

---

## 💡 Solução

Esta aplicação oferece duas formas de uso:

- **Interface Web** — acesse pelo navegador, adicione e remova gastos com visual moderno, persistência em nuvem e cotação do dólar em tempo real.
- **Interface CLI** — use diretamente pelo terminal, com os mesmos dados sincronizados no banco de dados em nuvem.

---

## 👥 Público-alvo

* Pessoas que desejam organizar suas finanças pessoais;
* Estudantes;
* Usuários que preferem ferramentas leves;
* Iniciantes em controle financeiro.

---

## ⚙️ Funcionalidades

* 👤 Cadastro de usuário (CLI)
* ➕ Adição de gastos (CLI e Web)
* 📋 Listagem de gastos (CLI e Web)
* ❌ Remoção de gastos (CLI e Web)
* 💾 Persistência de dados em banco de dados PostgreSQL (Supabase)
* 💱 Consulta de cotação do dólar em tempo real (AwesomeAPI)
* 📊 Painel de resumo financeiro (Web)

---

## 🛠️ Tecnologias utilizadas

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 20+ |
| Linguagem | JavaScript (CommonJS) |
| Banco de dados | Supabase (PostgreSQL em nuvem) |
| Interface Web | HTML5 + CSS3 + JavaScript |
| Deploy Web | Vercel |
| Testes | Jest |
| Lint | ESLint |
| CI/CD | GitHub Actions |
| API externa | AwesomeAPI (cotação USD-BRL) |

---

## 📂 Estrutura do projeto

```bash
controle-gastos-cli/
├── .github/workflows/
│   └── ci.yml              # Pipeline de CI com GitHub Actions
├── src/
│   ├── api.js              # Integração com API de cotação do dólar
│   ├── db.js               # Módulo de acesso ao Supabase
│   ├── gastos.js           # Lógica de negócio (regras de gastos)
│   └── index.js            # Interface CLI (linha de comando)
├── tests/
│   ├── api.test.js         # Teste de integração com API (mock)
│   ├── db.test.js          # Teste de integração com banco (mock)
│   └── gastos.test.js      # Testes unitários da lógica de gastos
├── web/
│   └── index.html          # Interface Web (publicada no Vercel)
├── .gitignore
├── eslint.config.mjs       # Configuração do ESLint
├── package.json            # Dependências e scripts
├── package-lock.json
├── vercel.json             # Configuração de deploy no Vercel
└── README.md
```

---

## ⚠️ Pré-requisitos

* Node.js (versão 18 ou superior)
* npm
* Git
* Conta no [Supabase](https://supabase.com) (gratuita)

---

## 🗄️ Configuração do Banco de Dados (Supabase)

1. Crie um projeto gratuito em [supabase.com](https://supabase.com)
2. Vá em **SQL Editor** e execute o seguinte SQL:

```sql
CREATE TABLE gastos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  valor NUMERIC(10,2) NOT NULL CHECK (valor > 0),
  criado_em TIMESTAMPTZ DEFAULT NOW()
);
```

3. Vá em **Project Settings → API** e copie:
   - `Project URL` → sua `SUPABASE_URL`
   - `anon public` key → sua `SUPABASE_ANON_KEY`

---

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/Jhonata334/controle-gastos-cli.git

# Entrar na pasta
cd controle-gastos-cli

# Instalar dependências
npm install
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

> **Para a interface Web:** substitua `SUPABASE_URL_PLACEHOLDER` e `SUPABASE_ANON_KEY_PLACEHOLDER` no arquivo `web/index.html` com as suas credenciais.

---

## ▶️ Execução (CLI)

```bash
npm start
```
ou

```bash
node src/index.js
```

---

## 🌐 Execução (Web)

Acesse o link de deploy publicado no Vercel:

> **🔗 [controle-gastos-cli-bootcamp.vercel.app](https://controle-gastos-cli-bootcamp.vercel.app)**

Ou abra o arquivo `web/index.html` localmente no navegador após configurar as credenciais.

---

## 💻 Exemplo de uso (CLI)

```
Digite seu nome: Jhonata

Bem-vindo, Jhonata!

=== Controle de Gastos de Jhonata ===
1 - Adicionar gasto
2 - Listar gastos
3 - Ver total
4 - Remover gasto
5 - Ver maior gasto
6 - Ver cotação do dólar
7 - Sair
Escolha uma opção: 1
Nome do gasto: Mercado
Categoria: Alimentação
Valor: 250

Gasto adicionado!
```

---

## 🧪 Testes automatizados

```bash
npm test
```

O projeto possui **9 testes automatizados** cobrindo:

| Arquivo | O que testa |
|---|---|
| `gastos.test.js` | Lógica de negócio: adicionar, calcular total, remover, validar entradas |
| `api.test.js` | Integração com a API de cotação (mock) |
| `db.test.js` | Integração com o banco de dados Supabase (mock) |

---

## 🧹 Lint (qualidade de código)

```bash
npm run lint
```

---

## 🔌 Integração com API Pública

O sistema utiliza a [AwesomeAPI](https://docs.awesomeapi.com.br/) para consultar a cotação atual do dólar em tempo real.

```
GET https://economia.awesomeapi.com.br/json/last/USD-BRL
```

---

## 🗄️ Banco de Dados em Nuvem

A partir da versão **2.0.0**, os dados são persistidos no **Supabase** (PostgreSQL na nuvem), substituindo o armazenamento local em `gastos.json`.

**Benefícios:**
- Dados acessíveis de qualquer dispositivo
- Persistência real mesmo ao fechar o terminal
- Sincronização entre a interface CLI e a interface Web

---

## 🔄 Integração Contínua (CI)

O projeto usa **GitHub Actions** para validação automática a cada `push` ou `pull request`:

```
✅ Instalar dependências
✅ Rodar lint (ESLint)
✅ Executar todos os testes (Jest)
```

---

## 🔢 Versionamento

Versão atual: **2.0.0**

Seguindo o padrão **SemVer (MAJOR.MINOR.PATCH)**:

- `2.0.0` — Integração com banco de dados Supabase + interface web + deploy

---

## 👨‍💻 Equipe

| Nome | Matrícula | GitHub |
|---|---|---|
| Jhonata Ferreira de Araujo | 22504272 | [@Jhonata334](https://github.com/Jhonata334) |

---

## 🔗 Links

- **Repositório:** https://github.com/Jhonata334/controle-gastos-cli
- **Deploy Web:** https://controle-gastos-cli-bootcamp.vercel.app
- **Banco de dados:** [Supabase](https://supabase.com)
