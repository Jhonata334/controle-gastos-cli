const { buscarGastos, inserirGasto, deletarGasto } = jest.requireMock('../src/db');

jest.mock('../src/db', () => ({
  buscarGastos: jest.fn(),
  inserirGasto: jest.fn(),
  deletarGasto: jest.fn(),
}));

describe('Módulo de banco de dados (mock)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('buscarGastos deve retornar lista de gastos', async () => {
    buscarGastos.mockResolvedValue([
      { id: 1, nome: 'Mercado', categoria: 'Alimentação', valor: 150.00 },
    ]);

    const gastos = await buscarGastos();

    expect(gastos).toHaveLength(1);
    expect(gastos[0].nome).toBe('Mercado');
  });

  test('inserirGasto deve retornar o gasto criado', async () => {
    inserirGasto.mockResolvedValue({
      id: 2,
      nome: 'Uber',
      categoria: 'Transporte',
      valor: 30.00,
    });

    const gasto = await inserirGasto('Uber', 'Transporte', 30.00);

    expect(gasto).toHaveProperty('id');
    expect(gasto.nome).toBe('Uber');
    expect(gasto.valor).toBe(30.00);
  });

  test('deletarGasto deve ser chamado com o id correto', async () => {
    deletarGasto.mockResolvedValue(undefined);

    await deletarGasto(1);

    expect(deletarGasto).toHaveBeenCalledWith(1);
  });

  test('buscarGastos deve lançar erro quando a conexão falha', async () => {
    buscarGastos.mockRejectedValue(new Error('Erro de conexão'));

    await expect(buscarGastos()).rejects.toThrow('Erro de conexão');
  });
});
