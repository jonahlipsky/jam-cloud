import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      let newState = merge({}, state);
      action.users.forEach((user) => {
        newState[`${user.id}`] = user;
      });
      return newState;
    default:
      return state;
  }
};