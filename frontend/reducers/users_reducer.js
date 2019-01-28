import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_TRACK, RECEIVE_TRACK } from '../actions/track_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let user_id;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newUser = merge({}, { id: action.currentUser.id, email: action.currentUser.email, 
        username: action.currentUser.username, track_ids: action.currentUser.track_ids } );
      return merge({}, state, { [action.currentUser.id]: newUser });
    case RECEIVE_ALL_USERS:
      action.users.forEach((user) => {
        let newUser = {id: user.id, email: user.email, username: user.username, track_ids: user.track_ids};
        newState[`${user.id}`] = newUser;
      });
      return newState;
    case RECEIVE_TRACK:
      user_id = action.track.user_id;
      newState[user_id].track_ids.push(action.track.id);
      return newState;
    case REMOVE_TRACK:
      user_id = action.track.user_id;
      let trackPosition = newState[user_id].track_ids.indexOf(action.track.id);
      newState[user_id].track_ids.splice(trackPosition, 1);
      return newState;
    default:
      return state;
  }
};