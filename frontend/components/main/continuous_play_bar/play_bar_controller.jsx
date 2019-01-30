import React from 'react';
import SoundContainer from '../sound/sound_container';
import ProgressBarContainer from './progress_bar_container';

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PAUSED", backPressed: false, shuffleClass: "fa fa-random"};
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleBack = this.toggleBack.bind(this);
    this.forcePlay = this.forcePlay.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
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

  toggleShuffle(){
    this.props.toggleShuffle(this.props.nTracks);
  }

  componentDidUpdate(){
    if(this.props.shuffle && this.state.shuffleClass === "fa fa-random"){
      this.setState({shuffleClass: "fa fa-random fa-random-selected"});
    } else if ((!this.props.shuffle) && (!(this.state.shuffleClass === "fa fa-random"))){
      this.setState({shuffleClass: "fa fa-random"});
    }
  }

  render(){
    let soundStatus = this.state.soundStatus;
    let playBarControllerContext = this;
    let iconClass = this.state.soundStatus === "PLAYING" ? "fas fa-pause" : "fas fa-play";
    let backPressed = this.state.backPressed;
    let toggleBack = this.toggleBack.bind(this);
    let forcePlay = this.forcePlay;
    let shuffleClass = this.state.shuffleClass;
    let nTracks = this.props.nTracks;
    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward" onClick={this.toggleBack}></i></button>
        <button><i id='play-pause' className={iconClass} onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward" onClick={() => this.props.goToNextTrack()}></i></button>
        <button><i className={shuffleClass} onClick={() => this.toggleShuffle(nTracks)}></i></button>
        <ProgressBarContainer />

        <SoundContainer playBarControllerContext={playBarControllerContext} forcePlay={forcePlay}
          toggleBack={toggleBack} soundStatus={soundStatus} backPressed={backPressed}/>
    </div>
    )
  }
}

export default PlayBarController