class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User


  has_many :playlist_adds,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistAdd

  has_many :songs,
    through: :playlist_adds,
    source: :song

  def self.find_title(playlist_title)
    Playlist.find_by(title: playlist_title)
  end

  def self.find_playlist(query_params)
    playlist = Playlist.find_title(query_params[:playlist][:title])
    if playlist
    else
      playlist = Playlist.new(query_params.require(:playlist_add).permit(:title))
      playlist.save
    end
    playlist
  end
end
