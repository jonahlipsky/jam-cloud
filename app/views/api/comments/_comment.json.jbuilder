json.extract! comment, :id, :body, :author_id, :parent_comment_id, :child_comment_ids, :track_id, :liker_ids, :updated_at
json.likes comment.liker_ids.length
json.extract! comment.author, :username
json.profilePictureUrl url_for(comment.author.profile_picture)