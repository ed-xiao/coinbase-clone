class Api::CryptosController < ApplicationController
    def hist
        @my_crypto = Crypto.find(params[:id])
        symbol = @my_crypto['symbol']
        # symbol = Crypto.find(params[:id])['symbol']
        @crypto = Crypto.fetch_historical_value(symbol)
        @crypto = @crypto['Data']['Data']
    end

    def index
        @cryptos = Crypto.all
    end

    def show
        if params[:id] == 'all'
            @cryptos = Crypto.all
            symbols = @cryptos.map {|crypto| crypto.symbol}
        else
            @cryptos = Crypto.find([params[:id]])
            symbols = @cryptos[0]['symbol']
        end
        # @value = Crypto.fetch_current_value([@crypto['symbol']])
        # debugger
        @value = Crypto.fetch_crypto_detail([symbols])
    end
end

# $.ajax({
#     url:"api/cryptos/BTC"
#     }
# }).then(res => console.log(res));