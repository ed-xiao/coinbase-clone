import React from 'react';
import PortfolioItem from './portfolio_item';
// import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.portfolio
    }

    componentDidMount() {
        // trackPromise(
        //     this.props.fetchPortfolio()
        // )
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

    loading() {
        return (
            <div
                style= {{
                    minWidth: "575px",
                    minHeight: "500px",
                    maxHeight: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px",
                    boxShadow: "rgba(17, 51, 83, 0.02) 0px 4px 12px 0px",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "4px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(236, 239, 241)"
                }}
            >
                {/* <Loader type="Oval" color= "#1552F0" height = "100" width = "100" /> */}
                <Loader type="Grid" color="#1552F0" height={100} width={100} />
                {/* <Loader type="TailSpin" color= "#1552F0" height = "100" width = "100" /> */}
            </div >
        )
        // return (
        //     <div style={{
        //         width: "575px",
        //         minHeight: "500px",
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         margin: "40px",
        //     }}>
        //         <img src={window.yoshiURL} />
        //     </div>
        // )
    }

    render() {
        let arrayOfPortfolioItems = "";
        this.sumTotalBalance();
        if (Object.values(this.props.portfolio).length === 0) {
            // console.log('portfolio is empty object')
            return (
                this.loading()
            )
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
                        {/* <a href='#'>List</a> */}
                        {/* <a href='#'>Chart</a> */}
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