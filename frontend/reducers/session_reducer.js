import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id }
    case SIGNOUT_CURRENT_USER:
      return { id: null }
    default: 
      return state;
  }
}