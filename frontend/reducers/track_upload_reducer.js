import { INCREMENT_FILE_UPLOAD_STAGE, EDIT_TRACK_NUMBER, CLEAR_EDIT_ID } from "../actions/track_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case INCREMENT_FILE_UPLOAD_STAGE:
      let nextStage = (action.prevStage % 2) + 1;
      newState = { stage: nextStage };
      return newState;
    case EDIT_TRACK_NUMBER:
      return merge(newState, { stage: 2, editId: action.id });
    case CLEAR_EDIT_ID:
      newState.editId = null;
      return newState;
    default:
      return state;
  }
};