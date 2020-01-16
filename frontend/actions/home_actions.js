import * as PortfolioApiUtil from '../util/portfolio_api_util';
import * as CryptoApiUtil from '../util/crypto_api_util';
import * as TransactionApiUtil from '../util/transaction_api_util';
import * as WatchlistApiUtil from '../util/watchlist_api_util';


export const RECEIVE_HOME = 'RECEIVE_HOME';

const receiveHome = allHomeData => ({
    type: RECEIVE_HOME,
    allHomeData
});

export const fetchHomeData = () => dispatch => {
    Promise.all([
        PortfolioApiUtil.fetchPortfolio(),
        CryptoApiUtil.fetchCryptos(),
        TransactionApiUtil.fetchTransactions(),
        WatchlistApiUtil.fetchWatches()
    ])
        // .then(allHomeData => console.log(allHomeData))
        .then(allHomeData => dispatch(receiveHome(allHomeData)))
};


// export const fetchStock = ticker => dispatch => {
//     const performFetches = () => Promise.all([
//         dispatch(fetchStockInfo(ticker)),
//         dispatch(fetchStockInfo2(ticker)),
//         dispatch(fetchStockIntradayData(ticker)),
//         dispatch(fetchStockDailyData(ticker)),
//         dispatch(fetchStockNews(ticker))
//     ]).then(() => dispatch(stopStockLoading()));

//     dispatch(startStockLoading());
//     return StockApiUtil.fetchStock(ticker)
//         .then(stock => dispatch(receiveStock(stock)))
//         .then(performFetches);
// };