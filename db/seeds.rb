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

artist1 = Artist.create!({ name: "Isaiah Koalainmytreetoo"})
artist2 = Artist.create!({ name: "The FooBar Fighters"})
artist3 = Artist.create!({ name: "Jelton Ohn"})
artist4 = Artist.create!({ name: "Mel the Groovy Human Being"})
artist5 = Artist.create!({ name: "Fax Most"})
artist6 = Artist.create!({ name: "RDJ2"})
artist7 = Artist.create!({ name: "Onobob"})
artist8 = Artist.create!({ name: "Alicia Values"})
artist9 = Artist.create!({ name: "JSON Derulo"})
artist10 = Artist.create!({ name: "Render Method Man"})
artist11 = Artist.create!({ name: "Whitesnake_case"})
artist12 = Artist.create!({ name: "Run DMC++"})
artist13 = Artist.create!({ name: "Fleetwood Macintosh"})
artist14 = Artist.create!({ name: "Perl Jam"})
artist15 = Artist.create!({ name: "Big-O Smalls"})
artist16 = Artist.create!({ name: "The Arctic Monkey-Value Pairs"})
artist17 = Artist.create!({ name: "Objective C-lo Green"})
artist18 = Artist.create!({ name: "DisClosure"})
artist19 = Artist.create!({ name: "G-Unit Testing"})


song1 = Song.create!({ name: "Ukulele", artist_id: artist1.id, src: "bensound-ukulele.mp3"})
song2 = Song.create!({ name: "Epic", artist_id: artist2.id, src: "bensound-epic.mp3"})
song3 = Song.create!({ name: "Acoustic Breeze", artist_id: artist1.id, src: "bensound-acousticbreeze.mp3"})
song4 = Song.create!({ name: "A New Beginning", artist_id: artist3.id, src: "bensound-anewbeginning.mp3"})
song5 = Song.create!({ name: "Creative Minds", artist_id: artist2.id, src: "bensound-creativeminds.mp3"})
#
playlist_add1 = PlaylistAdd.create!({ playlist_id: playlist1.id, song_id: song1.id})
playlist_add2 = PlaylistAdd.create!({ playlist_id: playlist1.id, song_id: song2.id})
playlist_add3 = PlaylistAdd.create!({ playlist_id: playlist1.id, song_id: song3.id})
playlist_add4 = PlaylistAdd.create!({ playlist_id: playlist1.id, song_id: song4.id})

playlist_add5 = PlaylistAdd.create!({ playlist_id: playlist2.id, song_id: song4.id})
playlist_add6 = PlaylistAdd.create!({ playlist_id: playlist2.id, song_id: song1.id})
