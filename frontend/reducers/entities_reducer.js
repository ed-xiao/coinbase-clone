import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import portfolioReducer from './portfolio_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    portfolio: portfolioReducer
});

export default entitiesReducer;