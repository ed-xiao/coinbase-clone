class Api::PortfoliosController < ApplicationController
    def index
        @portfolio = Portfolio.where(user_id: current_user.id)
        # @crypto = Crypto.joins(:portfolios).where(portfolios: {user_id: current_user.id})

        # .includes(:crypto)
        # Crypto.joins(:portfolios).where(portfolios: {user_id: current_user.id})
        # Portfolio.joins(:crypto).where(user_id: 18).select("crypto.name")

        # sql = 'select * from portfolios p join cryptos c on p.crypto_id on c.id where p.user_id = 18;'
        # ActiveRecord::Base.connection.execute(sql)
    end
end