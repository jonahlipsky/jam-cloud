json.extract! user, :id, :email, :username, :track_ids, 
  :recently_played_track_ids, :follower_ids, :followed_user_ids, 
  :liked_track_ids, :liked_comment_ids, :liked_object_ids, :created_at
json.profilePicture url_for(user.profile_picture)
json.followers user.follower_ids.length