class PlaylistAdd < ApplicationRecord
  validates :playlist_id, :song_id, presence: true
  validates :playlist_id, uniqueness: { scope: :playlist_id }
  validates :song_id, uniqueness: { scope: :song_id }

  belongs_to :playlist, optional: true,
    primary_key: :id,
    foreign_key: :playist_id,
    class_name: :Playlist

  belongs_to :song, optional: true,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song


end
