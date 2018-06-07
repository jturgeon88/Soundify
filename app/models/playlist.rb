class Playlist < ApplicationRecord
  validates :title, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User


  has_many :playlist_adds,
    primary_key: :id,
    foreign_key: :playist_id,
    class_name: :PlaylistAdd

  has_many :songs,
    through: :playlist_adds,
    source: :song
end
