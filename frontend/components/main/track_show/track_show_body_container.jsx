import { connect } from 'react-redux';
import TrackShowBody from './track_show_body';

const mapStateToProps = (state, ownProps) => {
  // let currentTrackId = ownProps.match.params.trackId;
  let currentUserId = state.session.id;
  let currentUserProfilePicture = state.entities.users[currentUserId] ? state.entities.users[currentUserId].profilePicture : "";
  return ({
    currentTrackId
  });
};

// const mapDispatchToProps = dispatch => ({
// });

export default connect(null, null)(TrackShowBody);