import React from 'react';
import TracksScrollingDisplay from '../../reuseable_components/tracks_scrolling_display';
import FourRecentTracks from './four_recent_tracks';
import DiscoverLikesContainer from './discover_likes_container';
import DiscoverStats from './discover_stats';
import Widget from '../../reuseable_components/widgets/track_widget_container';

class Discover extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let featureOne = "";
    let featureTwo = "";
    if(this.props.featuredTracks.length){
      let trackOne = this.props.featuredTracks[0][0];
      let trackTwo = this.props.featuredTracks[1][0];
      featureOne = <li id={trackOne.id}><Widget track={trackOne} user={this.props.featuredTracks[0][1]}/></li>
      featureTwo = <li id={trackTwo.id}><Widget track={trackTwo} user={this.props.featuredTracks[1][1]}/></li>
    }
    
    return(
      <div className="discover-page">
        <div className="discover-tracks-and-stats">
          <div className="discover-stats-and-likes">
            <DiscoverStats nRecentlyPlayedTracks={this.props.nRecentlyPlayedTracks} 
              lastWeekListens={this.props.lastWeekListens} lastDayListens={this.props.lastDayListens}/>
            <DiscoverLikesContainer />
          </div>
          <div className="discover-tracks-display">
            <h1>Explore these tracks from Artists on JamCloud!</h1>
            <TracksScrollingDisplay />
            <h1>Featured Tracks</h1>
            <ul className="discover-page-featured-tracks">
              {featureOne}
              {featureTwo}
            </ul>
            <h1>Enjoy more music that you've recently listend to!</h1>
            <FourRecentTracks />
          </div>
        </div>
      </div>
    )
  }
}

export default Discover;