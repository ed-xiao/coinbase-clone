import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';

class Crypto extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCryptoHist(this.props.match.params.cryptoId);
        this.props.fetchCrypto(this.props.match.params.cryptoId);
    }

    render() {
        let {crypto} = this.props
        if (this.props.chartData === undefined || !this.props.chartData) {
            return null;
        }
        return (
            <div className='crypto'>
                <div className='chart'>
                    Chart goes here for {crypto.symbol} id: {this.props.match.params.cryptoId}
                    <LineChart
                        width={784}
                        height={230}
                        data={this.props.chartData}
                        margin={{
                            top: 0, right: 0, left: 0, bottom: 0,
                        }}
                    >
                        <XAxis 
                            hide={true}
                            // dataKey="time"
                            /*axisLine={false}*/ 
                            tickLine={false}/>
                        <YAxis 
                            hide={true}
                            domain={[dataMin => (dataMin * 0.95), dataMax => (dataMax * 1.05)]}/>
                        {/* <Tooltip cursor={false} /> */}
                        <Tooltip 
                        cursor={false}
                        labelStyle={{ display: 'none' }}
                        // offset={-40}
                        position={{ y: -20 }}
                        isAnimationActive={false}
                        itemStyle={{ color: "rgb(255,255,255)", backgroundColor: "rgb(80, 80, 100)", padding: 8, textAlign: 'center', fontSize: 18, fontWeight: 500 }} />
                        <Line type="monotone"
                            dataKey="close"
                            stroke="#1552F0"
                            activeDot={{ r: 5 }}
                            strokeWidth={1.8}
                            dot={false}
                            name="$"
                        />
                    </LineChart>
                </div>
                <div className='detail'>
                    <h6>Market Cap</h6>
                    <span>{crypto['MKTCAP']}</span>
                    <h6>volume</h6>
                    <span>{crypto['VOLUME24HOUR']}</span>
                    <h6>circulating supply</h6>
                    <span>{crypto['SUPPLY']}</span>
                    <h6>all time high</h6>
                    <span></span>
                    <h6>trading activity</h6>
                    <span></span>
                    <h6>typical hold time</h6>
                    <span></span>
                    <h6>popularity on coin base</h6>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default Crypto