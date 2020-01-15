import React from 'react';
import { connect } from 'react-redux';
import Crypto from './crypto';
import { fetchCryptoHist } from '../../actions/crypto_actions';
import { fetchCrypto } from '../../actions/crypto_actions';

// const mapStateToProps = ({portfolio}) => ({
//     portfolio: portfolio
// });

// front end show route has crypto id? backend may have to find symbol of crypto? or my Crypto component and do this work 
// when calling fetchCryptoHist

const mapStateToProps = (state, ownProps) => {
    // debugger
    let crypto = state.entities.cryptos[ownProps.match.params.cryptoId];
    let chartData = '';
    if (crypto && crypto['chartData']) {
        chartData = crypto.chartData
    }
    return ({
        crypto: crypto,
        chartData: chartData
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchCryptoHist: (symbol) => dispatch(fetchCryptoHist(symbol)),
    fetchCrypto: (id) => dispatch(fetchCrypto(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Crypto);