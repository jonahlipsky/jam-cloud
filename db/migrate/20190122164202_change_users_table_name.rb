class ChangeUsersTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :tracks, :users
  end
end
