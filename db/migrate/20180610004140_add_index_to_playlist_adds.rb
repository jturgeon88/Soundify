class AddIndexToPlaylistAdds < ActiveRecord::Migration[5.1]
  def change
    remove_index "playlist_adds", name: "index_playlist_adds_on_playlist_id"
    remove_index "playlist_adds", name: "index_playlist_adds_on_song_id"
    add_index :playlist_adds, [:playlist_id, :song_id], unique: true
    add_index :playlist_adds, [:song_id, :playlist_id], unique: true
  end
end
