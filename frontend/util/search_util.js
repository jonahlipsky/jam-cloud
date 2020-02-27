export const search = (searchQuery) => ($.ajax({
  method: 'GET',
  url: `tracks/search/${searchQuery}`
}));