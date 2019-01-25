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