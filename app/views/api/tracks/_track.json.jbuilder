json.extract! track, :id, :title, :user_id, :album_id, :comment_ids, :created_at, :widget_identifier, :liker_ids
json.extract! track.user, :username
json.likes track.liker_ids.length
json.imageUrl url_for(track.image)
json.soundUrl url_for(track.sound_file)