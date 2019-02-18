if user.profile_background.attached?
  json.extract! user, :id, :email, :username, :track_ids, 
    :recently_played_track_ids, :follower_ids, :followed_user_ids, 
    :liked_track_ids, :liked_comment_ids, :liked_object_ids,
    :recent_tracks, :created_at
  json.profilePicture url_for(user.profile_picture)
  json.followers user.follower_ids.length
  json.profileBackground url_for(user.profile_background)
else
  json.extract! user, :id, :email, :username, :track_ids, 
    :recently_played_track_ids, :follower_ids, :followed_user_ids, 
    :liked_track_ids, :liked_comment_ids, :liked_object_ids, 
    :recent_tracks, :created_at
  json.profilePicture url_for(user.profile_picture)
  json.followers user.follower_ids.length
end
