import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
    // login: (user) => dispatch(login(user)),
    // signup: (user) => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);