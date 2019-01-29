import React from 'react';
import SoundContainer from '../sound/sound_container';

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PAUSED", backPressed: false};
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleBack = this.toggleBack.bind(this);
    this.forcePlay = this.forcePlay.bind(this);
  }

  togglePlay(){
    if (!(this.state.soundStatus === "PLAYING") && this.props.trackQueue.queue.length ){
      this.setState({soundStatus: "PLAYING"});
    } else if (this.state.soundStatus === "PLAYING"){
      this.setState({soundStatus: "PAUSED"});
    }
  }

  forcePlay(){
    if(!(this.state.soundStatus === "PLAYING")){
      this.setState({soundStatus: "PLAYING"});
    }
  }

  toggleBack(){
    if(this.state.backPressed){
      this.setState({backPressed: false});
    } else {
      this.setState({backPressed: true});
    }
  }


  render(){
    let soundStatus = this.state.soundStatus;
    let playBarControllerContext = this;
    let iconClass = this.state.soundStatus === "PLAYING" ? "fas fa-pause" : "fas fa-play";
    let backPressed = this.state.backPressed;
    let toggleBack = this.toggleBack.bind(this);
    let forcePlay = this.forcePlay;
    debugger
    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward" onClick={this.toggleBack}></i></button>
        <button><i id='play-pause' className={iconClass} onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward" onClick={() => this.props.goToNextTrack()}></i></button>
        <button><i className="fas fa-random"></i></button>
        <button><i className="far fa-repeat"></i></button>
        <SoundContainer playBarControllerContext={playBarControllerContext} forcePlay={forcePlay}
          toggleBack={toggleBack} soundStatus={soundStatus} backPressed={backPressed}/>
    </div>
    )
  }
}

export default PlayBarController