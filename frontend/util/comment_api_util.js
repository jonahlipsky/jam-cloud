export const fetchTrackComments = (trackId) => ($.ajax({
  method: 'GET',
  url: '/api/comments',
  data: { track_id: trackId }
}));

export const createComment = (trackId, formData) => ($.ajax({
  method: "POST",
  url: `/api/tracks/${trackId}/comments`,
  data: formData,
  contentType: false,
  processData: false
}));

export const removeComment = commentId => ($.ajax({
  method: "DELETE",
  url: `/api/comments/${commentId}`
}));