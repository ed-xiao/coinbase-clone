import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

const receiveTransactions = allTransactions => ({
    type: RECEIVE_TRANSACTIONS,
    allTransactions
});

export const fetchTransactions = () => dispatch => (
    TransactionApiUtil.fetchTransactions()
        .then(transactions => dispatch(receiveTransactions(transactions)))
);