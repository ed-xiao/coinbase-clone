import React from 'react';

class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: 'BTC',
            units: '',
            transaction_type: 'buy'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleOrderClick(orderType) {
        return (e) => {
            let tradeTop = document.getElementsByClassName('trade-top');
            tradeTop[0].children[0].classList.remove('active');
            tradeTop[0].children[1].classList.remove('active');
            tradeTop[0].children[2].classList.remove('active');
            e.target.classList.add('active')
            this.setState({
                transaction_type: orderType 
            })
        }
    }

    handleClick(e) {
        this.props.closeModal();
        this.props.createTransaction(this.state)
    }

    render() {
        let {transaction_type} = this.state;
        return (
            <div className='widget-trade'>
                <div className='trade-top'>
                    {/* <div onClick={() => this.setState({transaction_type: 'buy'})}>Buy</div> */}
                    <div className='active' onClick={this.handleOrderClick("buy")}>Buy</div>
                    <div onClick={this.handleOrderClick("sell")}>Sell</div>
                    <div onClick={this.handleOrderClick("convert")}>Convert</div>
                    {/* <div onClick={() => this.setState({transaction_type: 'sell' })}>Sell</div> */}
                    {/* {<div onClick={() => this.setState({transaction_type: 'convert' })}>Convert</div>} */}
                </div>
                <div className='trade-middle'>
                    <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')}/>
                    <button type='button' onClick={this.handleClick}>
                        {transaction_type.slice(0, 1).toUpperCase().concat(transaction_type.slice(1))} Crypto
                    </button>
                </div>
                <div className='trade-bottom'>
                    {/* <select name="" id="">
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                        <option value="">LTC</option>
                        <option value="">XRP</option>
                        <option value="">USDT</option>
                        <option value="">EOS</option>
                    </select> */}
                </div>
            </div>
        )
    }
}

export default Trade;