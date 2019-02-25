import React from 'react';
import SixTracksDisplay from './six_tracks_display';
import { connect } from 'react-redux';
import { randomizeTracks } from '../../util/general_util';

const mapStateToProps = state => {

  let trackArtistPairs = [];
  let users = state.entities.users;
  let trackIds = Object.keys(state.entities.tracks);
  if(Object.keys(users).length && trackIds.length){
    let randomTrackIds = randomizeTracks(trackIds);
    let onlyTwelve = trackIds.length > 12 ? randomTrackIds.slice(0, 12) : randomTrackIds;

    onlyTwelve.forEach((trackId) => {
      let track = state.entities.tracks[trackId];
      let artist = users[track.user_id];
      trackArtistPairs.push([track, artist]);
    });
  }
  
  return({
    trackArtistPairs
  });
};

class SplashBody extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidUpdate(){
    if(this.props.trackArtistPairs.length && !this.state.firstSix){
      this.setState({firstSix: this.props.trackArtistPairs.slice(0,6),
        secondSix: this.props.trackArtistPairs.slice(6)});
    }
  }

  render(){
    let firstSix = this.state.firstSix || [];
    let secondSix = this.state.secondSix || [];
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