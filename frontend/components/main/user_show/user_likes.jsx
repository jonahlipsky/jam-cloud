import React, { Component } from 'react';
import LikedTrackDisplayItem from './liked_track_display_item_container';

class UserLikes extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let like = "likes";
    if(this.props.nLikes === 1){
      like = "like";
    }

    let likedDisplayItems = this.props.likedTracks.map(track => {
      return (<LikedTrackDisplayItem key={track.id} track={track}/>)
    });

    return(
      <div className="user-show-likes-display">
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

export default UserLikes