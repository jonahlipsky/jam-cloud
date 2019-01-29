import { GO_TO_NEXT_TRACK, PUSH_TRACK_TO_QUEUE, TOGGLE_SHUFFLE, GO_TO_PREVIOUS_TRACK, PUSH_TO_FRONT_OF_QUEUE, TOGGLE_IMMEDIATE } from '../actions/sound_controller_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case GO_TO_NEXT_TRACK:
      newState.queue[0] ? newState.prevQueue.push(newState.queue[0]) : null ;
      newState.queue = newState.queue.slice(1);
      return merge(newState, { queue: newState.queue, prevQueue: newState.prevQueue });
    case PUSH_TRACK_TO_QUEUE:
      newState.queue.push(action.trackId);
      return newState;
    case TOGGLE_IMMEDIATE:
      if(newState.immediate){
        newState.immediate = false;
      } else {
        newState.immediate = true;
      }
      return newState;
    case GO_TO_PREVIOUS_TRACK:
      if(newState.prevQueue.length){
        newState.queue.unshift(newState.prevQueue.slice(-1)[0]);
        newState.prevQueue = newState.prevQueue.slice(0,-1);
        return merge(newState, { prevQueue: newState.prevQueue, queue: newState.queue });
      } else {
        return newState;
      } 
    case PUSH_TO_FRONT_OF_QUEUE:
      newState.queue[0] ? newState.prevQueue.push(newState.queue[0]) : null ;
      newState.queue = newState.queue.slice(1);
      newState.queue.unshift(action.trackId);
      newState.immediate = true;
      return newState;
    case TOGGLE_SHUFFLE:
      if(newState.shuffle){
        return merge(newState, { shuffle: false });
      } else {
        return merge(newState, { shuffle: true });
      }
    default: 
      return { queue: [], prevQueue: [], shuffle: false, immediate: false };
  }
};