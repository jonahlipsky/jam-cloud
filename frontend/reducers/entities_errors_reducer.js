import { RECEIVE_UPLOAD_ERRORS, RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_UPLOAD_ERRORS: 
      // debugger
      return action.errors.responseJSON; 
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_TRACK:
      return [];
    case RECEIVE_TRACKS:
      return [];
    default: 
      return state;
  }
};