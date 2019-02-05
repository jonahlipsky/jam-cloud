import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Track from './track';
import { fetchUsers } from '../../../actions/session_actions';
import { fetchTracks } from '../../../actions/track_actions';
import { fetchTrackComments } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  let track = state.entities.tracks[trackId] || null;
  let title = track ? track.title : null;
  let artist = track ? state.entities.users[track.user_id] : null;
  return({
    track,
    title,
    artist
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks()),
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));