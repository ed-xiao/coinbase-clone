import { RECEIVE_PORT_CRYPTOS} from '../actions/portfolio_actions';

const portfolioReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PORT_CRYPTOS:
            return Object.assign({}, action.allPortCryptos);
        default:
            return state;
    }
};

export default portfolioReducer;
