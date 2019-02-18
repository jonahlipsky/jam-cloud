class RemoveIndicesRecentTracks < ActiveRecord::Migration[5.2]
  def change
    remove_index :recent_tracks, column: [:user_id, :track_id]
    add_index :recent_tracks, :user_id
    add_index :recent_tracks, :track_id
  end
end
