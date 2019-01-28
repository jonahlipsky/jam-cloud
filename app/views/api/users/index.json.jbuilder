json.array! @users do |user|
  json.partial! 'api/users/user', user: user
end

# json.extract! user, :id, :email, :username
# json.tracks user.tracks do |track|
#   json.id track.id
#   json.user_id track.user_id
#   json.title track.title
#   json.track url_for(track.track)
#   json.image url_for(track.image)
# end