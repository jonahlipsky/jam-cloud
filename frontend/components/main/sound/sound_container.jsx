import { connect } from 'react-redux';
import Sound from './sound';
import { goToNextTrack, goToPreviousTrack, 
  toggleImmediate, sendPercentageComplete, 
  clearCurrentPercentage } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let currentTrackId = state.io.trackQueue.queue[0] || null;
  let currentTrack = state.entities.tracks[currentTrackId] || null;
  let immediate = state.io.trackQueue.immediate;
  let currentPercentage = state.io.trackQueue.currentPercentage;
  return ({
    currentTrack,
    immediate,
    currentPercentage
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack()),
  goToPreviousTrack: () => dispatch(goToPreviousTrack()),
  toggleImmediate: () => dispatch(toggleImmediate()),
  sendPercentageComplete: (percentageComplete, duration) => (
    dispatch(sendPercentageComplete(percentageComplete, duration))
  ),
  clearCurrentPercentage: () => dispatch(clearCurrentPercentage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sound);