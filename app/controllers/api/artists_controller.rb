class Api::ArtistsController < ApplicationController
  before_action :require_login

  def index
    @artists = Artist.all

    render :index
  end

  def show
    @artist = Artist.find_by(id: params[:id])

    if @artist
      render :show
    else
      render json: ["This artist does not exist"], status: 422
    end
  end
end
