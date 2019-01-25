import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACKS:
      action.tracks.forEach((track) => {
        newState[`${track.id}`] = track;
      });
      return newState;
    case RECEIVE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case RECEIVE_ALL_USERS:
      //this seems inefficient as it scales
      //to do
      //does this work? correct sample state?
      action.users.forEach((user) => {
        user.tracks.forEach((track) => {
          newState = merge({}, newState, { [track.id]: track });
        });
      });
      return newState;
    case REMOVE_TRACK:
      let trackId = action.track.id;
      delete newState[trackId];
      return newState;
    default:
      return state;
  }
};
