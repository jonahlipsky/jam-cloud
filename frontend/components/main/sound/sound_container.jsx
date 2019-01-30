import { connect } from 'react-redux';
import Sound from './sound';
import { goToNextTrack, goToPreviousTrack, 
  sendPercentageComplete, 
  clearCurrentPercentage, clearImmediate } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let nextTrack = state.io.trackQueue.queue[1] || null;
  let currentTrackId = state.io.trackQueue.queue[0] || null;
  let currentTrack = state.entities.tracks[currentTrackId] || null;
  let immediate = state.io.trackQueue.immediate;
  let currentPercentage = state.io.trackQueue.currentPercentage;
  return ({
    currentTrack,
    immediate,
    currentPercentage,
    nextTrack
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack()),
  goToPreviousTrack: () => dispatch(goToPreviousTrack()),
  sendPercentageComplete: (percentageComplete, duration) => (
    dispatch(sendPercentageComplete(percentageComplete, duration))
  ),
  clearCurrentPercentage: () => dispatch(clearCurrentPercentage()),
  clearImmediate: () => dispatch(clearImmediate())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sound);