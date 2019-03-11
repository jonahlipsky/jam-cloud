export const createLike = (likeableType, likeableId, sessionId) => ($.ajax({
  method: 'POST',
  url: '/api/likes',
  data: { likeable_id: likeableId, 
    likeable_type: likeableType,
    current_user_id: sessionId }
}));

export const deleteLike = like_id => ($.ajax({
  method: 'DELETE',
  url: `/api/likes/${like_id}`
}));

export const fetchAllLikes = () => ($.ajax({
  method: 'GET',
  url: '/api/likes'
}));