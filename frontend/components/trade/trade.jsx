import React from 'react';
import { translateSym, translateName, addCommas } from '../../util/labo_util';
import {
  disableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";


class Trade extends React.Component {
    constructor(props) {
        super(props);
        let symbol = 'BTC';
        let name = 'Bitcoin';
        // debugger
        if (this.props.defaultCrypto) {
            symbol = this.props.defaultCrypto.symbol;
            name = this.props.defaultCrypto.name;
        };
        this.state = {
            symbol: symbol,  //default to Bitcoin? this is what actually is sent in the order
            units: '',
            transaction_type: 'buy',
            name: name, //default to Bitcoin? this is just for display purposes in the Trade Modal
            errors: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);
        this.openSelectModal = this.openSelectModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchCryptos(); //jbuilder filters out USD, but portfolio fetch may already have added USD to redux state
        let targetElement = document.querySelector(".widget-trade");
        disableBodyScroll(targetElement);
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }

    update(field) {
        // let cryptoPrice = 0;
        // Object.values(this.props.cryptos).forEach(crypto => {
        //   if (crypto.symbol === this.state.symbol) {
        //     cryptoPrice = crypto.PRICE;
        //   }
        // });
        // if ((this.state.units * cryptoPrice) > this.props.buyingPower ) {
        //     this.setState({errors: 'insufficient funds for buy order'})
        // } else {
        //     this.setState({errors: ''})
        // }
        return e => {
            if (this.state.transaction_type === 'buy') {
                let cryptoPrice = 0;
                Object.values(this.props.cryptos).forEach(crypto => {
                  if (crypto.symbol === this.state.symbol) {
                    cryptoPrice = crypto.PRICE;
                  }
                });
                if (e.currentTarget.value * cryptoPrice > this.props.buyingPower) {
                  this.setState({
                    errors: "Insufficient funds for buy order",
                    [field]: e.currentTarget.value
                  });
                } else {
                  this.setState({
                    errors: "",
                    [field]: e.currentTarget.value
                  });
                }
            } else {
                let cryptoPortUnits = 0;
                Object.values(this.props.portfolio).forEach(crypto => {
                    // match id to crypto id
                });
            }
            // this.setState({
            //     [field]: e.currentTarget.value
            // })
        };
    }

    handleOrderClick(orderType) {
        return (e) => {
            let tradeTop = document.getElementsByClassName('trade-top');
            tradeTop[0].children[0].classList.remove('active');
            tradeTop[0].children[1].classList.remove('active');
            // comment back in for Convert Tab
            // tradeTop[0].children[2].classList.remove('active');
            e.target.classList.add('active')
            this.setState({
                transaction_type: orderType
            })
        }
    }

    handleClick(e) {
        if (this.state.errors === '' && this.state.units != '' && this.state.units != 0) {
            this.props.closeModal();
            this.props.createTransaction(this.state);
        }
        if (this.state.units == '' || this.state.units == 0) {
            this.setState({
                errors: 'Amount must be greater than 0 units'
            })
        }
    }

    openSelectModal() {
        this.props.openModal();
    }

    render() {
        let {transaction_type, units, symbol, errors} = this.state;
        //check this.state.crypto which will be empty if the state hasn't been set yet
        // if (this.state.symbol === '') {
        //     return null;
        // }
        let imageSource = window[this.state.symbol];
        let cryptoPrice = 0;
        Object.values(this.props.cryptos).forEach(crypto => {
            if (crypto.symbol === symbol) {
                cryptoPrice = crypto.PRICE
            }
        })
        return (
          <div className="widget-trade">
            <div className="trade-top">
              <div className="active" onClick={this.handleOrderClick("buy")}>
                Buy
              </div>
              <div onClick={this.handleOrderClick("sell")}>Sell</div>
              {/* comment back in for Convert Tab */}
              {/* <div onClick={this.handleOrderClick("convert")}>Convert</div> */}
            </div>
            <div className="trade-middle">
              <input
                type="number"
                placeholder="0 units"
                minLength="1"
                onChange={
                  this.update("units")
                  // onKeyPress={evt => evt.key === 'e' && evt.preventDefault()}
                }
              />
              <div className="trade-errors">
                  <p>
                    {errors}
                  </p>
                </div>
              <div
                className="trade-crypto-selector"
                onClick={this.openSelectModal}
              >
                <p>
                  {transaction_type
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(transaction_type.slice(1))}
                </p>
                <div>
                  <div>
                    <img src={imageSource} />
                  </div>
                  <p>{translateName[this.state.name]}</p>
                </div>
              </div>
              <button type="button" onClick={this.handleClick}>
                {transaction_type
                  .slice(0, 1)
                  .toUpperCase()
                  .concat(transaction_type.slice(1))}{" "}
                {translateName[this.state.name]}
              </button>
            </div>
            <div className="trade-bottom">
                <p>{addCommas((+units).toFixed(4)) + " " + translateSym[symbol] + " = $" + addCommas((units*cryptoPrice).toFixed(2))}</p>
            </div>
          </div>
        );
    }
}

export default Trade;