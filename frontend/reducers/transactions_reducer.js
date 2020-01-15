import { RECEIVE_TRANSACTIONS } from '../actions/transaction_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_CRYPTO_HIST } from '../actions/crypto_actions';
// import { RECEIVE_CRYPTO } from '../actions/crypto_actions';

const portfolioReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            return Object.assign({}, action.allTransactions);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default portfolioReducer;