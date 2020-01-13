import * as CryptoApiUtil from '../util/crypto_api_util';

export const RECEIVE_CRYPTO_HIST = 'RECEIVE_CRYPTO_HIST';
export const RECEIVE_CRYPTO = 'RECEIVE_CRYPTO';
export const RECEIVE_CRYPTOS = 'RECEIVE_CRYPTOS';

const receiveCryptoHist = crypto => ({
    type: RECEIVE_CRYPTO_HIST,
    crypto
});

const receiveCrypto = crypto => ({
    type: RECEIVE_CRYPTO,
    crypto
});

const receiveCryptos = cryptos => ({
    type: RECEIVE_CRYPTOS,
    cryptos
});

export const fetchCryptoHist = (cryptoId) => dispatch => (
    CryptoApiUtil.fetchCryptoHist(cryptoId)
        .then(cryptoValues => dispatch(receiveCryptoHist(cryptoValues)))
);

export const fetchCrypto = (cryptoId) => dispatch => (
    CryptoApiUtil.fetchCrypto(cryptoId)
        .then(crypto => dispatch(receiveCrypto(crypto)))
)

export const fetchCryptos = () => dispatch => (
    CryptoApiUtil.fetchCryptos()
        .then(cryptos => dispatch(receiveCryptos(cryptos)))
)