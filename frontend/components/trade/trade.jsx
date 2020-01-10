import React from 'react';

class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: 'BTC',
            units: '',
            transaction_type: 'buy',

        };
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleClick(e) {
        this.props.createTransaction(this.state)
    }

    render() {
        let {transaction_type} = this.state;
        return (
            <div className='widget-trade'>
                <div className='trade-top'>
                    <div onClick={() => this.setState({transaction_type: 'buy'})}>Buy</div>
                    <div onClick={() => this.setState({ transaction_type: 'sell' })}>Sell</div>
                    <div onClick={() => this.setState({ transaction_type: 'convert' })}>Convert</div>
                </div>
                <div>
                    <input type="number" placeholder='0 units' minLength='1' onChange={this.update('units')}/>
                </div>
                <div className='trade-bottom'>
                    <select name="" id="">
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                        <option value="">LTC</option>
                    </select>
                    <button type='button' onClick={this.handleClick}>{transaction_type.slice(0,1).toUpperCase().concat(transaction_type.slice(1))} Crypto</button>
                </div>
            </div>
        )
    }
}

export default Trade;