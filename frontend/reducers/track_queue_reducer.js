import { GO_TO_NEXT_TRACK, PUSH_TRACK_TO_QUEUE } from '../actions/sound_controller_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let queue;
  switch(action.type){
    case GO_TO_NEXT_TRACK:
      queue = newState.queue.slice(1);
      return merge(newState, { queue });
    case PUSH_TRACK_TO_QUEUE:
      newState.queue.push(action.trackId);
      queue = newState.queue;
      return merge({}, {queue});
    case TOGGLE_SHUFFLE:
      if(newState.shuffle){
        return merge(newState, { shuffle: false });
      } else {
        return merge(newState, { shuffle: true });
      }
    default: 
      return { queue: [], shuffle: false };
  }
};