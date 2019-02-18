import React from 'react';
import { connect } from 'react-redux';
import { randomizeTracks } from '../../../util/general_util';
import RecentTrackItem from '../../reuseable_components/recent_track_item';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  let recentTracks = [];
  if(state.entities.users[currentUserId].recently_played_track_ids){
    let recentlyPlayedIds = state.entities.users[currentUserId].recently_played_track_ids.slice(-4);
    if (recentlyPlayedIds.every(id => { 
      return Object.keys(state.entities.tracks).includes(String(id));
    })){
      recentlyPlayedIds.forEach(id => {
        let track = state.entities.tracks[id];
        track.username = state.entities.users[track.user_id].username;
        recentTracks.push(track);
      });
    }
  }
    
  return ({
    recentTracks
  });
};

class FourRecentTracks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let recentTrackItems = this.props.recentTracks.map( track => {
      return (<RecentTrackItem key={track.id} track={track} />)
    });
    
    return(
      <div className="recent-tracks-display">
        {recentTrackItems}
      </div>
    )
  }
}

export default connect(mapStateToProps)(FourRecentTracks)

