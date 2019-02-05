class MakeLikesLikeable < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :track_id
    remove_column :likes, :user_id
    add_column :likes, :likeable_id, :integer
    add_column :likes, :likeable_type, :string
    add_index :likes, [:likeable_id, :likeable_type]
  end
end
