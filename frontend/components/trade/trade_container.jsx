import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createTransaction } from '../../actions/trade_actions';
import { fetchCryptos } from '../../actions/crypto_actions';
import Trade from './trade';

// const mSTP = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'login',
//     };
// };

const mSTP = (state, ownProps) => {
    // debugger;
    // let defaultCryptoId = 0;
    // if (ownProps.path !== '/') {
    //     defaultCryptoId = ownProps.path.slice(9)
    // }
    return ({
        // portfolio: state.entities.portfolio,
        defaultCrypto: state.ui.defaultCrypto
    });
}

//figure out below
// const mDTP = dispatch => {
//     return {
//         processForm: (user) => dispatch(login(user)),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('signup'))}>
//                 Signup
//             </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

const mDTP = dispatch => {
    return ({
        createTransaction: (trx) => dispatch(createTransaction(trx)),
        fetchCryptos: () => dispatch(fetchCryptos()),
        openModal: () => dispatch(openModal('selectCrypto')),
        closeModal: () => dispatch(closeModal())
    })
}

// export default connect(mSTP, mDTP)(Trade);
export default connect(mSTP, mDTP)(Trade);