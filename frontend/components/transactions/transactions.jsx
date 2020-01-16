import React from 'react';
import TransactionsItem from './transactions_item';
import Loader from 'react-loader-spinner';

class Transactions extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.fetchTransactions(); //replaced with homefetch
        // this.props.fetchCryptos(); //replaced with homefetch
    }

    createTableItems() {
        let crypto;
        return (Object.values(this.props.transactions).map((transaction, idx) => {
            crypto = this.props.cryptos[transaction.cryptoId]
            return (
                <TransactionsItem transaction={transaction} crypto={crypto} key={idx} />
            )
        }))
    }

    loading() {
        return (
            <div
                style={{
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
                <Loader type="Grid" color="#1552F0" height={100} width={100} />
            </div >
        )
    }

    render() {
        if ((Object.values(this.props.transactions).length === 0) || (Object.values(this.props.cryptos).length === 0)) {
            return (this.loading())
        }
        return (
            <div className='transactions'>
                <div className='transactions-header'>
                    <h2>Your Transaction History</h2>
                </div>
                <div className='transactions-body'>
                    <table>
                        <tbody>
                            {this.createTableItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Transactions;