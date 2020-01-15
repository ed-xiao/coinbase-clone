import React from 'react';

class SelectCrypto extends React.Component {
    constructor(props) {
        super(props);
        this.updateParentState = this.updateParentState.bind(this);
    }

    updateParentState() {
        // this.props.
        this.props.openModal();
    }

    render() {
        // debugger;
        return (
            <div className='widget-select'>
                <div className='select-top'>
                    <div onClick={this.props.openModal}>
                        <svg className="Header__Icon-sc-1wea5vt-4 jfCrDC" fill="none" height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1 7.133H4.073L8.9 2.48a.845.845 0 0 0 0-1.226.924.924 0 0 0-1.273 0L1.264 7.387a.877.877 0 0 0-.112.132c-.015.022-.026.045-.04.068-.014.027-.031.053-.043.081-.013.03-.02.06-.029.09-.007.024-.017.047-.022.072A.836.836 0 0 0 1 8v.002c0 .056.006.112.018.168.005.026.015.05.023.075.009.03.016.059.028.087.013.03.03.057.047.085.012.022.022.043.035.064.033.048.071.092.113.133l6.364 6.132a.924.924 0 0 0 1.272 0 .846.846 0 0 0 0-1.227L4.073 8.867H18.1c.497 0 .9-.388.9-.867s-.403-.867-.9-.867z" fill="#e5e5e5" stroke="#e5e5e5" strokeWidth=".5">
                            </path>
                        </svg>
                    </div>
                    <span>Buy</span>
                </div>
                <div className='select-bottom'>
                    <div>
                        <img src={window.BTC} alt=""/>
                        <div>
                            <h4>Bitcoin</h4>
                            <p>BTC</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.BCH} alt=""/>
                        <div>
                            <h4>Bitcoin Cash</h4>
                            <p>BCH</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.ETH} alt=""/>
                        <div>
                            <h4>Ethereum</h4>
                            <p>ETH</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.ETC} alt=""/>
                        <div>
                            <h4>Ethereum Classic</h4>
                            <p>ETC</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.LTC} alt=""/>
                        <div>
                            <h4>Litecoin</h4>
                            <p>LTC</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.ZRX} alt=""/>
                        <div>
                            <h4>Ox</h4>
                            <p>ZRX</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.USDC} alt=""/>
                        <div>
                            <h4>USD Coin</h4>
                            <p>USDC</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.BAT} alt=""/>
                        <div>
                            <h4>Basic Attention Token</h4>
                            <p>BAT</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.LINK} alt=""/>
                        <div>
                            <h4>Chainlink</h4>
                            <p>LINK</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.DAI} alt=""/>
                        <div>
                            <h4>Dai</h4>
                            <p>DAI</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.ZEC} alt=""/>
                        <div>
                            <h4>Zcash</h4>
                            <p>ZEC</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.XRP} alt=""/>
                        <div>
                            <h4>XRP</h4>
                            <p>XRP</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.REP} alt=""/>
                        <div>
                            <h4>Augur</h4>
                            <p>REP</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.XLM} alt=""/>
                        <div>
                            <h4>Stellar Lumens</h4>
                            <p>XLM</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.EOS} alt=""/>
                        <div>
                            <h4>EOS</h4>
                            <p>EOS</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.XTZ} alt=""/>
                        <div>
                            <h4>Tezos</h4>
                            <p>XTZ</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.DASH} alt=""/>
                        <div>
                            <h4>Dash</h4>
                            <p>DASH</p>
                        </div>
                    </div>
                    <div>
                        <img src={window.OXT} alt=""/>
                        <div>
                            <h4>Orchid</h4>
                            <p>OXT</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectCrypto;