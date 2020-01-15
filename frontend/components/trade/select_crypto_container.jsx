import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { setDefaultCrypto } from '../../actions/default_crypto_actions'
import SelectCrypto from './select_crypto';

const mDTP = dispatch => {
    return ({
        openModal: () => dispatch(openModal('trade')),
        // closeModal: () => dispatch(closeModal())
        setDefaultCrypto: (symbol, name) => dispatch(setDefaultCrypto(symbol, name))
    })
}

export default connect(null, mDTP)(SelectCrypto);