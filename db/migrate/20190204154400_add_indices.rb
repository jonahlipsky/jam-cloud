class AddIndices < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:user_id, :track_id], unique: true
  end
end
