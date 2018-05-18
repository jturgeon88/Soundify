class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # render "api/playlists"  TODO this may need to be api/users/:userId/playlists
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end