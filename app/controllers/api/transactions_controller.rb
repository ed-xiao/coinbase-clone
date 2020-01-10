class Api::TransactionsController < ApplicationController
    def create
        symbol = params[:transaction][:symbol]
        @crypto = Crypto.find_by(symbol: symbol)
        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id
        @transaction.crypto_id = @crypto.id
        
        value = Crypto.fetch_current_value([symbol])
        
        @transaction.price = value[symbol]['USD'] * @transaction.units
        
        usd_id = Crypto.find_by(symbol: 'USD')
        buying_power = Portfolio.find_by(user_id: current_user.id, crypto_id: usd_id)
        
        debugger
        if buying_power && @transaction.price > buying_power.units
            render json: ['Insufficient Funds'], status: 401
        else
            if @transaction.save
                #logic to increase shares owned by user
                @portfolio_rec = Portfolio.find_by(user_id: current_user.id, crypto_id: @crypto.id)
                if @portfolio_rec
                    @portfolio_rec.units += @transaction.units
                    if @portfolio_rec.save
                        buying_power.units -= @transaction.price
                        if buying_power.save
                            render json: ['success'], status: 200
                        else
                            render json: @buying_power.errors.full_messages, status: 422
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
        end
    end

    private
    def transaction_params
        params.require(:transaction).permit(:units, :transaction_type)
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
#             transaction_type: 'buy'
#         }
#     }
# }).then(res => console.log(res));