import React from 'react';
import { translateName, translateSym } from '../../util/labo_util';

class TransactionsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { transaction, crypto } = this.props;
        return (
            <tr>
                <td>
                    <p>
                        {transaction.transactionType.toUpperCase()}
                    </p>
                </td>
                <td>
                    <p>
                        {translateName[crypto.name]}
                    </p>
                </td>
                {/* <td>
                    <p>
                        {crypto.symbol}
                    </p>
                </td> */}
                <td>
                    <p>
                        {transaction.units.toFixed(4)} {translateSym[crypto.symbol]}
                    </p>
                </td>
                <td>
                    <p>
                        ${transaction.price.toFixed(2)}
                    </p>
                </td>
                <td>
                    <p>
                        {transaction.createdAt}
                    </p>
                </td>
            </tr>
        )
    }
}

export default TransactionsItem;

// "cryptoId": 2,
// "units": 100.5,
// "price": 100000,
// "transactionType": "buy",
// "createdAt": "2020-01-14T05:45:48.302Z"