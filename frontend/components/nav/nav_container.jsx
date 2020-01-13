import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, login, signup } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => ({
    currentUser: session.id
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal('trade'))
    // login: (user) => dispatch(login(user)),
    // signup: (user) => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);