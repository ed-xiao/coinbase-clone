class Api::WatchlistsController < ApplicationController
    def index
        # @watched_cryptos = current_user.watched_cryptos
        @watchlists = current_user.watchlists
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id
        if @watchlist.save
            render json: ['success'], status: 200
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    def destroy
        @watchlist = Watchlist.find(params[:id])
        if @watchlist.destroy
            render json: ['success'], status: 200
        else
            render json: @watchlist.errors.full_messages, status: 422
        end
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:crypto_id)
    end
end

# test creating a watched crypto
# $.ajax({
#     url:"api/watchlists",
#     method:"POST",
#     data: {
#         watchlist:{
#             crypto_id: 3
#         }
#     }
# }).then(res => console.log(res));

# test deleting a watched crypto
# $.ajax({
#     url:"api/watchlists/4",
#     method:"DELETE"
# }).then(res => console.log(res));
