class Api::WatchlistsController < ApplicationController
    def index
        # @watched_cryptos = current_user.watched_cryptos
        @watchlists = current_user.watchlists
    end
    def create
    end
    def destroy
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:crypto_id)
    end
end
