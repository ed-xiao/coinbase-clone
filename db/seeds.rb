# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
demo_user = User.create(username: 'demo_user', email: 'demo@email.com', password: 'password')

Crypto.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('cryptos')
dollar = Crypto.create(symbol: 'USD', name: 'US Dollar')
bitcoin = Crypto.create(symbol: 'BTC', name: 'Bitcoin')
bitcoin_cash = Crypto.create(symbol: 'BCH', name: 'Bitcoin Cash')
ethereum = Crypto.create(symbol: 'ETH', name: 'Ethereum')
ethereum_classic = Crypto.create(symbol: 'ETC', name: 'Ethereum Classic')
litecoin = Crypto.create(symbol: 'LTC', name: 'Litecoin')
ox = Crypto.create(symbol: 'ZRX', name: 'Ox')
usd_coin = Crypto.create(symbol: 'USDC', name: 'USD Coin')
bat = Crypto.create(symbol: 'BAT', name: 'Basic Attention Token')
chainlink = Crypto.create(symbol: 'LINK', name: 'Chainlink')
dai = Crypto.create(symbol: 'DAI', name: 'Dai')
zcash = Crypto.create(symbol: 'ZEC', name: 'Zcash')
xrp = Crypto.create(symbol: 'XRP', name: 'XRP')
augur = Crypto.create(symbol: 'REP', name: 'Augur')
stellar = Crypto.create(symbol: 'XLM', name: 'Stellar Lumens')
eos = Crypto.create(symbol: 'EOS', name: 'EOS')
tezos = Crypto.create(symbol: 'XTZ', name: 'Tezos')
dash = Crypto.create(symbol: 'DASH', name: 'Dash')
orchid = Crypto.create(symbol: 'OXT', name: 'Orchid')
# binance_coin = Crypto.create(symbol: 'BNB', name: 'Binance Coin')
# bitcoin_sv = Crypto.create(symbol: 'BSV', name: 'Bitcoin SV')
# monero = Crypto.create(symbol: 'XMR', name: 'Monero')

Portfolio.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('portfolios')
Portfolio.create([
    {user_id: demo_user.id, crypto_id: dollar.id, units: 1000000},
    {user_id: demo_user.id, crypto_id: bitcoin.id, units: 10.5},
    {user_id: demo_user.id, crypto_id: bitcoin_cash.id, units: 18},
    {user_id: demo_user.id, crypto_id: ethereum.id, units: 42.5},
    {user_id: demo_user.id, crypto_id: ethereum_classic.id, units: 30.5},
    {user_id: demo_user.id, crypto_id: litecoin.id, units: 3},
    {user_id: demo_user.id, crypto_id: ox.id, units: 84},
    {user_id: demo_user.id, crypto_id: usd_coin.id, units: 12},
    {user_id: demo_user.id, crypto_id: bat.id, units: 21},
    {user_id: demo_user.id, crypto_id: chainlink.id, units: 26},
    {user_id: demo_user.id, crypto_id: dai.id, units: 43},
    {user_id: demo_user.id, crypto_id: zcash.id, units: 4.8},
    {user_id: demo_user.id, crypto_id: xrp.id, units: 32},
    {user_id: demo_user.id, crypto_id: augur.id, units: 0.75},
    {user_id: demo_user.id, crypto_id: stellar.id, units: 85},
    {user_id: demo_user.id, crypto_id: eos.id, units: 61},
    {user_id: demo_user.id, crypto_id: tezos.id, units: 72},
    {user_id: demo_user.id, crypto_id: dash.id, units: 40},
    {user_id: demo_user.id, crypto_id: orchid.id, units: 123}
])

Transaction.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('transactions')
Transaction.create([
    {user_id: demo_user.id, crypto_id: bitcoin.id, units: 100.5, price: 100000.00, transaction_type: 'buy'},
    {user_id: demo_user.id, crypto_id: ethereum.id, units: 10, price: 2115.92, transaction_type: 'sell'},
    {user_id: demo_user.id, crypto_id: litecoin.id, units: 100, price: 8221.48, transaction_type: 'buy'},
    {user_id: demo_user.id, crypto_id: ox.id, units: 5, price: 1341.35, transaction_type: 'sell'},
    {user_id: demo_user.id, crypto_id: dai.id, units: 52, price: 3817.29, transaction_type: 'buy'},
    {user_id: demo_user.id, crypto_id: xrp.id, units: 38, price: 584.35, transaction_type: 'sell'},
    {user_id: demo_user.id, crypto_id: tezos.id, units: 9, price: 1022.48, transaction_type: 'sell'}
])

Watchlist.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('watchlists')
Watchlist.create([
    {user_id: demo_user.id, crypto_id: bitcoin.id},
    {user_id: demo_user.id, crypto_id: ethereum.id},
    {user_id: demo_user.id, crypto_id: litecoin.id},
    {user_id: demo_user.id, crypto_id: ox.id},
    {user_id: demo_user.id, crypto_id: dai.id},
    {user_id: demo_user.id, crypto_id: orchid.id}
])