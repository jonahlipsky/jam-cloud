import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER, 
  TOGGLE_RESET_AUTH_FORM } from '../actions/session_actions';
import { INCREMENT_STAGE } from '../actions/modal_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case SIGNOUT_CURRENT_USER:
      return { id: null };
    case INCREMENT_STAGE:
      let nextStage = (action.prevStage % 3) + 1;
      newState.stage = nextStage;
      return newState;
    case TOGGLE_RESET_AUTH_FORM:
      newState.resetAuthForm = newState.resetAuthForm ? false : true;
      return newState;
    default: 
      return state;
  }
}