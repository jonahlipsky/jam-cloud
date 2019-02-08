import { merge } from 'lodash';
import { RECEIVE_TRACK_COMMENTS, RECEIVE_NEW_COMMENT, REMOVE_COMMENT, CLEAR_COMMENTS } from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACK_COMMENTS:
      let nextState = {};
      action.comments.forEach((comment) => {
        nextState[comment.id] = comment;
      });
      return nextState;
    case RECEIVE_NEW_COMMENT:
      newState[action.comment.id] = action.comment;
      if(action.comment.parent_comment_id){
        newState[action.comment.parent_comment_id].child_comment_ids.push(action.comment.id);
      }
      return newState;
    case CLEAR_COMMENTS:
      return {};
    case REMOVE_COMMENT:
      let commentId = action.comment.id;
      delete newState[commentId];
      let keys = Object.keys(newState);
      keys.forEach(key => {
        let idx  = newState[key].child_comment_ids.indexOf(commentId);
        if(idx != -1){
          newState[key].child_comment_ids.splice(idx,1);
        }
      });
      return newState;
    default:
      return state;
  }
};