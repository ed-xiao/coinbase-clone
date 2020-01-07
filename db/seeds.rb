# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'demo_user', email: 'demo@email.com', password: 'password')

Crypto.destroy_all
Crypto.create(symbol: 'BTC', name: 'Bitcoin')
Crypto.create(symbol: 'ETH', name: 'Ethereum')
Crypto.create(symbol: 'BCH', name: 'Bitcoin Cash')
Crypto.create(symbol: 'LTC', name: 'Litecoin')
Crypto.create(symbol: 'XRP', name: 'XRP')
Crypto.create(symbol: 'USDT', name: 'Tether')
Crypto.create(symbol: 'EOS', name: 'EOS')
Crypto.create(symbol: 'BNB', name: 'Binance Coin')
Crypto.create(symbol: 'BSV', name: 'Bitcoin SV')
Crypto.create(symbol: 'XMR', name: 'Monero')
Crypto.create(symbol: 'XLM', name: 'Stellar')
