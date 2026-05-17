async function obterCotacaoDolar() {
    try {
        const response = await fetch(
            'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        );

        const data = await response.json();

        return {
            valor: data.USDBRL.bid
        };
    } catch (error) {
        throw new Error(
            'Erro ao obter cotação do dólar',
            { cause: error }
        );
    }
}

module.exports = {
    obterCotacaoDolar
};
