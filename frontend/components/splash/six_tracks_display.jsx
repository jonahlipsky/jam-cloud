import React from 'react';
import SingleTrackDisplay from '../reuseable_components/single_track_display';

class SixTracksDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    let displayedTracks;
    if(this.props.tracksAndArtists[0]){
      displayedTracks = this.props.tracksAndArtists.map((trackArtistPair, i) => {
        return <SingleTrackDisplay key={i} trackArtistPair={trackArtistPair} />
      });
    } else {
      displayedTracks = '';
    }

    let firstThree = displayedTracks.length ? displayedTracks.slice(0, 3) : "";
    let lastThree = displayedTracks.length ? displayedTracks.slice(3) : "";
    return(
      <div className="six-tracks-display">
        <div className="three-tracks">
          {firstThree}
        </div>
        <div className="three-tracks">
          {lastThree}
        </div>
      </div>  
    )
  }
}

export default SixTracksDisplay;