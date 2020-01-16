import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';
import Loader from 'react-loader-spinner';
import WatchlistButton from '../watchlist/watchlist_button';

class Crypto extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCryptoHist(this.props.match.params.cryptoId);
        this.props.fetchCrypto(this.props.match.params.cryptoId);
    }

    loading() {
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
                    backgroundColor: "rgb(255, 255, 255)",
                    // borderRadius: "4px",
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderColor: "rgb(236, 239, 241)"
                }}
            >
                <Loader type="Grid" color="#1552F0" height={100} width={100} />
            </div >
        )
    }

    lineChart() {
        return (
            <LineChart
                width={784}
                height={230}
                data={this.props.chartData}
                margin={{
                    top: 0, right: 0, left: 0, bottom: 0,
                }}
                cursor="crosshair"
            >
                <XAxis
                    hide={true}
                    // dataKey="time"
                    /*axisLine={false}*/
                    tickLine={false} />
                <YAxis
                    hide={true}
                    domain={[dataMin => (dataMin * 0.95), dataMax => (dataMax * 1.05)]} />
                {/* <Tooltip cursor={false} /> */}
                <Tooltip
                    cursor={false}
                    labelStyle={{ display: 'none' }}
                    // offset={-40}
                    // position={{ y: -20 }}
                    // isAnimationActive={false}
                    // itemStyle={{ color: "rgb(255,255,255)", backgroundColor: "rgb(80, 80, 100)", padding: 8, textAlign: 'center', fontSize: 18, fontWeight: 500 }}
                />
                <Line type="monotone"
                    dataKey="close"
                    stroke="#1552F0"
                    activeDot={{ r: 5 }}
                    strokeWidth={1.8}
                    dot={false}
                    name="$"
                />
            </LineChart>
        )
    }

    render() {
        let {crypto} = this.props;
        if (this.props.chartData === undefined || !this.props.chartData || !crypto.name
            || !crypto['CHANGE24HOUR']) {
            return this.loading();
        }
        let imageSource = window[crypto.symbol];
        let cryptoId = this.props.match.params.cryptoId;
        let changeSign = '+';
        let changeClass = 'chart-24hour-pos';
        // crypto['CHANGE24HOUR'] = -1
        if (crypto['CHANGE24HOUR'] < 0) {
            changeSign = '-';
            changeClass = 'chart-24hour-neg';
            crypto['CHANGE24HOUR'] = crypto['CHANGE24HOUR'] * (-1);
        }
        return (
            <div className='crypto'>
                <div className='crypto-header'>
                    <div>
                        <img src={imageSource} />
                    </div>
                    <div>
                        <h1>
                            {crypto.name}
                        </h1>
                        <h2>
                            {crypto.symbol}
                        </h2>
                    </div>
                    <div>
                        <WatchlistButton cryptoId={crypto.id}/>
                    </div>
                </div>
                <div className='crypto-body'>
                    <div className="crypto-detail">
                        <div className='crypto-chart'>
                            <div className='chart-header'>
                                <div>
                                    ${crypto['PRICE']}
                                </div>
                                <div>
                                    <h4 className={changeClass}>
                                        {changeSign}${crypto['CHANGE24HOUR'].toFixed(2)} ({crypto['CHANGEPCT24HOUR'].toFixed(2)}%)
                                    </h4>
                                </div>
                            </div>
                            <div className='chart-body'>
                                {this.lineChart()}
                            </div>
                            <div className='chart-axis'>
                                <span>OCT 15</span>
                                <span>NOV 2</span>
                                <span>NOV 20</span>
                                <span>DEC 8</span>
                                <span>DEC 26</span>
                                <span>JAN 14</span>
                            </div>
                        </div>
                        <div className='crypto-info'>
                            <div>
                                <h6>
                                    Market cap
                                </h6>
                                <span>{crypto['MKTCAP'].toFixed(2)}</span>
                            </div>
                            <div>
                                <h6>Volume (24 hours)</h6>
                                <span>{crypto['VOLUME24HOUR'].toFixed(2)}</span>
                            </div>
                            <div>
                                <h6>Circulating supply</h6>
                                <span>{crypto['SUPPLY'].toFixed(2)} {crypto.symbol}</span>
                            </div>
                            <div>
                                <h6>High (24 Hours)</h6>
                                <span>{crypto['HIGH24HOUR'].toFixed(2)}</span>
                            </div>
                            {/* <div>
                                <h6>all time high</h6>
                                <span>$20,089</span>
                            </div>
                            <div>
                                <h6>trading activity</h6>
                                <span></span>
                            </div>
                            <div>
                                <h6>typical hold time</h6>
                                <span>90 days</span>
                            </div>
                            <div>
                                <h6>popularity on coin base</h6>
                                <span>#1 most held</span>
                            </div> */}
                        </div>
                    </div>
                    <section>
                        <h2>About {crypto.name}</h2>
                        <p>The world’s first cryptocurrency, {crypto.name} is stored and exchanged securely on the internet through a digital ledger known as a blockchain. {crypto.name}s are divisible into smaller units known as satoshis — each satoshi is worth 0.00000001 {crypto.name.toLowerCase()}.</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Crypto