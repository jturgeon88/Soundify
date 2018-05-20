class Api::SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show" #TODO Do I want to change this to api/playlists? May need to create view for playlists first
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # render "api/session"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
