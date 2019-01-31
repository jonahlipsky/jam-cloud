import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TrackShowHeader from './track_show_header';

const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  let track = state.entities.tracks[trackId];
  let user = track ? state.entities.users[track.user_id] : null;
  let artist = user ? user.username : null;
  let title = track ? track.title : null;
  return({
    track,
    artist
  });
};

export default withRouter(connect(mapStateToProps)(TrackShowHeader));