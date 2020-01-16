import { RECEIVE_PORT_CRYPTOS } from '../actions/portfolio_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_HOME } from '../actions/home_actions';
// import { RECEIVE_CRYPTO_HIST } from '../actions/crypto_actions';
// import { RECEIVE_CRYPTO } from '../actions/crypto_actions';

const portfolioReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PORT_CRYPTOS:
            return Object.assign({}, action.allPortCryptos.portfolios); //need to key into "portfolios"
        case LOGOUT_CURRENT_USER:
            return {};
        // case RECEIVE_CRYPTO_HIST:
        //     return {};
        // case RECEIVE_CRYPTO:
        //     return {};
        case RECEIVE_HOME:
            return Object.assign({}, action.allHomeData[0].portfolios);
        default:
            return state;
    }
};

export default portfolioReducer;