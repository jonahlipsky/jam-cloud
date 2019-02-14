import { GO_TO_NEXT_TRACK, PUSH_TRACK_TO_QUEUE, TOGGLE_SHUFFLE, 
  GO_TO_PREVIOUS_TRACK, PUSH_TO_FRONT_OF_QUEUE, 
  CLEAR_IMMEDIATE, SEND_PERCENTAGE_COMPLETE, SEND_CURRENT_PERCENTAGE,
  CLEAR_CURRENT_PERCENTAGE, 
  IMMEDIATE_ON,
  SEND_SOUND_STATUS,
  WIDGET_TO_CONTROLLER_SS} from '../actions/sound_controller_actions';
import { merge } from 'lodash';
import { randomizeTracks } from '../util/general_util';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let soundStatus;
  let trackId;
  switch(action.type){
    case SEND_PERCENTAGE_COMPLETE:
      newState.duration = action.duration;
      newState.percentageComplete = action.percentageComplete;
      return newState;
    case SEND_SOUND_STATUS:
      soundStatus = action.soundStatus;
      trackId = action.trackId;
      newState.soundStatus = [soundStatus, trackId];
      return newState;
    // case WIDGET_TO_CONTROLLER_SS:
    //   soundStatus = action.soundStatus;
    //   trackId = action.trackId;
    //   newState.widgetToControllerSS = [soundStatus, trackId];
    //   return newState;
    case SEND_CURRENT_PERCENTAGE:
      newState.currentPercentage = action.percentage;
      return newState;
    case CLEAR_CURRENT_PERCENTAGE:
      newState.currentPercentage = null;
      return newState;
    case GO_TO_NEXT_TRACK:
      if(newState.queue[0] && newState.queue[1]){
        newState.prevQueue.push(newState.queue[0]);
        newState.queue = newState.queue.slice(1);
        return merge(newState, { queue: newState.queue, prevQueue: newState.prevQueue });
      };
    case PUSH_TRACK_TO_QUEUE:
      newState.queue.push(action.trackId);
      return newState;
    case CLEAR_IMMEDIATE:
      newState.immediate = false;
      return newState;
    case GO_TO_PREVIOUS_TRACK:
      if(newState.prevQueue.length){
        newState.queue.unshift(newState.prevQueue.slice(-1)[0]);
        newState.prevQueue = newState.prevQueue.slice(0,-1);
        return merge(newState, { prevQueue: newState.prevQueue, queue: newState.queue });
      } else {
        return newState;
      } 
    case IMMEDIATE_ON:
      newState.immediate = true;
      return newState;
    case PUSH_TO_FRONT_OF_QUEUE:
      let queue = newState.queue;
      queue[0] ? newState.prevQueue.push(queue[0]) : null ;
      queue = queue.slice(1);
      let id = action.trackId;
      let idx = queue.indexOf(String(id));
      if(idx != -1){
        queue.splice(idx, 1);
      } 
      queue.unshift(String(id));
      newState.queue = queue;
      newState.immediate = true;
      newState.soundStatus=["PLAYING", action.trackId];
      return newState;
    case TOGGLE_SHUFFLE:
      if(action.shuffleAndTurnOff){
        newState.queue = randomizeTracks(action.trackIds);
        return merge(newState, { shuffle: false });
      }
      else if(state.shuffle){
        return merge(newState, { shuffle: false });
      } else {
        newState.queue = randomizeTracks(action.trackIds);
        return merge(newState, { shuffle: true });
      }
    default: 
      if( state.queue ){
        return newState;
      } else {
        return { queue: [], prevQueue: [], shuffle: false, immediate: false, 
          duration: null, percentageComplete: null, currentPercentage: null, 
          soundStatus: ["PAUSED", "0"]
         };
      }
  }
};

