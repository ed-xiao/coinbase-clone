import React from 'react';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        return (
            <tr className='portfolio-item'>
                <td>
                    {this.props.holding.cryptoId}
                    <a href="#">link</a>
                </td>
                <td>
                    {this.props.holding.units}
                </td>
                <td>
                    (Units * Price) in USD
                </td>
            </tr>
        );
    }
}

export default PortfolioItem;