import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TrackShowHeader from './track_show_header';

const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  let track = state.entities.tracks[trackId];
  let artist = state.entities.users[track.user_id];
  return({
    track,
    artist
  });
};

export default withRouter(connect(mapStateToProps)(TrackShowHeader));