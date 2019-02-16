import React, {Component} from 'react';
import {connect} from 'react-redux';
import LikeIconContainer from '../../reuseable_components/like_icon/like_icon_container';

const mapDispatchToProps = dispatch => ({

});

class LikedTrackDisplayItem extends Component{
  constructor(props){
    super(props);

  }

  render(){
    let profilePicture = this.props.user ? this.props.user.profilePicture : "";
    let username = this.props.user ? this.props.user.username : "";
    let nFollows = this.props.user ? this.props.user.follower_ids.length : 0;
    
    return(
      <li className="liked-display-list-item">
        <img className="profile-picture" src={profilePicture}/>
        <div className="track-information">
          <p className="username">{username}</p>
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