import { RECEIVE_WATCHES, RECEIVE_WATCH } from '../actions/watchlist_actions';
import { RECEIVE_HOME } from '../actions/home_actions';
// import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_CRYPTO_HIST } from '../actions/crypto_actions';
// import { RECEIVE_CRYPTO } from '../actions/crypto_actions';
import { merge } from 'lodash';

const watchlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_HOME:
            return merge({}, action.allHomeData[3]);
        case RECEIVE_WATCHES:
            return Object.assign({}, action.allWatches);
        case RECEIVE_WATCH:
            return merge({}, nextState, action.watch);
        default:
            return state;
    }
};

export default watchlistsReducer;