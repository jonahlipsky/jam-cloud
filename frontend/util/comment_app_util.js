export const fetchTrackComments = (track_id) => ($.ajax({
  method: 'GET',
  url: '/api/comments',
  data: { track_id }
}));

export const createComment = (track_id, comment) => ($.ajax({
  method: "POST",
  url: `/api/tracks/${track_id}/comments`,
  data: { comment }
}));