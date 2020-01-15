export const fetchTransactions = () => (
    $.ajax({
        url: 'api/transactions'
    })
);