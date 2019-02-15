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
  let nFollowers = user ? user.follower_ids.length : '0';
  let nTracks = userTrackIds.length;
  let nFollowedUsers = user ? user.followed_user_ids.length : '0';

  let ownPage = false;
  if(ownProps.match.params.userId === String(state.session.id)){
    ownPage = true;
  }
  return({
    user,
    userTracks,
    nTracks,
    nFollowers,
    nFollowedUsers,
    ownPage
  });
};

export default withRouter(connect(mapStateToProps)(UserShowBody));