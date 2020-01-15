// export const fetchDailyValue = (symbol, days) => {
//     return $.ajax({
//         url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=${days}`
//     })
// }

export const fetchCryptoHist = (cryptoId) => (
    $.ajax({
        url: `api/cryptoshist/${cryptoId}`
    })
)

export const fetchCrypto = (cryptoId) => (
    $.ajax({
        url: `api/cryptos/${cryptoId}`
    })
)

export const fetchCryptos = () => (
    $.ajax({
        url: 'api/cryptos'
    })
)