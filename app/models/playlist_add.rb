class PlaylistAdd < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :playlist, optional: true,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :Playlist

  belongs_to :song, optional: true,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song


end
