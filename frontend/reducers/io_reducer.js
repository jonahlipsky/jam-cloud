import { combineReducers } from 'redux';
import track from './track_upload_reducer';
import trackQueue from './track_queue_reducer';

export default combineReducers({
  track,
  trackQueue
}); 
