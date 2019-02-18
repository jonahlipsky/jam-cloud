import React from 'react';
import TracksScrollingDisplay from '../../reuseable_components/tracks_scrolling_display';
import FourRecentTracks from './four_recent_tracks';
import DiscoverLikesContainer from './discover_likes_container';

class Discover extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="discover-page">
        <div className="discover-tracks-and-stats">
        
          <div className="discover-tracks-display">
            <h1>Explore these tracks from Artists on JamCloud!</h1>
            <TracksScrollingDisplay />
            <h2>Enjoy more music that you've recently listend to!</h2>
            <FourRecentTracks />
          </div>

          <DiscoverLikesContainer />
        </div>
      </div>
    )
  }
}

export default Discover;