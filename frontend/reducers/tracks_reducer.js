import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_COMMENT, RECEIVE_NEW_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';
import { RECEIVE_NEW_LIKE, DELETE_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let track;
  switch(action.type){
    case RECEIVE_TRACKS:
      action.tracks.forEach((track) => {
        newState[`${track.id}`] = track;
      });
      return newState;
    case RECEIVE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case REMOVE_COMMENT:
      track = newState[action.comment.track_id];
      let commentIdIdx = track.comment_ids.indexOf(action.comment.id);
      newState[action.comment.track_id].comment_ids.splice(commentIdIdx, 1);
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState[action.comment.track_id].comment_ids.unshift(action.comment.id);
      return newState;
    case REMOVE_TRACK:
      let trackId = action.id;
      delete newState[trackId];
      return newState;
    case RECEIVE_NEW_LIKE:
      if(action.like.likeable_type === "Track" && newState[action.like.likeable_id]){
        track = newState[action.like.likeable_id];
        track.likes += 1;
        track.liker_ids.push(action.like.user_id);
        newState[action.like.likeable_id] = track;
      };
      return newState;
    case DELETE_LIKE:
      if(action.like.likeable_type === "Track" && newState[action.like.likeable_id]){
        track = newState[action.like.likeable_id];
        track.likes -= 1;
        track.liker_ids = track.liker_ids.filter(id => {
          return (id != action.like.user_id);
        });
        newState[action.like.likeable_id] = track;
      };
      return newState;
    default:
      return state;
  }
};
