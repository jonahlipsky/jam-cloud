json.extract! user, :id, :email, :username, :track_ids
# json.tracks user.track_ids do |track|
#   json.id track.id
#   json.user_id track.user_id
#   json.title track.title
#   json.track url_for(track.track)
#   json.image url_for(track.image)
# end