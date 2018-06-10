@playlist_adds.each do |playlist_add|
  json.set! playlist_add.id do
    json.partial! './api/playlist_adds/playlist_add', playlist_add: playlist_add
  end
end
