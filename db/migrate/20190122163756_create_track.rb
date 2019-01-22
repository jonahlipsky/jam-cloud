class CreateTrack < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :age, null: false
      t.string :gender, null: false
      t.timestamps
    end
  end
end
