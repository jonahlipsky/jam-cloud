import { FREEZE_LIST_ITEM, NO_LIST_ITEM_FROZEN } from '../actions/track_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case FREEZE_LIST_ITEM:
      return { liSelected: action.trackId };
    case NO_LIST_ITEM_FROZEN:
      return { liSelected: null };
    default:
      if(!state.liSelected){
        return { liSelected: null };
      } else{
        return state;
      }
  }
};