import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Track from './track';
import { fetchTrackComments, clearComments } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
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
  fetchTrackComments: (trackId) => dispatch(fetchTrackComments(trackId)),
  clearComments: () => dispatch(clearComments())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Track));