import * as PortfolioApiUtil from '../util/portfolio_api_util'

export const RECEIVE_PORT_CRYPTOS = 'RECEIVE_PORT_CRYPTOS';

const receivePortCryptos = allPortCryptos => ({
    type: RECEIVE_PORT_CRYPTOS,
    allPortCryptos
});

export const fetchPortfolio = () => dispatch => (
    PortfolioApiUtil.fetchPortfolio()
        .then(allPortCryptos => dispatch(receivePortCryptos(allPortCryptos)))
);