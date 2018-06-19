class AddColumnsToSongs < ActiveRecord::Migration[5.1]
  def change
    rename_column :songs, :title, :name
    add_column :songs, :src, :string
    add_column :songs, :img, :string
  end
end
