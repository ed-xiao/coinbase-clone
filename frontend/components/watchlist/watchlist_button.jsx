import React from 'react';
import { connect } from 'react-redux';
import { fetchWatches, createWatch, deleteWatch } from '../../actions/watchlist_actions';
import { withRouter } from 'react-router-dom';

class WatchlistButton extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWatches();
    }

    determineWatch() {
        let {cryptoId} = this.props;
        let watches = Object.values(this.props.watchlists);
        for (let i = 0; i < watches.length; i++) {
            if (watches[i].cryptoId === cryptoId) {
                return (
                    <button className='following' onClick={() => this.props.deleteWatch(watches[i].id)}>
                        <i className="fas fa-star"></i>
                        <h2>Following</h2>
                    </button>
                )
            }
        };
        return (
            <button className='not-following' onClick={() => this.props.createWatch({crypto_id: cryptoId})}>
                <i className="far fa-star"></i>
                <h2>Follow</h2>
            </button>
        );
    }

    render() {
        if (Object.values(this.props.watchlists).length === 0) {
            return null;
        }
        return (
            <div>
                {this.determineWatch()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        watchlists: state.entities.watchlists
    })
};

const mapDispatchToProps = (dispatch) => ({
    createWatch: (crypto) => dispatch(createWatch(crypto)),
    deleteWatch: (id) => dispatch(deleteWatch(id)),
    fetchWatches: () => dispatch(fetchWatches())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchlistButton));