import React, {useEffect} from 'react'
import PricesItem from './prices_item';

export default function prices({cryptos, fetchCryptos, fetchWatches, createWatch, deleteWatch}) {
    useEffect(() => {
        fetchCryptos();
        fetchWatches();
    }, [])

    const createTableItems = () => {
        return (Object.values(cryptos).map((crypto, idx) => {
            return (
                <PricesItem
                    crypto={crypto}
                    key={idx}
                    order={idx}
                    deleteWatch={deleteWatch}
                    // watchId={watch.id}
                />
            )
        }))
    }

    return (
      <div className="prices">
        <div className="watchlist-header">
          <h2>All Prices</h2>
        </div>
        <div className="watchlist-body">
          <table>
            <tbody>
              <tr>
                <td>
                  <p>#</p>
                </td>
                <td>
                  <p>Name</p>
                </td>
                <td>
                  <p>Price</p>
                </td>
                <td>
                  <p>Change</p>
                </td>
                <td>
                  <p>Market Cap</p>
                </td>
                <td>
                  <p>Watch</p>
                </td>
              </tr>
              {createTableItems()}
            </tbody>
          </table>
        </div>
      </div>
    );
}
