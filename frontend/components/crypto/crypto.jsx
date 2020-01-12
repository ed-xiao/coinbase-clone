import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', pv: 4300, amt: 2100,
    },
];

class Crypto extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCryptoHist(this.props.match.params.cryptoId);
        // need to fetch price of crypto with external API

        /// left off here, make this fetch and then write logic in render method to wait on both AJAX calls
        this.props.fetchCrypto(this.props.match.params.cryptoId);
    }

    render() {
        if (this.props.chartData === undefined || !this.props.chartData) {
            return null;
        }
        return (
            <div className='crypto'>
                <div className='chart'>
                    Chart goes here for {} id: {this.props.match.params.cryptoId}
                    <LineChart
                        width={500}
                        height={300}
                        data={this.props.chartData}
                        margin={{
                            top: 5, right: 30, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis 
                            hide={true}/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="close" stroke="#1552F0" activeDot={{ r: 8 }} strokeWidth={2} />
                    </LineChart>
                </div>
                <div className='detail'>
                    market cap
                    volume
                    circulating supply
                    all time high
                    trading activity
                    typical hold time
                    popularity on coin base
                </div>
            </div>
        );
    }
}

export default Crypto;