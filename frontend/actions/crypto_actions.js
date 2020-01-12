import * as CryptoApiUtil from '../util/crypto_api_util';

export const RECEIVE_CRYPTO_HIST = 'RECEIVE_CRYPTO_HIST';
export const RECEIVE_CRYPTO = 'RECEIVE_CRYPTO';

const receiveCryptoHist = crypto => ({
    type: RECEIVE_CRYPTO_HIST,
    crypto
});

const receiveCrypto = crypto => ({
    type: RECEIVE_CRYPTO,
    crypto
});

export const fetchCryptoHist = (cryptoId) => dispatch => (
    CryptoApiUtil.fetchCryptoHist(cryptoId)
        .then(cryptoValues => dispatch(receiveCryptoHist(cryptoValues)))
);

export const fetchCrypto = (cryptoId) => dispatch => (
    CryptoApiUtil.fetchCrypto(cryptoId)
        .then(crypto => dispatch(receiveCrypto(crypto)))
)