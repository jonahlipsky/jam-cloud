import React from 'react';
import SoundContainer from '../sound/sound_container';

class PlayBarController extends React.Component{
  constructor(props){
    super(props);
    this.state = {soundStatus: "PLAYING"};
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(){
    let icon;
    if (!(this.state.soundStatus === "PLAYING") && this.props.trackQueue.length ){
      this.setState({soundStatus: "PLAYING"});
      icon = document.getElementById('play-pause');
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else if (this.state.soundStatus === "PLAYING"){
      this.setState({soundStatus: "PAUSED"});
      icon = document.getElementById('play-pause');
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  }


  render(){
    let soundStatus = this.state.soundStatus;
    return(
    <div className="control-bar">
        <button><i className="fas fa-step-backward"></i></button>
        <button><i id='play-pause' className="fas fa-play" onClick={this.togglePlay}></i></button>
        <button><i className="fas fa-step-forward"></i></button>
        <button><i className="fas fa-random"></i></button>
        <button><i className="far fa-repeat"></i></button>
        <SoundContainer soundStatus={soundStatus}/>
    </div>
    )
  }
}

export default PlayBarController