import { connect } from 'react-redux';
import Sound from './sound';

const mapStateToProps = state => {
  let currentTrackId = state.io.trackQueue.queue[0] || null;
  let currentTrack = state.entities.tracks[currentTrackId] || null;
  return ({
    currentTrack
  });
};

const mapDispatchToProps = dispatch => ({
  nextSong: () => dispatch(nextSong())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sound);