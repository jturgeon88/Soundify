class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
                        #TODO Not sure if this is going to give me
                        #all playlists with the current_user.id matching author_id or songs that match that
    render :index
  end

  def new

  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])     # TODO .includes(:songs)

    if @playlist
      render :show
    else
      render json: ["this playlist does not exist"], status: 422
    end

  end


  def edit

  end

  def update
    @playlist = current_user.playlists.find_by(id: params[:id])

    if @playlists && @playlist.update_attributes(playlist_params)
      render :show
    elsif @playlist
      render json: [Time.now].concat(@playlist.errors.full_messages), status: 424
    else
      render json: ["This playlist aint yours sucka! No touchy."], status: 422
    end
  end

  def destroy
    @playlist = current_user.playlists.find_by(id: params[:id])

    if @playlist
      @playlist.destroy
      render :delete
    else
      render json: ["This playlist aint yours sucka! Best not be destructive to others."], status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
