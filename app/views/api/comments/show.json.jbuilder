json.extract! @comment, :id, :body, :author_id, :parent_comment_id, :child_comment_ids, :track_id, :updated_at
json.likes @comment.likes.reduce(0){ |acc, el| acc + 1 }
json.extract! @comment.author, :username
json.profilePictureUrl url_for(@comment.author.profile_picture)