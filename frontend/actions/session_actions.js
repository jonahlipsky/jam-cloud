import * as SESSION_API_UTIl from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";



export const fetchAllUsers = () => dispatch => {
  return SESSION_API_UTIl.fetchAllUsers().then(users => dispatch(receiveAllUsers(users)));
};

export const signin = user => dispatch => {
  
  return SESSION_API_UTIl.signin(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
    );
  };
  
  
export const signout = () => dispatch => (
  SESSION_API_UTIl.signout().then(user => dispatch(signoutCurrentUser()))
);

export const signup = user => dispatch => (
  SESSION_API_UTIl.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err))
  )
);


const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});