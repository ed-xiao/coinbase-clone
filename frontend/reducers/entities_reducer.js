import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import portfolioReducer from './portfolio_reducer';
import cryptosReducer from './cryptos_reducer';
import transactionsReducer from './transactions_reducer';
import watchlistsReducer from './watchlists_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    portfolio: portfolioReducer,
    cryptos: cryptosReducer,
    transactions: transactionsReducer,
    watchlists: watchlistsReducer
});

export default entitiesReducer;