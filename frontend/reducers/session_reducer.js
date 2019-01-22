import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case SIGNOUT_CURRENT_USER:
      return { id: null };
    default: 
      return state;
  }
}