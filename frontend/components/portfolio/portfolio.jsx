import React from 'react';
import PortfolioItem from './portfolio_item';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.portfolio
    }

    componentDidMount() {
        this.props.fetchPortfolio();
        // need to fetch price of crypto with external API
    }

    createTableItems() {
        let crypto;
        return (Object.values(this.props.portfolio).map((holding, idx) => {
            crypto = this.props.cryptos[holding.cryptoId]
            return (
                <PortfolioItem holding={holding} crypto={crypto} key={idx}/>
            )
        }))
    }

    sumTotalBalance() {
        let totalBalance = 0;
        let crypto;
        Object.values(this.props.portfolio).map((holding, idx) => {
            crypto = this.props.cryptos[holding.cryptoId]
            totalBalance += (holding.units * crypto.value)
        });
        return totalBalance.toFixed(2);
    }

    render() {
        let arrayOfPortfolioItems = "";
        this.sumTotalBalance();
        if (Object.values(this.props.portfolio).length === 0) {
            // console.log('portfolio is empty object')
            return null;
        } else {
            // console.log('portfolio is not undef')
            arrayOfPortfolioItems = this.createTableItems();
        }
        return (
            <div className='portfolio'>
                <div className='portfolio-header'>
                    <div>
                        <h2>Your Portfolio</h2>
                    </div>
                    <div className='portfolio-right'>
                        <a href='#'>List</a>
                        <a href='#'>Chart</a>
                    </div>
                </div>
                <div className='portfolio-body'>
                    <table>
                        <tbody>
                            {arrayOfPortfolioItems}
                        </tbody>
                    </table>
                </div>
                <div className='portfolio-footer'>
                    Total Balance ≈ ${this.sumTotalBalance()}
                </div>
            </div>
        );
    }
}

export default Portfolio;