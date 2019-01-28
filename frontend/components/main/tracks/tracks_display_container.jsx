import { connect } from 'react-redux';
import TracksDisplay from './tracks_display';
import { fetchTracks } from '../../../actions/track_actions';

const mapStateToProps = state => {
  let curUserId = state.session.id;
  let curUserTrackIds = state.entities.users[curUserId].track_ids;
  let tracks = [];
  let username = state.entities.users[curUserId].username;
  debugger
  curUserTrackIds.forEach((trackId) => {
    tracks.push(state.entities.tracks[trackId]);
  });
  debugger
  return({
    tracks,
    username
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksDisplay);