import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { randomizeTracks } from '../../../util/general_util';
import UserLikes from './user_likes';

const mapStateToProps = (state, ownProps) => {
  let currentPageUserId = ownProps.match.params.userId;
  let pageUser = state.entities.users ? state.entities.users[currentPageUserId] : null;
  let likedTracks = [];
  let nLikes = 0;
  if(pageUser){

    nLikes = pageUser.liked_track_ids.length;
    //this function randomly selects three liked tracks for the user
    //whose profile page we are on, and the pushes the full track info into 'likedTracks'
    let randomLikedTracks = randomizeTracks(pageUser.liked_track_ids).slice(0,3);
    randomLikedTracks.forEach(trackId => {
      let track = state.entities.tracks[trackId] ? state.entities.tracks[trackId] : null;
      if(track) likedTracks.push(track);
    });
  }

  return({
    likedTracks,
    nLikes
  });
};

export default withRouter(connect(mapStateToProps)(UserLikes));