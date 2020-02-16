import React from "react";
import { connect } from "react-redux";
// import Crypto from "./crypto";
import Prices from "./prices";
import { fetchCrypto } from "../../actions/crypto_actions";
import {
  fetchWatches,
  createWatch,
  deleteWatch
} from "../../actions/watchlist_actions";


// const mapStateToProps = ({portfolio}) => ({
//     portfolio: portfolio
// });

// front end show route has crypto id? backend may have to find symbol of crypto? or my Crypto component and do this work
// when calling fetchCryptoHist

const mapStateToProps = (state, ownProps) => {
  let cryptos = state.entities.cryptos;
//   let chartData = "";
//   if (crypto && crypto["chartData"]) {
//     chartData = crypto.chartData;
//   }
  return {
    cryptos: cryptos,
    // chartData: chartData
  };
};

const mapDispatchToProps = dispatch => ({
//   fetchCryptoHist: symbol => dispatch(fetchCryptoHist(symbol)),
  fetchCryptos: () => dispatch(fetchCrypto("all")),
  fetchWatches: () => dispatch(fetchWatches()),
  deleteWatch: (id) => dispatch(deleteWatch(id)),
  createWatch: (id) => dispatch(createWatch(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
