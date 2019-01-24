export const getTracks = () => ($.ajax({
  method: 'GET',
  url: '/api/tracks'
}));

