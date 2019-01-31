import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Track from './track';
import { fetchUsers } from '../../../actions/session_actions';
import { fetchTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  let trackId = parseInt(ownProps.match.params.trackId);
  let track = state.entities.tracks[trackId] || null;
  let title = track ? track.title : null;
  let artist = track ? state.entities.users[track.user_id] : null
  debugger
  return({
    track,
    title,
    artist
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));