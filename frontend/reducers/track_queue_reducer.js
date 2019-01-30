import { GO_TO_NEXT_TRACK, PUSH_TRACK_TO_QUEUE, TOGGLE_SHUFFLE, 
  GO_TO_PREVIOUS_TRACK, PUSH_TO_FRONT_OF_QUEUE, 
  TOGGLE_IMMEDIATE, SEND_PERCENTAGE_COMPLETE, SEND_CURRENT_PERCENTAGE,
  CLEAR_CURRENT_PERCENTAGE } from '../actions/sound_controller_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case SEND_PERCENTAGE_COMPLETE:
      newState.duration = action.duration;
      newState.percentageComplete = action.percentageComplete;
      return newState;
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
      if(state.shuffle){
        return merge(newState, { shuffle: false });
      } else {
        newState.queue = randomizeTracks(action.nTracks);
        return merge(newState, { shuffle: true });
      }
    default: 
      if( state.queue ){
        return newState;
      } else {
        return { queue: [], prevQueue: [], shuffle: false, immediate: false, 
          duration: null, percentageComplete: null, currentPercentage: null };
      }
  }
};


//RANDOM TRACKS METHODS
//these methods are for finding random tracks from the list of tracks.
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function randomizeTracks(nTracks){
  let randomTracks = [];
  while (randomTracks.length < 20 && randomTracks.length < nTracks){
    let trackId = getRandomInt(nTracks);
    randomTracks.push(trackId);
  }
  let randomized = randomTracks.filter( onlyUnique );
  return randomized;
}

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}