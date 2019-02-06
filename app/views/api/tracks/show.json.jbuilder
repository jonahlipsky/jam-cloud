json.extract! @track, :id, :title, :user_id, :album_id, :comment_ids, :created_at
json.likes @track.likes.reduce(0){ |acc, _| acc + 1 }
json.imageUrl url_for(@track.image)
json.soundUrl url_for(@track.sound_file)
# json.commentIds do 
#   json.array! track.comments do |comment|
#     json.extract! comment, :id, :body, :author_id, :track_id, :parent_comment_id, :updated_at
#     json.extract! comment.author, :username
#     json.profilePictureUrl url_for(comment.author.profile_picture)
#   end
end