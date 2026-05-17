const readline = require('readline');
const fs = require('fs');

const FILE_PATH = 'gastos.json';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let usuario = '';
let gastos = [];

// Arquivo de dados
function carregarGastos() {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH);
    gastos = JSON.parse(data);
  }
}

function salvarGastos() {
  fs.writeFileSync(FILE_PATH, JSON.stringify(gastos, null, 2));
}

// Iniciar o programa
function iniciar() {
  carregarGastos();

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
  console.log('6 - Sair');

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
      rl.question('Valor: ', (valor) => {
        const valorNumero = Number(valor);

        if (isNaN(valorNumero) || valorNumero <= 0) {
          console.log('Valor inválido!');
          return mostrarMenu();
        }

        const novoGasto = {
          id: Date.now(),
          nome,
          categoria,
          valor: valorNumero
        };

        gastos.push(novoGasto);
        salvarGastos();

        console.log('Gasto adicionado!');
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
        `${i + 1}. ${g.nome} | ${g.categoria} | R$ ${g.valor}`
      );
    });
  }

  mostrarMenu();
}

function calcularTotal() {
  const total = gastos.reduce((acc, g) => acc + g.valor, 0);
  console.log(`Total: R$ ${total}`);
  mostrarMenu();
}

function maiorGasto() {
  if (gastos.length === 0) {
    console.log('Nenhum gasto cadastrado.');
    return mostrarMenu();
  }

  const maior = gastos.reduce((prev, atual) =>
    atual.valor > prev.valor ? atual : prev
  );

  console.log(
    `Maior gasto: ${maior.nome} (${maior.categoria}) - R$ ${maior.valor}`
  );

  mostrarMenu();
}

function removerGasto() {
  if (gastos.length === 0) {
    console.log('Não há gastos para remover.');
    return mostrarMenu();
  }

  listarGastosSemMenu();

  rl.question('Digite o número do gasto: ', (num) => {
    const index = Number(num) - 1;

    if (index < 0 || index >= gastos.length) {
      console.log('Opção inválida!');
      return mostrarMenu();
    }

    const gasto = gastos[index];

    rl.question(
      `Tem certeza que deseja remover "${gasto.nome}"? (s/n): `,
      (resp) => {
        if (resp.toLowerCase() === 's') {
          gastos.splice(index, 1);
          salvarGastos();
          console.log('Gasto removido!');
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
    console.log(`${i + 1}. ${g.nome} - R$ ${g.valor}`);
  });
}

// Iniciar o programa
iniciar();