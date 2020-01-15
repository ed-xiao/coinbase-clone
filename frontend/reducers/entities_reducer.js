import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import portfolioReducer from './portfolio_reducer';
import cryptosReducer from './cryptos_reducer';
import transactionsReducer from './transactions_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    portfolio: portfolioReducer,
    cryptos: cryptosReducer,
    transactions: transactionsReducer
});

export default entitiesReducer;