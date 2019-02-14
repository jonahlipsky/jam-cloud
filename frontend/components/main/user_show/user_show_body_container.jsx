import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowBody from './user_show_body';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId] || {};
  let userTrackIds = user ? user.track_ids : [];
  let userTracks = [];
  userTrackIds.forEach(id => {
    if(state.entities.tracks[id]){
      userTracks.push(state.entities.tracks[id]);
    }
  });
  return({
    user,
    userTracks
  });
};

export default withRouter(connect(mapStateToProps)(UserShowBody));