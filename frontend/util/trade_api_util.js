export const createTransaction = (transaction) => (
    $.ajax({
        url: 'api/transactions',
        method: 'POST',
        data: {transaction}
    })
);

//transaction contains both units and crypto symbol