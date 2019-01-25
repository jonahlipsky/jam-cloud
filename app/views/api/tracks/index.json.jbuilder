json.array! @tracks do |track|
  json.extract! track, :id, :title, :user_id, :album_id
  json.photoUrl url_for(track.image)
  json.trackUrl url_for(track.track)
end