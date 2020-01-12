class Api::CryptosController < ApplicationController
    def hist
        @my_crypto = Crypto.find(params[:id])
        symbol = @my_crypto['symbol']
        # symbol = Crypto.find(params[:id])['symbol']
        @crypto = Crypto.fetch_historical_value(symbol)
        @crypto = @crypto['Data']['Data']
    end

    def show
        @crypto = Crypto.find(params[:id])
        # @value = Crypto.fetch_current_value([@crypto['symbol']])
        # debugger

        @value = Crypto.fetch_crypto_detail(@crypto['symbol'])
    end
end

# $.ajax({
#     url:"api/cryptos/BTC"
#     }
# }).then(res => console.log(res));