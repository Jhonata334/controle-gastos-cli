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

```bash
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
```

> Obs: O arquivo `gastos.json` é gerado automaticamente pela aplicação para armazenar os dados localmente e não é versionado no repositório.

---

## ⚠️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado em sua máquina:

- Node.js (versão 18 ou superior)
- npm (geralmente já vem com o Node.js)
- Git

### ✔️ Verificar instalação

```bash
node -v
npm -v
git --version
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

## Instalação do Git

```bash
Windows (winget)
winget install Git.Git
```

## 📦 Instalação

## Clonar repositório
```bash
git clone https://github.com/Jhonata334/controle-gastos-cli.git
```
## Entrar na pasta
```bash
cd controle-gastos-cli
```
## Instalar dependências
```bash
npm install
```

---

## Problema comun no Windows (PowerShell)

Se aparecer erro relacionado à execução de script ao rodar o npm, execute:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Depois, feche e reabra o terminal.

---

## ▶️ Execução

```bash
npm start
```
ou se preferir
```bash
node src/index.js
```

---

## 🚀 Primeiro uso

Ao iniciar a aplicação:
1. Informe seu nome
2. Escolha uma opção no menu:
  - Adicionar gasto
  - Listar gastos
  - Remover gasto

---

## 💻 Exemplo de uso

```bash
Digite seu nome: Jhonata

Bem-vindo, Jhonata!

=== Controle de Gastos de Jhonata ===
1 - Adicionar gasto
2 - Listar gastos
3 - Ver total
4 - Remover gasto
5 - Ver maior gasto
6 - Sair
Escolha uma opção: 1
Nome do gasto: Celular
Categoria: Eletronico
Valor: 2000

Gasto adicionado!
```

---

## 🗑️ Resetar dados

Para apagar todos os dados salvos, basta excluir o arquivo:

gastos.json

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
