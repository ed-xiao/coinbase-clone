class Crypto < ApplicationRecord
    validates :symbol, :name, presence: true, uniqueness: true

    has_many :portfolios
    has_many :transactions
    has_many :watchlists

    def self.fetch_current_value(symbols)
        url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
        # url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms='
        syms = symbols.join(',').concat('&tsyms=USD&api_key=')
        api_key = Rails.application.credentials.cryptocompare[:api_key]
        response = Faraday.get url+syms+api_key
        values = JSON.parse(response.body)
        # debugger
        # https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=INSERT-YOUR-API-KEY-HERE
    end

    def self.fetch_crypto_detail(symbols)
        # url = "https://min-api.cryptocompare.com/data/generateAvg?fsym=#{symbol}&tsym=USD&e=Kraken"
        syms = symbols.join(',')
        url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=#{syms}&tsyms=USD"

        response = Faraday.get url
        values = JSON.parse(response.body)
    end

    def self.fetch_historical_value(symbol)
        url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=#{symbol}&tsym=USD&limit=90"
        response = Faraday.get url
        values = JSON.parse(response.body)
    end

end