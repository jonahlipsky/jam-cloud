import * as SESSION_API_UTIl from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const SEND_STAGE_ERRORS = "SEND_STAGE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const TOGGLE_RESET_AUTH_FORM = "RESET_AUTH_FORM";

export const toggleResetAuthForm = () => ({
  type: TOGGLE_RESET_AUTH_FORM
});

export const sendStageErrors = (errors) => ({
  type: SEND_STAGE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const receiveUpdatedUser = user => ({
  type: RECEIVE_UPDATED_USER,
  user
});

export const updateUser = (formData, userId) => dispatch => {
  return SESSION_API_UTIl.updateUser(formData, userId).then(
    user => dispatch(receiveUpdatedUser(user)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const fetchUsers = () => dispatch => {
  return SESSION_API_UTIl.fetchUsers().then(users => dispatch(receiveAllUsers(users)));
};

export const signin = user => dispatch => {
  return SESSION_API_UTIl.signin(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );
};
  
  
export const signout = () => dispatch => (
  SESSION_API_UTIl.signout().then(() => dispatch(signoutCurrentUser()))
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