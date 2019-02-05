json.array! @tracks do |track|
  json.extract! track, :id, :title, :user_id, :album_id, :created_at
  json.imageUrl url_for(track.image)
  json.soundUrl url_for(track.sound_file)
  json.likes track.likes.reduce(0){ |acc, _| acc + 1 }
end