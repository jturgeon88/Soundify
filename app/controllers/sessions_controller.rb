class SessionsController < ApplicationController
  def new

  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login(user)
    else
      flash.now[:errors] = "NO GO on the username and password"
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
