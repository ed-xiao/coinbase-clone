import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import defaultCrypto from './default_crypto_reducer';

export default combineReducers({
    // filters,
    modal,
    defaultCrypto
});
