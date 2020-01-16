import React from 'react';
import { connect } from 'react-redux';
import Watchlist from './watchlist';
import { fetchWatches, createWatch, deleteWatch } from '../../actions/watchlist_actions';
import { fetchCryptos } from '../../actions/crypto_actions';

const mapStateToProps = (state) => {
    return ({
        watchlists: state.entities.watchlists,
        cryptos: state.entities.cryptos
    })
};

//do I need createWatch???
const mapDispatchToProps = (dispatch) => ({
    fetchWatches: () => dispatch(fetchWatches()),
    deleteWatches: (id) => dispatch(deleteWatch(id)),
    fetchCryptos: () => dispatch(fetchCryptos())
})

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);