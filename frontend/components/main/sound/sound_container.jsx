import { connect } from 'react-redux';
import Sound from './sound';
import { goToNextTrack, goToPreviousTrack, toggleImmediate } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let currentTrackId = state.io.trackQueue.queue[0] || null;
  let currentTrack = state.entities.tracks[currentTrackId] || null;
  let immediate = state.io.trackQueue.immediate;
  return ({
    currentTrack,
    immediate
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack()),
  goToPreviousTrack: () => dispatch(goToPreviousTrack()),
  toggleImmediate: () => dispatch(toggleImmediate())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sound);