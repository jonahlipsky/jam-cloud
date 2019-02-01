import React from 'react';
import { connect } from 'react-redux';
import { pushToFrontOfQueue } from '../../actions/sound_controller_actions';
import { fetchUsers } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';
import TracksScrollingListItem from './tracks_scrolling_list_item';


// const mapStateToProps = state => {
  // let queue = state.io.trackQueue.queue && state.io.trackQueue.queue[0] ? state.io.trackQueue.queue : null;
  // let tracksUsersPairs = [];
  // if(queue){
  //   tracksUsersPairs = queue.forEach((trackId) => {
  //     if(state.entities.tracks[trackId]){
  //       let track = state.entities.tracks[trackId];
  //       let userId = track ? track.user_id : null;
  //       let user = userId ? state.entities.users[userId] : null;
  //       if(user){
  //         tracksUsersPairs.push([track, user]);
  //       }
  //     }
  //   });
  // } else {
  //   tracksUsersPairs = [];
  // }
  // };


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
  fetchTracks: () => dispatch(fetchTracks())
});

class TracksScrollingDisplay extends React.Component{
  constructor(props){
    super(props);

    this.handlePlay=this.handlePlay.bind(this)
  }


  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchTracks();
  }

  handlePlay(trackId){
    return () => {
      this.props.pushToFrontOfQueue(trackId);
    };
  }

  render(){
    let imageUrl = "";
    let tracksScrollingListItems;
    if(this.props.trackArtistPairs.length){
      imageUrl = this.props.trackArtistPairs[0][0].imageUrl;
      let trackArtistPairs = this.props.trackArtistPairs;
      tracksScrollingListItems = trackArtistPairs.map((trackArtistPair) => {      
        return <TracksScrollingListItem key={trackArtistPair[0].id} handlePlayCB={this.handlePlay(trackArtistPair[0].id)} trackArtistPair={trackArtistPair}/>
      });
    } else {
      tracksScrollingListItems = "";
    }

    return(
      <div className="tracks-scrolling-display">
        <div className="image-container">
          <img src={imageUrl} />
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