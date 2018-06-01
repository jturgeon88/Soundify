json.extract! playlist, :id, :title, :author_id
json.songs playlist.songs.pluck(:id) #TODO not sure about this one
json.songs playlist.songs.count
