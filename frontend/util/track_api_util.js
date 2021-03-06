export const sendRecentTrack = trackId => ($.ajax({
  method: 'POST',
  url: `/api/tracks/${trackId}/recent_tracks`
}));

export const updateTrack = (formData, id) => ($.ajax({
  method: 'PATCH',
  url: `/api/tracks/${id}`,
  data: formData,
  contentType: false,
  processData: false
}));

export const getTracks = () => ($.ajax({
  method: 'GET',
  url: '/api/tracks'
}));

export const getTrack = (id) => ($.ajax({
  method: 'GET',
  url: `/api/tracks/${id}`
}));

export const postTrack = (formData) => ($.ajax({
  url: '/api/tracks',
  method: 'POST',
  data: formData,
  contentType: false,
  processData: false
}));

export const removeTrack = id => ($.ajax({
  url: `/api/tracks/${id}`,
  method: 'DELETE'
}));