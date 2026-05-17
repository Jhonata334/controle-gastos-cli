const {
  adicionarGasto,
  calcularTotal,
  removerGasto,
  listarGastos,
  limparGastos
} = require('../src/gastos');

beforeEach(() => {
  limparGastos();
});

test('deve adicionar um gasto corretamente', () => {
  const gasto = adicionarGasto('Mercado', 'Alimentação', 100);

  expect(gasto.nome).toBe('Mercado');
  expect(listarGastos().length).toBe(1);
});

test('não deve aceitar valor negativo', () => {
  expect(() => {
    adicionarGasto('Teste', 'Outros', -50);
  }).toThrow();
});

test('deve calcular o total corretamente', () => {
  adicionarGasto('A', 'Cat', 50);
  adicionarGasto('B', 'Cat', 100);

  expect(calcularTotal()).toBe(150);
});

test('deve remover um gasto', () => {
  adicionarGasto('Teste', 'Cat', 50);

  removerGasto(0);

  expect(listarGastos().length).toBe(0);
});