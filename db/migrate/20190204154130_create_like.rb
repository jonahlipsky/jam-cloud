class CreateLike < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :track_id
      t.integer :user_id
      t.timestamps
    end
  end
end
