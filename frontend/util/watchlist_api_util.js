export const fetchWatches = () => (
    $.ajax({
        url: 'api/watchlists'
    })
);

export const createWatch = (watchlist) => (
    $.ajax({
        url: 'api/watchlists',
        method: 'POST',
        data: { watchlist }
    })
);

export const deleteWatch = (id) => (
    $.ajax({
        url: `api/watchlists/${id}`,
        method: 'DELETE'
    })
);
