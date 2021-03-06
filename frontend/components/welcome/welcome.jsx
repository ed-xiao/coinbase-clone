import React from 'react';
import TableContainer from './table_container';

class Welcome extends React.Component {

    render() {
        return (
          <div className="welcome">
            <div className="welcome-top">
              {/* <h2>Buy and sell cryptocurrency</h2> */}
              {/* <h4>Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</h4> */}
              <h2>Buy and sell KartCoins</h2>
              <h4>
                CoinLabo is the easiest place to buy, sell, and manage your
                KartCoins portfolio
              </h4>
            </div>
            <TableContainer />
            <div className="welcome-image-text">
              {/* <h1>Create your cryptocurrency portfolio today</h1> */}
              {/* <p>Coinbase has a variety of features that make it the best place to start trading</p> */}
              <h1>Create your KartCoins portfolio today</h1>
              <p>
                CoinLabo has a variety of features that make it the best place
                to start trading
              </p>
            </div>
            <div className="welcome-image">
              {/* <img src="https://assets.coinbase.com/assets/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg" alt="Coinbase Desktop and Mobile App" loading="auto"/> */}
              <img
                src={window.COIN1}
                alt="Coinbase Desktop and Mobile App"
                loading="auto"
              />
            </div>
          </div>
        );
    }
}

export default Welcome;
