class CreateRecentTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :recent_tracks do |t|
      t.integer :user_id
      t.integer :track_id
      t.timestamps
    end
    add_index :recent_tracks, [:user_id, :track_id], unique: true
  end
end
