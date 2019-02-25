import { connect } from 'react-redux';
import { goToNextTrack, toggleShuffle, 
  sendSoundStatus, finishedLoading, sendSignal, 
  goToPreviousTrack, sendCurrentPercentage } from '../../../actions/sound_controller_actions';
import PlayBarController from './play_bar_controller';
import { fetchTracks } from '../../../actions/track_actions';
import { fetchUsers } from '../../../actions/session_actions';

const mapStateToProps = state => {
  let shuffle = state.io.trackQueue.shuffle;
  let trackQueue = state.io.trackQueue;
  let trackIds = Object.keys(state.entities.tracks);
  let duration = state.io.trackQueue.duration;
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let currentMilliseconds = Math.floor((percentageComplete / 100) * duration);
  let soundStatus = state.io.trackQueue.soundStatus[0];
  let immediate = state.io.trackQueue.immediate;

  return({
    trackQueue,
    shuffle,
    trackIds,
    duration,
    percentageComplete,
    currentMilliseconds,
    soundStatus,
    immediate
  });
};

const mapDispatchToProps = dispatch => ({
  sendCurrentPercentage: percentage => dispatch(sendCurrentPercentage(percentage)),
  goToPreviousTrack: () => dispatch(goToPreviousTrack()),
  goToNextTrack: () => dispatch(goToNextTrack()),
  toggleShuffle: (trackIds, shuffleAndTurnOff) => dispatch(toggleShuffle(trackIds, shuffleAndTurnOff)),
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchUsers()),
  sendSoundStatus: (status, trackId) => dispatch(sendSoundStatus(status, trackId)),
  finishedLoading: trackId => dispatch(finishedLoading(trackId)),
  sendSignal: () => dispatch(sendSignal())
});

export default connect(mapStateToProps,mapDispatchToProps)(PlayBarController);


