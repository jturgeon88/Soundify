class CreatePlaylistAdds < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_adds do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
    add_index :playlist_adds, :playlist_id, unique: true
    add_index :playlist_adds, :song_id, unique: true
  end
end
