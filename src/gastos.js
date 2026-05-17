let gastos = [];

function adicionarGasto(nome, categoria, valor) {
  if (!nome || !categoria) throw new Error('Dados inválidos');
  if (valor <= 0) throw new Error('Valor inválido');

  const novoGasto = {
    id: Date.now(),
    nome,
    categoria,
    valor
  };

  gastos.push(novoGasto);
  return novoGasto;
}

function calcularTotal() {
  return gastos.reduce((acc, g) => acc + g.valor, 0);
}

function removerGasto(index) {
  if (index < 0 || index >= gastos.length) {
    throw new Error('Índice inválido');
  }

  return gastos.splice(index, 1);
}

function listarGastos() {
  return gastos;
}

function limparGastos() {
  gastos = [];
}

module.exports = {
  adicionarGasto,
  calcularTotal,
  removerGasto,
  listarGastos,
  limparGastos
};