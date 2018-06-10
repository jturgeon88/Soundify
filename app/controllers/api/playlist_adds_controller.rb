class Api::PlaylistAddsController < ApplicationController
   skip_before_action :verify_authenticity_token

   def index
     @playlist_adds = PlaylistAdd.all
     render :index
   end

  def create
    # binding.pry
    @playlist = Playlist.find_by(id: params[:playlistAdd][:playlist_id])
    @song = Song.find_by(id: params[:playlistAdd][:song_id])
    @playlist_add = PlaylistAdd.new
    @playlist_add.playlist_id = @playlist.id      #getting errors here - @playlist returning nil
    @playlist_add.song_id = @song.id


    if @playlist_add.save!
      render :show        #this show SHOULD render the playlist; We'll see if it works
    else
      render json: ["this song is already on this playlist"], status: 422
    end
  end

  def show
    @playlist_add = PlaylistAdd.find_by(id: params[:id])

    if @playlist_add
      render :show
    else
      render json: ["This playlist does not exist"], status: 422
    end
  end



  def destroy
    @playlist_add = PlaylistAdd.find_by(id: params[:id])

    if @playlist_add
      @playlist_add.destroy
      redirect_to api_playlist_url(@playlist_add.playlist_id)
    else
      render json: ["cannot find playlist_add"], status: 422
    end
  end

  # private
  #
  def playlist_add_params
    params.require(:playlist_add).permit(:song_id, :playlist_id)
  end
end
