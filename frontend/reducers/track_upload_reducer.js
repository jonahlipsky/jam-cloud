import { INCREMENT_FILE_UPLOAD_STAGE, EDIT_TRACK_NUMBER } from "../actions/track_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case INCREMENT_FILE_UPLOAD_STAGE:
      let nextStage = (action.prevStage % 2) + 1;
      newState = { stage: nextStage };
      return newState;
    case EDIT_TRACK_NUMBER:
      newState = merge({}, { stage: 2, editId: action.id });
      return newState;
    default:
      return state;
  }
};