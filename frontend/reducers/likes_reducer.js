import { merge } from 'lodash';
import { RECEIVE_NEW_LIKE, DELETE_LIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';

export default (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_LIKES:
      action.likes.forEach(like => {
        newState = merge(newState, {[like.id]: like});
      }); 
      return newState;
    case RECEIVE_NEW_LIKE:
      return merge(newState, {[action.like.id]: action.like});
    case DELETE_LIKE:
      delete newState[action.like.id];
      return newState;
    default:
      return newState;
  }
};