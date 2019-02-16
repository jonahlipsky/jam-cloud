import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_TRACK, RECEIVE_TRACK, RECEIVE_RECENT_TRACK } from '../actions/track_actions';
import { DELETE_LIKE } from '../actions/like_actions';

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
        let newUser = user;
        newState[`${user.id}`] = newUser;
      });
      return newState;
    case RECEIVE_RECENT_TRACK:
      let recent = action.recentTrack;
      if(!newState[recent.user_id].recently_played_track_ids.includes(recent.track_id)){
        newState[recent.user_id].recently_played_track_ids.push(recent.track_id);
      }
      return newState;
    case RECEIVE_TRACK:
      user_id = action.track.user_id;
      newState[user_id].track_ids.push(action.track.id);
      return newState;
    case REMOVE_TRACK:
      user_id = action.user_id;
      let trackPosition = newState[user_id].track_ids.indexOf(action.id);
      newState[user_id].track_ids.splice(trackPosition, 1);
    case DELETE_LIKE:
      let user = newState[action.like.user_id];
      let liked_objects = user.liked_objects.filter(obj => {
        return (obj.id != action.like.id ? true : false)
      });
      user.liked_objects = liked_objects;
      newState[user.id] = user;
      return newState;
    default:
      return state;
  }
};