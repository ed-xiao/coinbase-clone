import React from 'react';

class Trade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: 'BTC',
            units: '',
            transactionType: 'buy'
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
        let {transactionType} = this.state;
        return (
            <div className='widget-trade'>
                <div className='trade-top'>
                    <div onClick={() => this.setState({transactionType: 'buy'})}>Buy</div>
                    <div onClick={() => this.setState({transactionType: 'sell' })}>Sell</div>
                    <div onClick={() => this.setState({transactionType: 'convert' })}>Convert</div>
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
                    <button type='button' onClick={this.handleClick}>{transactionType.slice(0,1).toUpperCase().concat(transactionType.slice(1))} Crypto</button>
                </div>
            </div>
        )
    }
}

export default Trade;