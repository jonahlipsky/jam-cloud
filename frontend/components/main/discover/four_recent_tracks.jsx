import React from 'react';
import { connect } from 'react-redux';
import { randomizeTracks } from '../../../util/general_util';
import RecentTrackItem from '../../reuseable_components/recent_track_item';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  let recentlyPlayedIds = state.entities.users[currentUserId].recently_played_track_ids;
  let randomRecentTrackIds = randomizeTracks(recentlyPlayedIds);
  randomRecentTrackIds.splice(4);
  let randomRecentTracks = [];
  if (randomRecentTrackIds.every(id => { 
    return Object.keys(state.entities.tracks).includes(String(id));
  })){
    randomRecentTrackIds.forEach(id => {
      let track = state.entities.tracks[id];
      track.username = state.entities.users[track.user_id].username;
      randomRecentTracks.push(track);
    });
  }
    
  return ({
    randomRecentTracks
  });
};

class FourRecentTracks extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let recentTrackItems = this.props.randomRecentTracks.map( track => {
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

