import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.portfolio
    }

    componentDidMount() {
        this.props.fetchPortfolio();
    }

    render() {
        return (
            <div className='portfolio'>
                stonks here
            </div>
        );
    }
}

export default Portfolio;