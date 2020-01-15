import { SET_DEFAULT_CRYPTO } from '../actions/default_crypto_actions';

export default function defaultCryptoReducer(state = null, action) {
    switch (action.type) {
        case SET_DEFAULT_CRYPTO:
            return Object.assign({}, {symbol: action.symbol,name: action.name});
        default:
            return state;
    }
}