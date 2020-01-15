export const SET_DEFAULT_CRYPTO = 'SET_DEFAULT_CRYPTO';

export const setDefaultCrypto = (symbol, name) => {
    return {
        type: SET_DEFAULT_CRYPTO,
        symbol,
        name
    };
};