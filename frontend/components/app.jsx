import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import NavContainer from '../components/nav/nav_container';

const App = () => (
    <div>
        <Route path="/" component={NavContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
    </div>
);

{/* <Redirect to="/" /> */}
export default App;

{/* <header>
    <nav className='nav-bar'>
        <Link to="/" className="nav-link nav-logo">
            coinbase
                </Link>
    </nav>
</header> */}