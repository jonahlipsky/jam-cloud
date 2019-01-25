export const getTracks = () => ($.ajax({
  method: 'GET',
  url: '/api/tracks'
}));

export const getTrack = (id) => ($.ajax({
  method: 'GET',
  url: `/api/tracks/${id}`
}));