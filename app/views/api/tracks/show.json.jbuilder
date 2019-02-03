json.extract! @track, :id, :title, :user_id, :album_id
json.imageUrl url_for(@track.image)
json.soundUrl url_for(@track.sound_file
