import React from 'react';
import SoundContainer from '../sound/sound_container';
import ProgressBarContainer from './progress_bar_container';

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PAUSED", backPressed: false, 
      shuffleClass: "fa fa-random", milliseconds: 0};
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleBack = this.toggleBack.bind(this);
    this.forcePlay = this.forcePlay.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.clearLocalInterval = this.clearLocalInterval.bind(this);
    this.setLocalInterval = this.setLocalInterval.bind(this);
    this.trackProgess = null;
  }

  togglePlay(){
    if (!(this.state.soundStatus === "PLAYING") && this.props.trackQueue.queue.length ){
      this.setState({ soundStatus: "PLAYING" });
      this.setLocalInterval();
    } else if (this.state.soundStatus === "PLAYING"){
      this.setState({soundStatus: "PAUSED"});
      this.clearLocalInterval();
    }
  }

  setLocalInterval(){
    let milliseconds = this.props.currentMilliseconds;
    this.setState({ milliseconds });
    let that = this;
    let intervalId = setInterval(() => {
      let percentage = (((that.state.milliseconds + 10) * 100) / that.props.duration);
      $("#track-progress").css({width: `${percentage}%`});
      $("#track-progress-circle").css({left: `${percentage}%`});
      that.setState({milliseconds: that.state.milliseconds + 10});
    }, 10);
    this.setState({ intervalId }); 
  }

  clearLocalInterval(){
    clearInterval(this.state.intervalId);
  }

  forcePlay(){
    if(!(this.state.soundStatus === "PLAYING")){
      this.togglePlay();
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
    let playBarControllerContext = this;
    let iconClass = this.state.soundStatus === "PLAYING" ? "fas fa-pause" : "fas fa-play";
    let toggleBack = this.toggleBack.bind(this);
    let shuffleClass = this.state.shuffleClass;
    let nTracks = this.props.nTracks;
    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward" onClick={this.toggleBack}></i></button>
        <button><i id='play-pause' className={iconClass} onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward" onClick={() => this.props.goToNextTrack()}></i></button>
        <button><i className={shuffleClass} onClick={() => this.toggleShuffle(nTracks)}></i></button>
        <ProgressBarContainer />

        <SoundContainer playBarControllerContext={playBarControllerContext} forcePlay={this.forcePlay}
          toggleBack={toggleBack} soundStatus={this.state.soundStatus} backPressed={this.state.backPressed}
          clearLocalInterval={this.clearLocalInterval} setLocalInterval={this.setLocalInterval}/>
    </div>
    )
  }
}

export default PlayBarController