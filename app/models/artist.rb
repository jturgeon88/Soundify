class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :songs,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Song

end
