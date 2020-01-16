import React from 'react';
import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import { fetchHomeData } from '../../actions/home_actions';

// const mapStateToProps = ({portfolio}) => ({
//     portfolio: portfolio
// });

const mapStateToProps = (state) => {
    return ({
        portfolio: state.entities.portfolio,
        cryptos: state.entities.cryptos
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchPortfolio: () => dispatch(fetchPortfolio()),
    fetchHomeData: () => dispatch(fetchHomeData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);