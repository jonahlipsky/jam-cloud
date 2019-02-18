import React, { Component } from 'react';
import LikedTrackDisplayItem from '../user_show/liked_track_display_item';
import FollowedUserDisplayItem from '../user_show/followed_user_display_item';

class DiscoverLikes extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let like = "likes";
    let play = "plays";
    let following = "Who to follow";
    if(this.props.nLikes === 1){
      like = "like";
    }
    if(this.props.nRecenlyPlayedTracks === 1){
      play = "play";
    }

    let likedDisplayItems = this.props.likedTracks.map(track => {
      return (<LikedTrackDisplayItem key={track.id} track={track}/>)
    });

    let notFollowedUserDisplayItems = this.props.notFollowedUsers.map(user => {
      return(<FollowedUserDisplayItem key={user.id} user={user}/>)
    });

    return(
      <div className="discover-likes-display">
        
        <div className="n-likes">
          <i className="fas fa-users"></i>
          <p>{this.props.nFollows} {following}</p>
        </div>

        <ul className="followed-user-display">
          {notFollowedUserDisplayItems}
        </ul>

        <div className="n-likes">
          <i className="fas fa-heart"></i>
          <p>{this.props.nLikes} {like}</p>
        </div>

        <ul className="liked-track-display">
          {likedDisplayItems}
        </ul>

      </div>
    )
  }
}

export default DiscoverLikes