import React from 'react';
import { connect } from 'react-redux';
import Transactions from './transactions';
import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchCryptos } from '../../actions/crypto_actions';

const mapStateToProps = (state) => {
    return ({
        transactions: state.entities.transactions,
        cryptos: state.entities.cryptos
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchCryptos: () => dispatch(fetchCryptos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);