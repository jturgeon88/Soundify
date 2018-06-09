class Api::PlaylistAddsController < ApplicationController
   skip_before_action :verify_authenticity_token

  def create
    @playlist = Playlist.find_by(id: params[:id])
    @song = Song.find_by(id: params[:id])
    @playlist_add = PlaylistAdd.new
    @playlist_add.playlist_id = @playlist.id
    @playlist_add.song_id = @song.id


    if @playlist_add.save!
      render :show        #this show SHOULD render the playlist; We'll see if it works
    else
      render json: ["this song is already on this playlist"], status: 422
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:playlist_id])
    @playlist.id = params[:id]
  end



  def destroy
    @playlist_add = PlaylistAdd.find_by(id: params[:id])

    if @playlist_add
      @playlist_add.destroy
      render :delete
    else

    end
  end

  # private
  #
  def playlist_add_params
    params.require(:playlist_add).permit(:song_id, :playlist_id)
  end
end
