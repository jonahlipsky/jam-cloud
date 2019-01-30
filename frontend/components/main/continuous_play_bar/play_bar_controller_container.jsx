import { connect } from 'react-redux';
import { goToNextTrack, toggleShuffle } from '../../../actions/sound_controller_actions';
import PlayBarController from './play_bar_controller';
import { fetchTracks } from '../../../actions/track_actions';

const mapStateToProps = state => {
  let shuffle = state.io.trackQueue.shuffle;
  let trackQueue = state.io.trackQueue;
  let trackIds = Object.keys(state.entities.tracks);
  let nTracks = trackIds.length;
  return({
    trackQueue,
    shuffle,
    nTracks
  });
};

const mapDispatchToProps = dispatch => ({
  goToNextTrack: () => dispatch(goToNextTrack()),
  toggleShuffle: (nTracks) => dispatch(toggleShuffle(nTracks))
});

export default connect(mapStateToProps,mapDispatchToProps)(PlayBarController);


