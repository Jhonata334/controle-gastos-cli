# 💸 Controle de Gastos CLI

![CI](https://github.com/Jhonata334/controle-gastos-cli/actions/workflows/ci.yml/badge.svg)

Aplicação em linha de comando (CLI) desenvolvida em Node.js para auxiliar no controle de gastos pessoais de forma simples, rápida e acessível.

---

## 🎯 Problema

Muitas pessoas enfrentam dificuldades para controlar seus gastos diários, seja por falta de ferramentas simples ou por não manterem uma rotina de registro financeiro.

Essa falta de controle pode gerar:

* desorganização financeira;
* gastos desnecessários;
* dificuldade em economizar dinheiro.

---

## 💡 Solução

Esta aplicação oferece uma forma simples de registrar e gerenciar gastos diretamente pelo terminal, permitindo ao usuário:

* registrar despesas rapidamente;
* visualizar seus gastos;
* remover registros incorretos;
* manter um histórico básico em arquivo local.

---

## 👥 Público-alvo

* Pessoas que desejam organizar suas finanças pessoais;
* Estudantes;
* Usuários que preferem ferramentas leves;
* Iniciantes em controle financeiro.

---

## ⚙️ Funcionalidades

* 👤 Cadastro de usuário
* ➕ Adição de gastos
* 📋 Listagem de gastos
* ❌ Remoção de gastos
* 💾 Persistência de dados em JSON

---

## 🛠️ Tecnologias utilizadas

* Node.js
* JavaScript
* Jest (testes automatizados)
* ESLint (análise estática)
* GitHub Actions (CI/CD)

---

## 📂 Estrutura do projeto

controle-gastos-cli/
├── .github/workflows/
│   └── ci.yml
├── src/
│   ├── index.js
│   └── gastos.js
├── tests/
│   └── gastos.test.js
├── .gitignore
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── README.md

> Obs: O arquivo `gastos.json` é gerado automaticamente pela aplicação para armazenar os dados localmente e não é versionado no repositório.

---

## ⚠️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- Node.js (versão 18 ou superior)
- npm (geralmente já vem com o Node.js)

### ✔️ Verificar instalação

```bash
node -v
npm -v
```

## 🌐 Instalação via navegador (web)

Acesse o site oficial e baixe a versão LTS:

https://nodejs.org/


## 💻 Instalação via terminal

Windows (winget)
```bash
winget install OpenJS.NodeJS.LTS
```

Windows (chocolatey)
```bash
choco install nodejs-lts
```

Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install -y nodejs npm
```

macOS (Homebrew)
```bash
brew install node
```

## 📦 Instalação

```bash
git clone https://github.com/Jhonata334/controle-gastos-cli.git
cd controle-gastos-cli
npm install
```

---

## ▶️ Execução

```bash
npm start
```

---

## 💻 Exemplo de uso

```bash
Digite seu nome: Jhonata

1 - Adicionar gasto
2 - Listar gastos
3 - Remover gasto

Escolha uma opção: 1

Descrição: Mercado
Valor: 150

Gasto adicionado com sucesso!
```

---

## 🧪 Testes automatizados

```bash
npm test
```

---

## 🧹 Lint (qualidade de código)

```bash
npm run lint
```

---

## 🔄 Integração Contínua (CI)

O projeto utiliza GitHub Actions para:

* instalar dependências automaticamente
* rodar lint
* executar testes

A cada push ou pull request.

---

## 🔢 Versionamento

Versão atual:

1.0.0

Seguindo o padrão **SemVer (MAJOR.MINOR.PATCH)**.

---

## 👨‍💻 Autor

Jhonata Araujo

---

## 🔗 Repositório

https://github.com/Jhonata334/controle-gastos-cli
