import React, { Component } from 'react';
import LikedTrackDisplayItem from './liked_track_display_item';
import FollowedUserDisplayItem from './followed_user_display_item';

class UserLikes extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let like = "likes";
    let following = "following";
    if(this.props.nLikes === 1){
      like = "like";
    }

    let likedDisplayItems = this.props.likedTracks.map(track => {
      return (<LikedTrackDisplayItem key={track.id} track={track}/>)
    });

    let followedUserDisplayItems = this.props.followedUsers.map(user => {
      return(<FollowedUserDisplayItem key={user.id} user={user}/>)
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

        <div className="n-likes">
          <i className="fas fa-users"></i>
          <p>{this.props.nFollows} {following}</p>
        </div>

        <ul className="followed-user-display">
          {followedUserDisplayItems}
        </ul>

      </div>
    )
  }
}

export default UserLikes