json.set! @playlist_add.id do
  json.partial! './api/playlist_adds/playlist_add', playlist_add: @playlist_add
end
