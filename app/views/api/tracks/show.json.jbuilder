json.extract! @track, :id, :title, :user_id, :album_id, :created_at
json.likes @track.likes.reduce(0){ |acc, _| acc + 1 }
json.imageUrl url_for(@track.image)
json.soundUrl url_for(@track.sound_file)
