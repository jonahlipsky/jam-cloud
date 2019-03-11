import React from 'react';
import SixTracksDisplay from './six_tracks_display';
import { connect } from 'react-redux';
import { randomizeTracks } from '../../util/general_util';
import Widget from '../reuseable_components/widgets/track_widget_container';

const mapStateToProps = state => {

  let trackArtistPairs = [];
  let users = state.entities.users;
  let trackIds = Object.keys(state.entities.tracks);
  let featuredTracks = [];

  let trackKeys = Object.keys(state.entities.tracks);
  let drumHealing2Id = -1;
  trackKeys.forEach(key => {
    if(state.entities.tracks[key] && state.entities.tracks[key].title === "Drum Healing 2"){
      drumHealing2Id = key;
    }
  });

  if(state.entities.tracks && state.entities.tracks[drumHealing2Id]){
    featuredTracks.push(state.entities.tracks[drumHealing2Id]);
  }


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
    trackArtistPairs,
    featuredTracks
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
    let featureOne = "";

    if(this.props.featuredTracks.length){
      featureOne = <li><Widget track={this.props.featuredTracks[0]} /></li>
    }

    return(
      <div className="splash-body">
        <h1>Listen to this featured track on JamCloud!</h1>
        <ul className="splash-featured-track">
          {featureOne}
        </ul>

        <h1>Explore these new tracks uploaded to JamCloud!</h1>
        <SixTracksDisplay tracksAndArtists = {firstSix}/>
        <SixTracksDisplay tracksAndArtists = {secondSix}/>

        

      </div>
    )
  }
}

export default connect(mapStateToProps)(SplashBody);