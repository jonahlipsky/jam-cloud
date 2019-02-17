import React, {Component} from 'react';
import {connect} from 'react-redux';
import LikeIconContainer from '../../reuseable_components/like_icon/like_icon_container';
import { pushToFrontOfQueue } from '../../../actions/sound_controller_actions';
import {Link} from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId))
});

class LikedTrackDisplayItem extends Component{
  constructor(props){
    super(props);
    this.state = {playIconHover: false};
  }

  mouseEnter(){
    this.setState({playIconHover: true});
  }

  mouseLeave(){
    this.setState({playIconHover: false});
  }

  playTrack(){
    this.props.pushToFrontOfQueue(this.props.track.id);
  }

  render(){
    let imageUrl = this.props.track ? this.props.track.imageUrl : "";
    let username = this.props.track ? this.props.track.username : "";
    let userId = this.props.track ? this.props.track.user_id : 1;
    let title = this.props.track ? this.props.track.title : "";
    let trackId = this.props.track ? this.props.track.id : 0;
    let nLikes = this.props.track ? this.props.track.liker_ids.length : 0;
    let playIcon = this.state.playIconHover ? <img className="play-icon" src={window.playIconHover} 
      onClick={this.playTrack.bind(this)}/> : <img className="play-icon" src={window.playIcon}/>
    
    return(
      <li className="liked-display-list-item">
        <div className="track-image">
          <img src={imageUrl}/>
          <div className="li-play-icon-container" onMouseEnter={this.mouseEnter.bind(this)} 
            onMouseLeave={this.mouseLeave.bind(this)}>
            {playIcon}
          </div>
        </div>
        <div className="track-information">
          <Link to={`/users/${userId}`}>{username}</Link>
          <Link className="title" to={`/tracks/${trackId}`}>{title}</Link>
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

export default connect(null, mapDispatchToProps)(LikedTrackDisplayItem);