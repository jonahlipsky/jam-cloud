json.extract! user, :id, :email, :username, :track_ids, :created_at
json.profilePicture url_for(user.profile_picture)
json.likes do 
  json.array! user.likes do |like|
    json.extract! like, :id, :track_id
  end
end