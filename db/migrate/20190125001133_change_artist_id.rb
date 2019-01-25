class ChangeArtistId < ActiveRecord::Migration[5.2]
  def change
    rename_column :tracks, :artist_id, :user_id
  end
end
