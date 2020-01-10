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
        return (
            <div className='widget-trade'>
                <div className='trade-top'>
                    <div>Buy</div>
                    <div>Sell</div>
                    <div>Convert</div>
                </div>
                <div>
                    <input type="tel" placeholder='0' minLength='1' onChange={this.update('units')}/>
                </div>
                <div className='trade-bottom'>
                    <select name="" id="">
                        <option value="">BTC</option>
                        <option value="">ETH</option>
                        <option value="">LTC</option>
                    </select>
                    <button type='button' onClick={this.handleClick}>Buy Crypto</button>
                </div>
            </div>
        )
    }
}

export default Trade;