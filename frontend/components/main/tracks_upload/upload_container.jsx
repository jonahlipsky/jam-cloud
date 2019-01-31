import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTrack } from '../../../actions/track_actions';
import { fetchUsers } from '../../../actions/session_actions';
import Upload from './upload';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  let currentUserTrackIds = state.entities.users[currentUserId].track_ids || [];
  let currentUserTracks = [];
  currentUserTrackIds.forEach((id) => {
    currentUserTracks.push(state.entities.tracks[id]);
  });
  currentUserTracks = currentUserTracks.length ? currentUserTracks : null;
  //to do does this work?
  return({
    currentUserTracks
  });
};

const mapDispatchToProps = dispatch => ({
  removeTrack: (track) => dispatch(removeTrack(track)),
  fetchUsers: () => dispatch(fetchUsers())

});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));