class PlaylistAdd < ApplicationRecord
  belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playist_id,
    class_name: :Playlist

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song
end
