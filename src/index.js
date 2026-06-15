const readline = require('readline');
const { obterCotacaoDolar } = require('./api');
const db = require('./db');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let usuario = '';
let gastos = [];

// Carregar gastos do banco de dados
async function carregarGastos() {
  try {
    gastos = await db.buscarGastos();
  } catch {
    console.log('Aviso: sem conexão com o banco. Operando com dados locais.');
    gastos = [];
  }
}

// Iniciar o programa
async function iniciar() {
  await carregarGastos();

  rl.question('Digite seu nome: ', (nome) => {
    if (!nome.trim()) {
      console.log('Nome inválido!');
      return iniciar();
    }

    usuario = nome;
    console.log(`\nBem-vindo, ${usuario}!`);
    mostrarMenu();
  });
}

// Menu principal
function mostrarMenu() {
  console.log(`\n=== Controle de Gastos de ${usuario} ===`);
  console.log('1 - Adicionar gasto');
  console.log('2 - Listar gastos');
  console.log('3 - Ver total');
  console.log('4 - Remover gasto');
  console.log('5 - Ver maior gasto');
  console.log('6 - Ver cotação do dólar');
  console.log('7 - Sair');

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        adicionarGasto();
        break;
      case '2':
        listarGastos();
        break;
      case '3':
        calcularTotal();
        break;
      case '4':
        removerGasto();
        break;
      case '5':
        maiorGasto();
        break;
      case '6':
        mostrarCotacaoDolar();
        break;
      case '7':
        rl.close();
        break;
      default:
        console.log('Opção inválida');
        mostrarMenu();
    }
  });
}

// Funções do menu
function adicionarGasto() {
  rl.question('Nome do gasto: ', (nome) => {
    if (!nome.trim()) {
      console.log('Nome inválido!');
      return mostrarMenu();
    }

    rl.question('Categoria: ', (categoria) => {
      rl.question('Valor: ', async (valor) => {
        const valorNumero = Number(valor);

        if (isNaN(valorNumero) || valorNumero <= 0) {
          console.log('Valor inválido!');
          return mostrarMenu();
        }

        try {
          const novoGasto = await db.inserirGasto(nome.trim(), categoria.trim(), valorNumero);
          gastos.push(novoGasto);
          console.log('Gasto adicionado!');
        } catch {
          console.log('Erro ao salvar no banco. Adicionando localmente.');
          gastos.push({ id: Date.now(), nome: nome.trim(), categoria: categoria.trim(), valor: valorNumero });
        }

        mostrarMenu();
      });
    });
  });
}

function listarGastos() {
  console.log('\nLista de gastos:');

  if (gastos.length === 0) {
    console.log('Nenhum gasto cadastrado.');
  } else {
    gastos.forEach((g, i) => {
      console.log(
        `${i + 1}. ${g.nome} | ${g.categoria} | R$ ${Number(g.valor).toFixed(2)}`
      );
    });
  }

  mostrarMenu();
}

function calcularTotal() {
  const total = gastos.reduce((acc, g) => acc + Number(g.valor), 0);
  console.log(`Total: R$ ${total.toFixed(2)}`);
  mostrarMenu();
}

function maiorGasto() {
  if (gastos.length === 0) {
    console.log('Nenhum gasto cadastrado.');
    return mostrarMenu();
  }

  const maior = gastos.reduce((prev, atual) =>
    Number(atual.valor) > Number(prev.valor) ? atual : prev
  );

  console.log(
    `Maior gasto: ${maior.nome} (${maior.categoria}) - R$ ${Number(maior.valor).toFixed(2)}`
  );

  mostrarMenu();
}

async function removerGasto() {
  if (gastos.length === 0) {
    console.log('Não há gastos para remover.');
    return mostrarMenu();
  }

  listarGastosSemMenu();

  rl.question('Digite o número do gasto: ', async (num) => {
    const index = Number(num) - 1;

    if (index < 0 || index >= gastos.length) {
      console.log('Opção inválida!');
      return mostrarMenu();
    }

    const gasto = gastos[index];

    rl.question(
      `Tem certeza que deseja remover "${gasto.nome}"? (s/n): `,
      async (resp) => {
        if (resp.toLowerCase() === 's') {
          try {
            await db.deletarGasto(gasto.id);
            gastos.splice(index, 1);
            console.log('Gasto removido!');
          } catch {
            console.log('Erro ao remover do banco.');
          }
        } else {
          console.log('Operação cancelada.');
        }

        mostrarMenu();
      }
    );
  });
}

function listarGastosSemMenu() {
  console.log('\nLista de gastos:');
  gastos.forEach((g, i) => {
    console.log(`${i + 1}. ${g.nome} - R$ ${Number(g.valor).toFixed(2)}`);
  });
}

async function mostrarCotacaoDolar() {
  try {
    const cotacao = await obterCotacaoDolar();

    console.log(
      `\nCotação atual do dólar: R$ ${cotacao.valor}\n`
    );
  } catch {
    console.log('Erro ao consultar cotação.');
  }

  mostrarMenu();
}

// Iniciar o programa
iniciar();