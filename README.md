# CoinLabo

CoinLabo, a Coinbase clone, is a cryptocurrency investing application that allows users to purchase and sell cryptocurrencies listed on the Coinbase exchange.

[Live Demo](http://coinbase-aa.herokuapp.com/)

## Technologies

* Backend: Ruby on Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* [CryptoCompare API](https://min-api.cryptocompare.com/)
* [Recharts](http://recharts.org/en-US)
* SCSS

## Features

* Secure user authentication using BCrypt
* Personal dashboard displaying current asset holdings, transaction history, and watchlist
* Real-time and historical price data in USD of the top 19 crytocurrencies available on Coinbase
* Interactive line charts display price data over time

## Dashboard & Portfolio

Upon sign in, the user is redirected to their dashboard which displays their cryptocurrency watchlist, portfolio and transaction history.

## Cryptocurrency Show Page

The crytopcurrency show page displays a line chart showing daily closing price history over the last 90 days.

## Fetching Cryptocurrency Data

The home dashboard contains three separate react components with their own data needs. This caused unnecessary logic complexity as these ajax requests would return in unpredictable orders. To solve this issue, I wrapped the four ajax requests with Promise.all to reliabley update Redux state once all promises have returned.