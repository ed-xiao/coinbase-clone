import * as TradeApiUtil from '../util/trade_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
});

export const createTransaction = transaction => dispatch => (
    TradeApiUtil.createTransaction(transaction)
        .then(transaction => {
            dispatch(receiveTransaction(transaction));
            window.location.reload();
        }, error => console.log(error.responseJSON))
);