import { merge } from 'lodash';
import { RECEIVE_TRACK_COMMENTS } from '../actions/comment_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_TRACK_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};