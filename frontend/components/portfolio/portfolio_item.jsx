import React from 'react';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let displayNum = this.props.holding.units.toFixed(4);
        return (
            <tr className='portfolio-item'>
                <td>
                    <a href="#">
                        <svg height="36" width="36" role="img" class="CurrencyIcon__makeFiatIcon-sc-183ymdh-0 dhDNoC" size="36" bgcolor="backgroundAccent" lighten="0" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0C7.176 0 0 7.176 0 16s7.176 16 16 16 16-7.176 16-16S24.824 0 16 0zm0 30.06C8.242 30.06 1.94 23.759 1.94 16 1.94 8.242 8.241 1.94 16 1.94c7.758 0 14.06 6.302 14.06 14.06 0 7.758-6.302 14.06-14.06 14.06z" fill="#1652F0">
                            </path>
                            <path d="M16.291 14.914c-1.969-.281-2.347-.747-2.347-1.668 0-.873.67-1.493 1.95-1.493 1.163 0 1.832.407 2.104 1.338a.486.486 0 0 0 .465.359h1.018a.456.456 0 0 0 .446-.543c-.32-1.474-1.318-2.366-2.88-2.648V8.727a.48.48 0 0 0-.485-.485h-.97a.48.48 0 0 0-.484.485v1.503c-1.92.272-3.161 1.552-3.161 3.19 0 2.124 1.28 2.949 3.995 3.317 1.842.3 2.366.698 2.366 1.745 0 1.048-.892 1.746-2.143 1.746-1.697 0-2.25-.737-2.453-1.697a.497.497 0 0 0-.476-.398h-1.115a.45.45 0 0 0-.446.524c.281 1.61 1.319 2.802 3.433 3.084v1.532a.48.48 0 0 0 .485.485h.97a.48.48 0 0 0 .484-.485V21.74c2.008-.32 3.278-1.717 3.278-3.433.01-2.27-1.377-3.026-4.034-3.394z" fill="#1652F0">
                            </path>
                        </svg>
                    </a>
                </td>
                <td>
                    {this.props.crypto.name}
                </td>
                <td>
                    {displayNum}
                </td>
                <td>
                    {this.props.crypto.symbol}
                </td>
                <td>
                    $ (Units * Price)
                </td>
            </tr>
        );
    }
}

export default PortfolioItem;