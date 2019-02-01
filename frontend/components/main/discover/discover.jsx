import React from 'react';
import TracksScrollingDisplay from '../../reuseable_components/tracks_scrolling_display';
import SingleTrackDisplay from '../../reuseable_components/single_track_display';

class Discover extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="discover-page">
        <h1>Explore these new tracks!</h1>
        <TracksScrollingDisplay />
        {/* <SingleTrackDisplay trackArtistPair={this.props.trackArtistPair} /> */}
      </div>
    )
  }
}

export default Discover;