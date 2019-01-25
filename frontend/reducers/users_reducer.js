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
        let tracks = [];
        user.track_ids.forEach((trackId) => {
          tracks.push(trackId['id']);
        });
        let newUser = {id: user.id, email: user.email, track_ids: tracks};
        newState[`${user.id}`] = newUser;
      });
      return newState;
    default:
      return state;
  }
};