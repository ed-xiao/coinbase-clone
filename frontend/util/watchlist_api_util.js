export const fetchWatches = () => (
    $.ajax({
        url: 'api/watchlists'
    })
);

export const createWatch = (crypto) => (
    $.ajax({
        url: 'api/watchlists',
        method: 'POST',
        data: { crypto }
    })
);

export const deleteWatch = (id) => (
    $.ajax({
        url: `api/watchlists/${id}`,
        method: 'DELETE'
    })
);
