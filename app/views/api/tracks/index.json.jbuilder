json.array! @tracks do |track|
  json.extract! track, :id, :title, :artist_id, :album_id
  json.photoUrl url_for(track.image)
  json.trackUrl url_for(track.track)
end