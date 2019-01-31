import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TrackShowHeader from './track_show_header';
import { updateTrack } from '../../../actions/track_actions';



const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  let track = state.entities.tracks[trackId];
  let artist = track ? state.entities.users[track.user_id] : null;

  return({
    artist,
    track
  });
};

const mapDispatchToProps = dispatch => ({
  updateTrack: formData => dispatch(updateTrack(formData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShowHeader));