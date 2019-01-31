import { connect } from 'react-redux';
import { goToNextTrack, toggleShuffle } from '../../../actions/sound_controller_actions';
import PlayBarController from './play_bar_controller';
import { fetchTracks } from '../../../actions/track_actions';

const mapStateToProps = state => {
  let shuffle = state.io.trackQueue.shuffle;
  let trackQueue = state.io.trackQueue;
  let trackIds = Object.keys(state.entities.tracks);
  let nTracks = trackIds.length;
  let duration = state.io.trackQueue.duration;
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let currentMilliseconds = Math.floor((percentageComplete / 100) * duration);

  return({
    trackQueue,
    shuffle,
    nTracks,
    duration,
    percentageComplete,
    currentMilliseconds
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack()),
  toggleShuffle: (nTracks) => dispatch(toggleShuffle(nTracks)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps,mapDispatchToProps)(PlayBarController);


