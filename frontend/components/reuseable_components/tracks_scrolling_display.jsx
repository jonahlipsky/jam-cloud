import React from 'react';
import { connect } from 'react-redux';
import { pushToFrontOfQueue, immediateOn } from '../../actions/sound_controller_actions';
import { fetchUsers } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';
import TracksScrollingListItem from './tracks_scrolling_list_item';

const mapStateToProps = state => {

  let trackArtistPairs = [];
  let queue = state.io.trackQueue.queue;
  if(queue.length){
    for (let i = 0; i < queue.length; i++) {
      let trackId = queue[i];
      let track = state.entities.tracks[trackId];
      let artist = state.entities.users[track.user_id];
      trackArtistPairs.push([track, artist]);
    }
  }
  
  return({
    trackArtistPairs
  });
};


const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks()),
  immediateOn: () => dispatch(immediateOn())
});

class TracksScrollingDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {pauseIcon: false, playIconHover: false};
    this.handlePlay=this.handlePlay.bind(this);
  }

  handlePlay(){
    this.props.immediateOn();
  }

  handlePlayImmediate(trackId){
    return e => {
      this.props.pushToFrontOfQueue(trackId);
    };
  }

  mouseEnter(){
    this.setState({playIconHover: true});
  }

  mouseLeave(){ 
    this.setState({playIconHover: false});
  }

  render(){
    let imageUrl = "";
    let tracksScrollingListItems;
    if(this.props.trackArtistPairs.length){
      imageUrl = this.props.trackArtistPairs[0][0].imageUrl;
      let trackArtistPairs = this.props.trackArtistPairs;
      tracksScrollingListItems = trackArtistPairs.map((trackArtistPair) => {      
        return <TracksScrollingListItem key={trackArtistPair[0].id} 
          handlePlayCB={this.handlePlayImmediate(trackArtistPair[0].id)} trackArtistPair={trackArtistPair}/>
      });
    } else {
      tracksScrollingListItems = "";
    }

    let playIcon;

    if(this.state.pauseIcon){
      playIcon = <img src={window.pauseIcon} />
    } else if (this.state.playIconHover){
      playIcon = <img src={window.playIconHover} onClick={this.handlePlay} />
    } else {
      playIcon = <img src={window.playIcon} />
    }

    return(
      <div className="tracks-scrolling-display">
        <div className="image-container">
          <img src={imageUrl} />
          <div className="play-icon" onMouseEnter={this.mouseEnter.bind(this)} 
            onMouseLeave={this.mouseLeave.bind(this)}>
            {playIcon}
          </div>
        </div>
        <div className="scrolling-display">
          <ul>
            {tracksScrollingListItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksScrollingDisplay);