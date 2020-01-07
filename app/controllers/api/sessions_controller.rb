class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            # params[:user][:username],
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: {}, status: 404
        end
    end
end

# test creating a user
# $.ajax({
#     url:"api/users",
#     method:"POST",
#     data: {
#         user:{
#             username: 'a',
#             email: "a@a.com",
#             password: 'asdf1234'
#         }
#     }
# }).then(res => console.log(res));

# test signing out
# $.ajax({
#     url:"api/session",
#     method:"DELETE"
# }).then(res => console.log(res));

# test signing in
# $.ajax({
#     url:"api/session",
#     method:"POST",
#     data: {
#         user:{
#             username: 'a',
#             password: 'asdf1234'
#         }
#     }
# }).then(res => console.log(res));