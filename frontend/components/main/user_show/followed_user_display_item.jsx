import React, {Component} from 'react';
import {connect} from 'react-redux';
import LikeIconContainer from '../../reuseable_components/like_icon/like_icon_container';
import { Link } from 'react-router-dom'

class LikedTrackDisplayItem extends Component{
  constructor(props){
    super(props);

  }

  render(){
    let profilePicture = this.props.user ? this.props.user.profilePicture : "";
    let username = this.props.user ? this.props.user.username : "";
    let nFollows = this.props.user ? this.props.user.follower_ids.length : 0;
    let userId = this.props.user ? this.props.user.id : 1;
    
    return(
      <li className="liked-display-list-item">
        <img className="profile-picture" src={profilePicture}/>
        <div className="track-information">
          <Link to={`/users/${userId}`}>{username}</Link>
          <div className="n-likes">
            <i className="fas fa-users"></i>
            <p>{nFollows}</p>
          </div>
        </div>
        <div className="like-and-options">
          <LikeIconContainer element={this.props.user} type={"User"}/>
        </div>
      </li>
    )
  }
}

export default connect(null, null)(LikedTrackDisplayItem);