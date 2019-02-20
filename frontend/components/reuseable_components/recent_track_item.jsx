import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pushToFrontOfQueue } from '../../actions/sound_controller_actions';


const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: (trackId) => dispatch(pushToFrontOfQueue(trackId))
});

class RecentTrackItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {mouseOver: false, mouseOverPlayButton: false};
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseEnterPlayButton = this.mouseEnterPlayButton.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseLeavePlayButton = this.mouseLeavePlayButton.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  mouseEnter(){
    this.setState({mouseOver: true});
  }

  mouseLeave(){
    this.setState({mouseOver: false});
  }

  mouseEnterPlayButton(){
    this.setState({mouseOverPlayButton: true});
  }

  mouseLeavePlayButton(){
    this.setState({mouseOverPlayButton: false});
  }

  playTrack(){
    this.props.pushToFrontOfQueue(this.props.track.id);
  }

  render(){
    let track = this.props.track;
    let{imageUrl, title} = track;
    let [artistName, trackId, userId] = [track.username, track.id, track.user_id];
    
    let playButtonClass = this.state.mouseOver ? "play-button" : "play-button hidden";
    let playIcon = this.state.mouseOverPlayButton ? 
      <img src={window.playIconHover} onClick={this.playTrack}/> : 
      <img src={window.playIcon}/>

    return(
      <div className="single-track-display" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
        <img className="track-main-image" src={imageUrl} />
        <div className={playButtonClass} onMouseEnter={this.mouseEnterPlayButton} onMouseLeave={this.mouseLeavePlayButton}>
          {playIcon}
        </div>
        <div className="single-track-artist-title">
          <Link className="title" to={`/tracks/${trackId}`}>{title}</Link>
          <Link className="artist-name" to={`/users/${userId}`}>{artistName}</Link>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(RecentTrackItem);