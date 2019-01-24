export const signin = (user) => ($.ajax({
  method: 'POST',
  url: '/api/session',
  data: { user }
}));

export const signup = user => ($.ajax({
  method: 'POST',
  url: '/api/users',
  data: { user }
}));

export const signout = () => ($.ajax({
  method: 'DELETE',
  url: '/api/session/'
}));

export const fetchAllUsers = () => ($.ajax({
  method: 'GET',
  url: '/api/users'
})); 