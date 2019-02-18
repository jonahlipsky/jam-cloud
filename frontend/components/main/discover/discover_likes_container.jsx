import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DiscoverLikes from './discover_likes';
import { randomizeTracks, parseDate } from '../../../util/general_util';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
  let sessionUserId = state.session.id;
  let sessionUser = state.entities.users ? state.entities.users[sessionUserId] : null;
  let likedTracks = [];
  let notFollowedUsers = [];
  // let notFollowedUserIds = [];
  // let nFollows = 0;
  let nLikes = 0;
  let recentlyPlayedTracks = [];
  let nRecentlyPlayedTracks = 0;

  if(sessionUser){
    //getting likes
    nLikes = sessionUser.liked_track_ids.length;
    let lastLikedTracks = sessionUser.liked_track_ids.slice(-3);
    lastLikedTracks.forEach(trackId => {
      let track = state.entities.tracks[trackId] ? state.entities.tracks[trackId] : null;
      if(track) likedTracks.push(track);
    });

    //getting notFollowedUsers
    let userIds = Object.keys(state.entities.users);
    let followedUserIds = sessionUser.followed_user_ids;
    let notFollowedUserIds = userIds.filter( id => {
      return (!followedUserIds.includes(parseInt(id)))
    });

    notFollowedUserIds.forEach(id => {
      if(state.entities.users[id]){
        notFollowedUsers.push(state.entities.users[id]);
      }
    });
    notFollowedUsers = notFollowedUsers.slice(-3);
    
    //getting recent track ids
    nRecentlyPlayedTracks = sessionUser.recent_tracks.length;
    let today = moment();
    let recentTracks = sessionUser.recent_tracks.filter( recent => {
      let moment = parseDate(recent.updated_at);
      let diff = today.diff(moment, 'days');
      return (diff < 7);
    });
    let recentlyPlayedTrackIds = recentTracks.map(recentTrack => {
      return recentTrack.track_id;
    });
    

    let recentlyPlayedTracksIds = randomizeTracks(recentlyPlayedTrackIds).slice(-3);
    recentlyPlayedTracksIds.forEach(id => {
      if(state.entities.tracks[id]){
        recentlyPlayedTracks.push(id);
      }
    });
  }

  return({
    likedTracks,
    notFollowedUsers,
    nLikes,
    recentlyPlayedTracks,
    nRecentlyPlayedTracks
  });
};

export default withRouter(connect(mapStateToProps)(DiscoverLikes));