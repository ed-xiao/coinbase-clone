import * as WatchlistApiUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHES = 'RECEIVE_WATCHES';
export const RECEIVE_WATCH = 'RECEIVE_WATCH';

const receiveWatches = allWatches => ({
    type: RECEIVE_WATCHES,
    allWatches
});

const receiveWatch = watch => ({
    type: RECEIVE_WATCH,
    watch
})

export const fetchWatches = () => dispatch => (
    WatchlistApiUtil.fetchWatches()
        .then(watches => dispatch(receiveWatches(watches)))
);

export const createWatch = crypto => dispatch => (
    WatchlistApiUtil.createWatch(crypto)
        .then(watch => {
            dispatch(receiveWatch(watch));
            window.location.reload();
        }, error => console.log(error.responseJSON))
);

export const deleteWatch = id => dispatch => (
    WatchlistApiUtil.deleteWatch(id)
        .then(() => {
            window.location.reload();
        }, error => console.log(error.responseJSON))
);