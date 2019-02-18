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
  


  return({
    recentlyPlayedTracks,
    nRecentlyPlayedTracks,
    lastWeekListens,
    lastDayListens
  });
};


export default connect(mapStateToProps)(Discover); 