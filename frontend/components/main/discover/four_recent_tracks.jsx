import React from 'react';
import { connect } from 'react-redux';
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
    let firstTwo = recentTrackItems.slice(0,2);
    let lastTwo = recentTrackItems.slice(2);
    return(
      <div className="recent-tracks-display">
        <div className="recent-tracks-two">
          {firstTwo}
        </div>
        <div className="recent-tracks-two">
          {lastTwo}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FourRecentTracks)

