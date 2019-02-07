import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_COMMENT } from '../actions/comment_actions';
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
    case REMOVE_COMMENT:
      let track = newState[action.comment.track_id];
      let commentIdIdx = track.comment_ids.indexOf(action.comment.id);
      debugger
      newState[action.comment.track_id].comment_ids.splice(commentIdIdx, 1);
      debugger
      return newState
    case REMOVE_TRACK:
      let trackId = action.id;
      delete newState[trackId];
      return newState;
    default:
      return state;
  }
};
