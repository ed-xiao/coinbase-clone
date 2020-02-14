import React from 'react';
import { Link } from 'react-router-dom';
import { translateSym, translateName } from '../../util/labo_util';
import NumberFormat from "react-number-format";


class WatchlistItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { order, crypto } = this.props;
        if (!crypto) {
            return null;
        }
        let imageSource = window[crypto.symbol];
        return (
          <tr>
            <td>
              <p>{order + 1}</p>
            </td>
            <td>
              <Link to={`cryptos/${crypto.id}`}>
                <p>
                  <img src={imageSource} />
                </p>
                <p>
                  <span>{translateName[crypto.name]}</span>
                  <span>{translateSym[crypto.symbol]}</span>
                </p>
              </Link>
            </td>
            <td>
              <p>
                <NumberFormat
                  displayType={"text"}
                  value={crypto.value}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </td>
            {/* <td>
                    <p>
                        {crypto.change}
                    </p>
                </td> */}
            <td>
              <button
                onClick={() => this.props.deleteWatches(this.props.watchId)}
              >
                <i className="fas fa-star"></i>
              </button>
            </td>
          </tr>
        );
    }
}

export default WatchlistItem;

// "cryptoId": 2,
// "units": 100.5,
// "price": 100000,
// "transactionType": "buy",
// "createdAt": "2020-01-14T05:45:48.302Z"