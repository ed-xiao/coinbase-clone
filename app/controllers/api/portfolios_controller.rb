class Api::PortfoliosController < ApplicationController
    def index
        @portfolio = Portfolio.where(user_id: current_user.id)
    end
end
