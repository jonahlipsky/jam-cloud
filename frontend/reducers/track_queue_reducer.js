import { GO_TO_NEXT_TRACK, PUSH_TRACK_TO_QUEUE } from '../actions/sound_controller_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case GO_TO_NEXT_TRACK:
      return newState.queue.slice(1);
    case PUSH_TRACK_TO_QUEUE:
      newState.queue.push(action.trackId);
      let queue = newState.queue;
      return merge({}, {queue});
    default: 
      return {queue: []};
  }
};