json.extract! playlist, :id, :title, :author_id, :songs



# ARCHIVE:
# adds a title attribute to the playlist object (outside of songs array)
# playlist.songs.each do |song|
#   json.set! :title, song.title
# end

# narrows down each song object to only contain the title
# json.songs playlist.songs.pluck(:title) #TODO not sure about this one


# json.songs playlist.songs.count
