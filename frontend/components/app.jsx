import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, UnprotectedRoute } from '../util/route_util';

import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import NavContainer from '../components/nav/nav_container';
// import PortContainer from '../components/portfolio/portfolio_container';
import Welcome from '../components/welcome/welcome';
import Footer from '../components/footer/footer';
import CryptoContainer from '../components/crypto/crypto_container';

// update line 21 to be new portfolio container
const App = () => (
    <div className='top'>
        {/* <Route path="/" component={NavContainer} /> */}
        <NavContainer />
        <Switch>
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute exact path='/cryptos/:cryptoId' component={CryptoContainer} />
            <UnprotectedRoute path="/" component={Welcome} />   //not logged in
            {/* <ProtectedRoute exact path="/home" component={PortContainer} />   // logged in */}
            <Redirect to="/" />
        </Switch>
        {/* <Route path="/" component={Footer} /> */}
        <Footer />
    </div>
);

export default App;