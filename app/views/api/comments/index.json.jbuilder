json.array! @comments do |comment|
  json.extract! comment, :id, :body, :author_id, :parent_comment_id, :track_id, :updated_at
  json.likes comment.likes.reduce(0){ |acc, el| acc + 1 }
end