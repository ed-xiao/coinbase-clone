class Api::TransactionsController < ApplicationController
    def create
        @crypto = findCrypto(params[:transaction][:symbol])

        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id
        @transaction.crypto_id = @crypto.id
        
        value = getValue(@crypto.symbol)
        
        @transaction.price = value[@crypto.symbol]['USD'] * @transaction.units
        
        usd = findDollar #only needed for buying
        @usd_buying_power = buying_power(current_user.id, usd.id) #only needed for buying
        # debugger
        if params[:transaction][:transaction_type] == 'buy'
            if @usd_buying_power && @transaction.price > @usd_buying_power.units
                render json: ['Insufficient Funds'], status: 401
            elsif @transaction.save
                # @portfolio_rec = Portfolio.find_by(user_id: current_user.id, crypto_id: @crypto.id)
                @portfolio_rec = findPortfolio(current_user.id, @crypto.id)
                if @portfolio_rec
                    @portfolio_rec.units += @transaction.units
                    if @portfolio_rec.save
                        @usd_buying_power.units -= @transaction.price
                        if @usd_buying_power.save
                            render json: ['success'], status: 200
                        else
                            render json: @usd_buying_power.errors.full_messages, status: 422
                        end
                    else
                        render json: @portfolio_rec.errors.full_messages, status: 422
                    end
                else
                    @portfolio_rec = Portfolio.new(user_id: current_user.id, crypto_id: @crypto.id, units: @transaction.units)
                    if @portfolio_rec.save
                        render json: ['success'], status: 200
                    else
                        render json: @portfolio_rec.errors.full_messages, status: 422
                    end
                end
            else
                render json: @transaction.errors.full_messages, status: 422
            end
        elsif params[:transaction][:transaction_type] == 'sell'
            @portfolio_rec = findPortfolio(current_user.id, @crypto.id)
            if !@portfolio_rec || @portfolio_rec.units < @transaction.units
                render json: ['Insufficient crypto units to sell'], status: 401
            else
                if @transaction.save
                    # update portfolio by subracting units from crypto and adding units to USD
                    @portfolio_rec.units -= @transaction.units
                    if @portfolio_rec.save
                        #add units to USD for Portfolio
                        @usd_buying_power.units += @transaction.price
                        if @usd_buying_power.save
                            render json: ['success'], status: 200
                        else
                            render json: @usd_buying_power.errors.full_messages, status: 422
                        end
                    else
                        render json: @portfolio_rec.errors.full_messages, status: 422
                    end
                else
                    render json: @transaction.errors.full_messages, status: 422
                end
            end
        elsif params[:transaction][:transaction_type] == 'convert'
            # work on this later, will have to refactor frontend to send both cryptos in transaction
        else
            render json: ['Unknown transaction type'], status: 401
        end
    end

    private
    def transaction_params
        params.require(:transaction).permit(:units, :transaction_type)
    end

    def findDollar
        Crypto.find_by(symbol: 'USD')
    end

    def findCrypto(symbol)
        Crypto.find_by(symbol: symbol)
    end

    def getValue(symbol)
        Crypto.fetch_current_value([symbol])
    end

    def buying_power(id, crypto_id)
        Portfolio.find_by(user_id: id, crypto_id: crypto_id)
    end

    def findPortfolio(user_id, crypto_id)
        Portfolio.find_by(user_id: user_id, crypto_id: crypto_id)
    end
end

# {
#     transaction: {
#         symbol,   //backend will find crypto_id from symbol
#         units
#         transaction_type,
#         price    //backend will determine
#     }
# };

# test creating a trx
# $.ajax({
#     url:"api/transactions",
#     method:"POST",
#     data: {
#         transaction:{
#             symbol: 'BTC',
#             units: 100,
#             transaction_type: 'sell'
#         }
#     }
# }).then(res => console.log(res));


# user = User.find_by(name: 'David')
# user.update(name: 'Dave')