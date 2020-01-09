import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import portfolioReducer from './portfolio_reducer';
import cryptosReducer from './cryptos_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    portfolio: portfolioReducer,
    cryptos: cryptosReducer
});

export default entitiesReducer;