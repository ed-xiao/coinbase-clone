import React from 'react';
import { connect } from 'react-redux';
// import { openModal, closeModal } from '../../actions/modal_actions';
import { createTransaction } from '../../actions/trade_actions';
import Trade from './trade';

//

// const mSTP = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'login',
//     };
// };

const mSTP = state => {
    return ({
        portfolio: state.entities.portfolio
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
        createTransaction: (trx) => dispatch(createTransaction(trx))
    })
}


export default connect(null, mDTP)(Trade);