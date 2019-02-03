import { connect } from 'react-redux';
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
    return(
      <div className="six-tracks-display">
        {displayedTracks}
      </div>  
    )
  }
}

export default SixTracksDisplay;