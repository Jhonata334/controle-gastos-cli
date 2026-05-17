const { obterCotacaoDolar } = require('../src/api');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        USDBRL: {
          bid: '5.10'
        }
      })
  })
);

describe('Integração com API de cotação', () => {
  test('deve retornar a cotação do dólar', async () => {
    const resultado = await obterCotacaoDolar();

    expect(resultado).toHaveProperty('valor');
    expect(resultado.valor).toBe('5.10');
  });
});