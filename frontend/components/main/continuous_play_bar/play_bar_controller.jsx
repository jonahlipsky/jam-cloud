import React from 'react';
import SoundContainer from '../sound/sound_container';

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PAUSED"};
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(){
    if (!(this.state.soundStatus === "PLAYING") && this.props.trackQueue.queue.length ){
      this.setState({soundStatus: "PLAYING"});
    } else if (this.state.soundStatus === "PLAYING"){
      this.setState({soundStatus: "PAUSED"});
    }
  }


  render(){
    let soundStatus = this.state.soundStatus;
    let iconClass = this.state.soundStatus === "PLAYING" ? "fas fa-pause" : "fas fa-play";
    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward"></i></button>
        <button><i id='play-pause' className={iconClass} onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward" onClick={() => this.props.goToNextTrack()}></i></button>
        <button><i className="fas fa-random"></i></button>
        <button><i className="far fa-repeat"></i></button>
        <SoundContainer soundStatus={soundStatus}/>
    </div>
    )
  }
}

export default PlayBarController