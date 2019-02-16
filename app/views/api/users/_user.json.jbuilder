json.extract! user, :id, :email, :username, :track_ids, 
  :recently_played_track_ids, :follower_ids, :followed_user_ids, 
  :liked_track_ids, :liked_comment_ids, :created_at
json.profilePicture url_for(user.profile_picture)
json.followers user.follower_ids.length
json.liked_objects do 
  json.array! user.liked_objects do |like|
    json.extract! like, :id, :likeable_id, :likeable_type, :user_id
  end
end