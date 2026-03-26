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
* Usuários que preferem ferramentas simples e leves;
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
├── package.json
├── package-lock.json
├── eslint.config.mjs
├── gastos.json
└── README.md

---

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

Jhonata Ferreira

---

## 🔗 Repositório

https://github.com/Jhonata334/controle-gastos-cli
