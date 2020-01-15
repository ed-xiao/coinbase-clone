import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';
import TradeContainer from '../trade/trade_container';
import SelectCryptoContainer from '../trade/select_crypto_container';

function Modal({ modal, closeModal, location }) {
    // location.pathname = '/cryptos/2'
    // location.pathname = '/'
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'trade':
            component = <TradeContainer path={location.pathname}/>;  //Trade component doesn't need to know path
            // component = <TradeContainer />;
            break;
        case 'selectCrypto':
            component = <SelectCryptoContainer />
            break;
        // case 'signup':
            // component = <SignupFormContainer />;
            // break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);