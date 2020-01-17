import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import PortContainer from '../components/portfolio/portfolio_container';
import TransactionsContainer from '../components/transactions/transactions_container';
import WatchlistContainer from '../components/watchlist/watchlist_container';
// import TradeContainer from '../components/trade/trade_container';
// import Loading from '../components/loading/loading';

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
            <div className='body-wrapper'>
                <div className='banner'>
                    <div className='banner-wrapper'>
                        <div>
                            <h4>Hi Waluigi!</h4>
                            <h1>Welcome to CoinLabo.</h1>
                            <h1>Ready to buy KartCoins?</h1>
                        </div>
                        <div>
                            {/* <img src="https://assets.coinbase.com/assets/new-user-header-image.0af1725396d815ccd95c17e676c2da59.png"></img> */}
                            <img src={window.SPLASH}></img>
                        </div>
                    </div>
                </div>
                <div className='widgets'>
                    <WatchlistContainer />
                    <div className='port-trans-wrapper'>
                        <PortContainer />
                        <TransactionsContainer />
                    </div>
                    {/* <Loading /> */}
                    {/* <TradeContainer /> */}
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
