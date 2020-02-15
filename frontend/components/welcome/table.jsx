import React, {useEffect} from 'react';
import NumberFormat from "react-number-format";
import Loader from "react-loader-spinner";

export default function table({cryptos, fetchCryptos}) {

    useEffect(() => {
        fetchCryptos()
    },[])

    const loading = () => {
        return (
          <div
            style={{
              width: "784px",
              minHeight: "700px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              margin: "40px",
              boxShadow: "rgba(17, 51, 83, 0.02) 0px 4px 12px 0px",
              backgroundColor: "rgb(255, 255, 255)"
              // borderRadius: "4px",
              // borderWidth: "1px",
              // borderStyle: "solid",
              // borderColor: "rgb(236, 239, 241)"
            }}
          >
            <Loader type="Grid" color="#e4000f" height={100} width={100} />
          </div>
        );
    }

    const createTableItems = () => {
        return Object.values(cryptos).slice(1,5).map(crypto => {
            let changeClass = "positive-change";
            if (crypto.CHANGEPCT24HOUR < 0) {
              changeClass = "negative-change";
            }
            return (
              <tr>
                <td>
                  <img src={window[crypto.symbol]} />
                  <span>{crypto.name}</span>
                  <span>{crypto.symbol}</span>
                </td>
                <td>
                  <p>
                    <NumberFormat
                      displayType={"text"}
                      value={crypto.PRICE}
                      thousandSeparator={true}
                      decimalScale={2}
                      prefix={"$"}
                    />
                  </p>
                </td>
                <td>
                  <p className={changeClass}>
                    <NumberFormat
                      displayType={"text"}
                      value={crypto.CHANGEPCT24HOUR}
                      thousandSeparator={true}
                      decimalScale={2}
                      suffix={"%"}
                    />
                  </p>
                </td>
              </tr>
            );
        });
    }

    if (Object.values(cryptos).length === 0) {
        return loading();
    }
    return (
      <div className='splash-table-container'>
        <div className="splash-table">
            <table>
            <tbody>
                <tr>
                <td>
                    <p>Name</p>
                </td>
                <td>
                    <p>Price</p>
                </td>
                <td>
                    <p>Change</p>
                </td>
                </tr>
                {createTableItems()}
            </tbody>
            </table>
        </div>
      </div>
    );
}
