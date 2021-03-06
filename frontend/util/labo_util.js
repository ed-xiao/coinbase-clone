export const translateSym = {
    USD: 'CLC',
    BTC: 'BMB',
    BCH: 'BLP',
    ETH: 'FLOW',
    ETC: 'FIB',
    LTC: 'GSHL',
    ZRX: 'TRSH',
    USDC: 'BSHL',
    BAT: 'BAN',
    LINK: 'MMUS',
    DAI: 'BOO',
    ZEC: 'TGSH',
    XRP: 'THCL',
    REP: 'RSHL',
    XLM: 'STAR',
    EOS: 'COIN',
    XTZ: 'TBAN',
    DASH: 'BULL',
    OXT: 'MUSH'
};
export const translateName = {
    'US Dollar': 'CoinLabo Coin',
    Bitcoin: 'Bob-omb',
    'Bitcoin Cash': 'Blooper',
    Ethereum: 'Fire Flower',
    'Ethereum Classic': 'Fake Item Box',
    Litecoin: 'Green Shell',
    Ox: 'Triple Red Shells',
    'USD Coin': 'Blue Shell',
    'Basic Attention Token': 'Banana',
    Chainlink: 'Mega Mushroom',
    Dai: 'Boo',
    Zcash: 'Triple Green Shells',
    XRP: 'Thunder Cloud',
    Augur: 'Red Shell',
    "Stellar Lumens": 'Starman',
    EOS: 'Coin',
    Tezos: 'Triple Bananas',
    "Dash": 'Bullet Bill',
    Orchid: 'Mushroom'
};

export const addCommas = x => {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}