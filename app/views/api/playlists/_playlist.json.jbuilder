json.extract! playlist, :id, :title, :author_id, :songs



# ARCHIVE:
# adds a title attribute to the playlist object (outside of songs array)
# playlist.songs.each do |song|
#   json.set! :name, song.name
# end

# narrows down each song object to only contain the name
# json.songs playlist.songs.pluck(:name) #TODO not sure about this one


# json.songs playlist.songs.count
