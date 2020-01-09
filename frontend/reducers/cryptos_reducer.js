import { RECEIVE_PORT_CRYPTOS } from '../actions/portfolio_actions';

const cryptosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PORT_CRYPTOS:
            return Object.assign({}, action.allPortCryptos.cryptos); //need to key into "cryptos"
        default:
            return state;
    }
};

export default cryptosReducer;