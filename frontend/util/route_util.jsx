import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PortContainer from '../components/portfolio/portfolio_container';
import TradeContainer from '../components/trade/trade_container';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/login" />)
    )} />
);

const Unprotected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        // !loggedIn ? (<Component {...props} />) : (<Redirect to="/home" />)
        !loggedIn ? (<Component {...props} />) : (
            <div>
                <div className='banner'>
                    <div>
                        <h4>Hi there!</h4>
                        <h1>Welcome to Coinbase.</h1>
                        <h1>Ready to buy crypto?</h1>
                    </div>
                    <div>
                        <img src="https://assets.coinbase.com/assets/new-user-header-image.0af1725396d815ccd95c17e676c2da59.png"></img>
                    </div>
                </div>
                <div className='widgets'>
                    <PortContainer />
                    <TradeContainer />
                </div>
            </div>
        )
    )} />
);

const mSTP = state => (
    { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));

export const UnprotectedRoute = withRouter(connect(mSTP)(Unprotected));
