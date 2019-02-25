import React from 'react';
import SoundContainer from '../sound/sound_container';
import ProgressBarContainer from './progress_bar_container';
import regeneratorRuntime from "regenerator-runtime";

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PAUSED", backPressed: false, 
      milliseconds: 0, volume: 100};
    this.togglePlay = this.togglePlay.bind(this);
    this.toggleBack = this.toggleBack.bind(this);
    this.forcePlay = this.forcePlay.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  togglePlay(){
    if (!(this.props.soundStatus === "PLAYING") && this.props.trackQueue.queue.length ){
      this.props.sendSignal();
      setTimeout(() => {
        this.props.sendSoundStatus("PLAYING", this.props.trackQueue.queue[0]);
      }, 100);
    } else if (this.props.soundStatus === "PLAYING" && this.props.trackQueue.queue.length){
      this.props.sendSoundStatus("PAUSED", this.props.trackQueue.queue[0]);
    }
  }

  setProgressBar(percentage){
    $("#track-progress").css({width: `${percentage}%`});
    $("#track-progress-circle").css({left: `${percentage}%`});
  }

  forcePlay(){
    if(!(this.props.soundStatus === "PLAYING")){
      this.togglePlay();
    } 
  }

  toggleBack(){
    if(this.state.backPressed || this.props.currentMilliseconds < 500){
      this.props.goToPreviousTrack();
      this.props.sendCurrentPercentage(0.1);
    } else {
      this.props.sendCurrentPercentage(0.1);
      this.setState({backPressed: true});
      setTimeout(() => {
        this.setState({backPressed: false});
      }, 1500);
    }
  }

  async componentDidMount(){
    await this.props.fetchUsers();
    await this.props.fetchTracks();
    this.toggleShuffle(this.props.trackIds, true);
  }

  componentDidUpdate(prevProps){
    if(this.props.immediate){
      this.forcePlay();
    } else if (prevProps.percentageComplete != this.props.percentageComplete){
      this.setProgressBar(this.props.percentageComplete);
    }
  }

  toggleShuffle(e, shuffleAndTurnOff = false){
    this.props.toggleShuffle(this.props.trackIds, shuffleAndTurnOff);
  }

  handleForward(){
    this.props.goToNextTrack();
  }

  handleVolumeChange(e){
    let volumeValue = parseInt(e.currentTarget.value);
    this.setState({volume: volumeValue});
  }
  
  render(){
    let playBarControllerContext = this;
    let playingBoolean = this.props.soundStatus === "PLAYING";
    let iconClass = playingBoolean ? "fas fa-pause" : "fas fa-play";
    let shuffleClass = this.props.shuffle ? "fa fa-random fa-random-selected" : "fa fa-random";

    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward" onClick={this.toggleBack}></i></button>
        <button><i id='play-pause' className={iconClass} onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward" onClick={this.handleForward}></i></button>
        <button><i className={shuffleClass} onClick={this.toggleShuffle}></i></button>
        <ProgressBarContainer />
        <div className="volume-icons">
          <img src={window.volume}/>
          <div className="volume-var">
            <input type="range" id="volume-slider" name="volume" min="0" 
              max="100" value={this.state.volume} onChange={this.handleVolumeChange}/>
          </div>
        </div>
        <SoundContainer playBarControllerContext={playBarControllerContext} 
          volume={this.state.volume} forcePlay={this.forcePlay}/>
    </div>
    )
  }
}

export default PlayBarController