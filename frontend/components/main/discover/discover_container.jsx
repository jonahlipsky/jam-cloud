import { connect } from 'react-redux';
import Discover from './discover';
import moment from 'moment';
import {parseDate, randomizeTracks} from '../../../util/general_util';

const mapStateToProps = state => {

  let sessionUserId = state.session.id;
  let sessionUser = state.entities.users ? state.entities.users[sessionUserId] : null;
  let nRecentlyPlayedTracks = 0;
  let lastWeekListens = 0;
  let recentlyPlayedTracks = [];
  let lastDayListens = 0;

  if(sessionUser && sessionUser.recent_tracks){
    //getting recent track ids
    nRecentlyPlayedTracks = sessionUser.recent_tracks.length;
    let today = moment();
    let recentTracks = sessionUser.recent_tracks.filter( recent => {
      let moment = parseDate(recent.updated_at);
      let diff = today.diff(moment, 'days');
      return (diff < 7);
    });
  
    lastWeekListens = recentTracks.length;
    
    let recentlyPlayedTrackIds = recentTracks.map(recentTrack => {
      return recentTrack.track_id;
    });
    
    let lastDay = sessionUser.recent_tracks.filter( recent => {
      let moment = parseDate(recent.updated_at);
      let diff = today.diff(moment, 'days');
      return (diff <= 1);
    });

    lastDayListens = lastDay.length;

    let recentlyPlayedTracksIds = randomizeTracks(recentlyPlayedTrackIds).slice(-3);
    recentlyPlayedTracksIds.forEach(id => {
      if(state.entities.tracks[id]){
        recentlyPlayedTracks.push(id);
      }
    });
  }

  let trackKeys = Object.keys(state.entities.tracks);
  let mountain2Id = -1;
  let redRiverId = -1;
  trackKeys.forEach(key => {
    if(state.entities.tracks[key] && state.entities.tracks[key].title === "Blinking Into River"){
      redRiverId = key;
    } else if (state.entities.tracks[key] && state.entities.tracks[key].title === "Mountain No. 2"){
      mountain2Id = key;
    }
  });



  let featuredTracks = [];
  if(state.entities.tracks && state.entities.tracks[mountain2Id]){
    featuredTracks.push(state.entities.tracks[mountain2Id]);
  }
  if(state.entities.tracks && state.entities.tracks[redRiverId]){
  featuredTracks.push(state.entities.tracks[redRiverId]);
  }
  

  return({
    recentlyPlayedTracks,
    nRecentlyPlayedTracks,
    lastWeekListens,
    lastDayListens,
    featuredTracks,
    sessionUser
  });
};


export default connect(mapStateToProps)(Discover); 