class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :songs, :artist_id
  end
end
