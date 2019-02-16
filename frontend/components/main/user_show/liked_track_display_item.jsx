import React, {Component} from 'react';
import LikeIconContainer from '../../reuseable_components/like_icon/like_icon_container';

class LikedTrackDisplayItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let imageUrl = this.props.track ? this.props.track.imageUrl : "";
    let username = this.props.track ? this.props.track.username : "";
    let title = this.props.track ? this.props.track.title : "";
    let nLikes = this.props.track ? this.props.track.liker_ids.length : 0;
    return(
      <li className="liked-track-display-list-item">
        <div className="track-image">
          <img src={imageUrl}/>
        </div>
        <div className="track-information">
          <p className="username">{username}</p>
          <p className="title">{title}</p>
          <div className="n-likes">
            <i className="fas fa-heart"></i>
            <p>{nLikes}</p>
          </div>
        </div>
        <div className="like-and-options">
          <LikeIconContainer element={this.props.track} type={"Track"}/>
        </div>
      </li>
    )
  }
}

export default LikedTrackDisplayItem;