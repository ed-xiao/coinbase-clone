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

// update line 21 to be new portfolio container
const App = () => (
    <div className='top'>
        <Route path="/" component={NavContainer} />
        <Switch>
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <Route path="/" component={NavContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;