import { INCREMENT_FILE_UPLOAD_STAGE } from "../actions/track_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case INCREMENT_FILE_UPLOAD_STAGE:
      let nextStage = (action.prevStage % 2) + 1;
      let newState = { stage: nextStage };
      return newState;
    default:
      return state;
  }
};