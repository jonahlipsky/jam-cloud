class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :artist_id
      t.integer :album_id
    end
    add_index :tracks, :artist_id
    add_index :tracks, :album_id
  end
end
