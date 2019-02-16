import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserLikes from './user_likes';

const mapStateToProps = (state, ownProps) => {
  let currentPageUserId = ownProps.match.params.userId;
  let pageUser = state.entities.users ? state.entities.users[currentPageUserId] : null;
  let likedTracks = [];
  let followedUsers = [];
  let nFollows = 0;
  let nLikes = 0;
  if(pageUser){

    nLikes = pageUser.liked_track_ids.length;
    nFollows = pageUser.followed_user_ids.length;
    let lastLikedTracks = pageUser.liked_track_ids.slice(-3);
    lastLikedTracks.forEach(trackId => {
      let track = state.entities.tracks[trackId] ? state.entities.tracks[trackId] : null;
      if(track) likedTracks.push(track);
    });

    let lastFollowedUsers = pageUser.followed_user_ids.slice(-3);
    lastFollowedUsers.forEach(userId => {
      let user = state.entities.users[userId] ? state.entities.users[userId] : null;
      if(user) followedUsers.push(user);
    });
  }

  return({
    likedTracks,
    followedUsers,
    nFollows,
    nLikes
  });
};

export default withRouter(connect(mapStateToProps)(UserLikes));