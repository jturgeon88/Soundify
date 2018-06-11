json.extract! @playlist_add, :id
json.set! :playlist_id, @playlist_add.playlist.id   #TODO this isn't working
#for some reason the .playlist is returning nil
#maybe we need to query for the playlist associated with the playlist add in order for the playlist to be available to us here
