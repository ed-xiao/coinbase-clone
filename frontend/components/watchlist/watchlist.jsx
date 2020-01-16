import React from 'react';
import Loader from 'react-loader-spinner';
import WatchlistItem from './watchlist_item';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWatches();
        this.props.fetchCryptos();
    }

    loading() {
        return (
            <div
                style={{
                    minWidth: "575px",
                    minHeight: "500px",
                    maxHeight: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px",
                    boxShadow: "rgba(17, 51, 83, 0.02) 0px 4px 12px 0px",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "4px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(236, 239, 241)"
                }}
            >
                <Loader type="Grid" color="#1552F0" height={100} width={100} />
            </div >
        )
    }

    createTableItems() {
        let crypto;
        return (Object.values(this.props.watchlists).map((watch, idx) => {
            crypto = this.props.cryptos[watch.cryptoId]
            return (
                <WatchlistItem
                    crypto={crypto}
                    key={idx}
                    order={idx}
                    deleteWatches={this.props.deleteWatches}
                    watchId={watch.id}
                />
            )
        }))
    }

    render() {
        // revist logic to determine if all cryptos have been fetched
        if ((Object.values(this.props.watchlists).length === 0) || (Object.values(this.props.cryptos).length < 2)) {
            return (this.loading())
        }
        // return null;
        return (
            <div className="watchlist">
                <div className="watchlist-header">
                    <h2>
                        Following
                    </h2>    
                </div>
                <div className="watchlist-body">
                    <table>
                        {/* <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Change
                                </th>
                                <th>
                                    Market Cap
                                </th>
                                <th>
                                    Follow
                                </th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td>
                                    <p>
                                        #
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        Name
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        Price
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        Follow
                                    </p>
                                </td>
                            </tr>
                            {this.createTableItems()}
                        </tbody>
                    </table>
                </div>
                <div className="watchlist-footer">
                    <span>Discover more assets ></span>
                </div>
            </div>
        )
    }
}

export default Watchlist;