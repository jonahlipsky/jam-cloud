import React from 'react';
import SixTracksDisplay from './six_tracks_display';
import { connect } from 'react-redux';

const mapStateToProps = state => {

  let trackArtistPairs = [];

  if(state.entities.users[1] && state.entities.tracks[1]){
    let trackIds = Object.keys(state.entities.tracks);
    let trackIdsLength = trackIds.length;
    for (let i = 1; i < trackIdsLength; i++) {
      let trackId = trackIds[i];
      let track = state.entities.tracks[trackId];
      let artist = state.entities.users[track.user_id];
      trackArtistPairs.push([track, artist]);
    }
  }
  
  return({
    trackArtistPairs
  });
};

class SplashBody extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let firstSix = this.props.trackArtistPairs.slice(0,6);
    let secondSix = this.props.trackArtistPairs.slice(6);
    return(
      <div className="splash-body">
        <h1>Explore these new tracks uploaded to JamCloud!</h1>
        <SixTracksDisplay tracksAndArtists = {firstSix}/>
        <SixTracksDisplay tracksAndArtists = {secondSix}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SplashBody);