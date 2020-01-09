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
bitcoin = Crypto.create(symbol: 'BTC', name: 'Bitcoin')
ethereum = Crypto.create(symbol: 'ETH', name: 'Ethereum')
bitcoin_cash = Crypto.create(symbol: 'BCH', name: 'Bitcoin Cash')
litecoin = Crypto.create(symbol: 'LTC', name: 'Litecoin')
xrp = Crypto.create(symbol: 'XRP', name: 'XRP')
tether = Crypto.create(symbol: 'USDT', name: 'Tether')
eos = Crypto.create(symbol: 'EOS', name: 'EOS')
binance_coin = Crypto.create(symbol: 'BNB', name: 'Binance Coin')
bitcoin_sv = Crypto.create(symbol: 'BSV', name: 'Bitcoin SV')
monero = Crypto.create(symbol: 'XMR', name: 'Monero')
stellar = Crypto.create(symbol: 'XLM', name: 'Stellar')

Portfolio.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('portfolios')
Portfolio.create([
    {user_id: demo_user.id, crypto_id: bitcoin.id, units: 10.5},
    {user_id: demo_user.id, crypto_id: ethereum.id, units: 42.5},
    {user_id: demo_user.id, crypto_id: bitcoin_cash.id, units: 18},
    {user_id: demo_user.id, crypto_id: litecoin.id, units: 3}
])