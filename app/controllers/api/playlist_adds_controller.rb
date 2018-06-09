class Api::PlaylistAddsController < ApplicationController
   skip_before_action :verify_authenticity_token

  def create
    @playlist_add = PlaylistAdd.new
    @playlist_add.playlist_id = params[:playlist_id]
    @playlist_add.song_id = params[:song_id]
    puts @playlist_add

    if @playlist_add.save
      render :show        #this show SHOULD render the playlist; We'll see if it works
    else
      render json: ["Song already on this playlist"], status: 422
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
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
  # def playlist_add_params
  #   params.require(:playlist_add).permit(:song_id, :playlist_id)
  # end
end
