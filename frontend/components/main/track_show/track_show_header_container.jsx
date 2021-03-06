import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import TrackShowHeader from './track_show_header';
import { updateTrack } from '../../../actions/track_actions';
import { pushToFrontOfQueue } from '../../../actions/sound_controller_actions';

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
  updateTrack: (formData, id) => dispatch(updateTrack(formData, id)),
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShowHeader));