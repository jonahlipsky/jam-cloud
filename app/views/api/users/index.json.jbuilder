json.array! @users do |user|
  json.extract! user, :id, :email
  json.track_ids user.tracks do |track|
    json.id track.id
  end
end