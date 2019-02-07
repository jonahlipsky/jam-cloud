import { merge } from 'lodash';
import { RECEIVE_TRACK_COMMENTS, RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACK_COMMENTS:
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};