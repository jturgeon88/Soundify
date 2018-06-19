class Api::SongsController < ApplicationController

  def index
    @songs = Song.all

    render :index
  end

  def show
    @song = Song.find_by(id: params[:id])     # TODO .includes(:songs)

    if @song
      render :show
    else
      render json: ["this song does not exist"], status: 422
    end
  end

end
