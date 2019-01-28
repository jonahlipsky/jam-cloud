json.extract! @track, :id, :title, :user_id, :album_id
json.imageUrl url_for(@track.image)
json.trackUrl url_for(@track.track)
