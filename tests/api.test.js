const { obterCotacaoDolar } = require('../src/api');

describe('Integração com API de cotação', () => {
  test('deve retornar a cotação do dólar', async () => {
    const resultado = await obterCotacaoDolar();

    expect(resultado).toHaveProperty('valor');
    expect(Number(resultado.valor)).toBeGreaterThan(0);
  });
});