import { RECEIVE_PORT_CRYPTOS } from '../actions/portfolio_actions';
import { RECEIVE_CRYPTO_HIST, RECEIVE_CRYPTO, RECEIVE_CRYPTOS } from '../actions/crypto_actions';
import { merge } from 'lodash';

const cryptosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let cryptoId;
    let data;
    switch (action.type) {
        case RECEIVE_PORT_CRYPTOS:
            //do I need to deep merge here? may overwrite historical crypto data
            return Object.assign({}, action.allPortCryptos.cryptos); //need to key into "cryptos"
        case RECEIVE_CRYPTO_HIST:
            // cryptoId = Object.keys(action.crypto)[0];
            // data = action.crypto[cryptoId]
            // if (!nextState[cryptoId]) {
            //     nextState[cryptoId] = {chartData: ''}
            // }
            // nextState[cryptoId]['chartData'] = data
            // debugger;
            // return nextState;
            // action.crypto is {2: []}
            cryptoId = Object.keys(action.crypto)[0];
            let chartData = {[cryptoId]: {chartData: action.crypto[cryptoId]}}
            return merge({}, nextState, chartData);
        case RECEIVE_CRYPTO:
            // cryptoId = Object.keys(action.crypto)[0];
            // if (Object.values(nextState).length > 0 && nextState[cryptoId]['chartData']) {
            //     data = nextState[cryptoId]['chartData'];
            //     nextState[cryptoId] = action.crypto[cryptoId];
            //     nextState[cryptoId]['chartData'] = data;
            //     debugger; //this is wiping out 'value'
            //     return nextState;
            // } else {
            //     nextState[cryptoId] = action.crypto[cryptoId];
            //     debugger;
            //     return nextState;
            // };
            return merge({}, nextState, action.crypto);
        case RECEIVE_CRYPTOS:
            return merge({}, nextState, action.cryptos);
        default:
            return state;
    };
};

export default cryptosReducer;