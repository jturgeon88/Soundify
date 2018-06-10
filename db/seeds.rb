# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Playlist.destroy_all
Song.destroy_all
Artist.destroy_all
PlaylistAdd.destroy_all

def reset_pk_num
  model_names = [User, Playlist, Song, Artist, PlaylistAdd]

  model_names.each do |model_name|
    model_name.destroy_all
  end

  table_names = ["users", "playlists", "songs", "artists", "playlist_adds"]

  table_names.each do |table_name|
    ActiveRecord::Base.connection.reset_pk_sequence!(table_name)
  end
end
reset_pk_num


user1 = User.create!({ username: "demodemo", password: "demodemo" });
user2 = User.create!({ username: "password", password: "password" });

playlist1 = Playlist.create!({ title: "FunkyMonkey", author_id: user1.id })
playlist2 = Playlist.create!({ title: "ChillaGorilla", author_id: user1.id })
playlist3 = Playlist.create!({ title: "GrooveFunkistan", author_id: user2.id })

artist1 = Artist.create!({ name: "Elton John"})
artist2 = Artist.create!({ name: "Foo Fighters"})
artist3 = Artist.create!({ name: "Isaiah Keawuonuka"})

song1 = Song.create!({ title: "Rocket Man", artist_id: artist1.id})
song2 = Song.create!({ title: "Everlong", artist_id: artist2.id})
song3 = Song.create!({ title: "Over The Rainbow", artist_id: artist3.id})
#
playlist_add1 = PlaylistAdd.create!({ playlist_id: playlist1.id, song_id: song1.id})
