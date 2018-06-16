class Song < ApplicationRecord
  validates :name, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :playlist_adds,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistAdd

  has_many :playlists,
    through: :playlist_adds,
    source: :playlist

end
