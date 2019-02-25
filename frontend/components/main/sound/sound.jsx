import React from 'react';
import Sound from 'react-sound';
//react sound documentation: 
//https://github.com/leoasis/react-sound
//https://medium.com/@jerrysbusiness/playing-a-sound-file-in-a-react-project-bd0ad079ad93
//https://www.npmjs.com/package/react-sound

class SoundPlay extends React.Component {
  constructor(props){
    super(props);
    this.state = {position: 0, backPressed: this.props.backPressed, duration: 0, autoLoad: false};
    this.handleSongLoading = this.handleSongLoading.bind(this);
    this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this);
  }

  handleSongPlaying(playingObject){
    this.setState({position: playingObject.position});
    let percentageComplete = ((playingObject.position / playingObject.duration) * 100) || 0;
    this.props.sendPercentageComplete(percentageComplete, playingObject.duration);
    if(playingObject.duration - playingObject.position < 300){
      this.handleSongFinishedPlaying();
    }
  }


  componentDidUpdate(){
    if(this.props.immediate){
      this.props.clearImmediate();
      this.setState({position: 0});
    } else if (this.props.currentPercentage){
      this.props.clearCurrentPercentage();
      let position = Math.floor((this.props.currentPercentage / 100) * this.state.duration);
      this.setState({ position });
      this.props.sendPercentageComplete(this.props.currentPercentage, this.state.duration);
    }
  }

  handleSongLoaded(){
    this.props.sendRecentTrack(this.props.currentTrack.id); 
    if(this.props.soundStatus != "PLAYING"){
      this.props.playBarControllerContext.togglePlay();
    } 
  }

  handleSongLoading(loadingObject){
    if(loadingObject.duration != this.state.duration){
      this.setState({duration: loadingObject.duration, position: 0});
      this.props.sendPercentageComplete(0, loadingObject.duration);
    }
  }

  handleSongFinishedPlaying(){
    this.setState({position: 0});
    this.props.playBarControllerContext.togglePlay();
    if(this.props.nextTrack){
      this.setState({ autoLoad: true });
      this.props.goToNextTrack();
    } else {
      this.props.playBarControllerContext.setProgressBar(0);
      this.props.sendPercentageComplete(0, this.state.duration);
    }
  }

  soundStatus(){
    switch(this.props.soundStatus){
      case "PLAYING":
        return Sound.status.PLAYING;
      case "PAUSED":
        return Sound.status.PAUSED;
      default: 
        return Sound.status.STOPPED;
    }
  }

  render() {
    let status = this.soundStatus();
    let sound;
    if(this.props.currentTrack){
      sound = (<Sound autoLoad={this.state.autoLoad}
        url={this.props.currentTrack.soundUrl}
        playStatus={status}
        volume={this.props.volume}
        position={this.state.position}
        onLoad={this.handleSongLoaded.bind(this)}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying.bind(this)}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />)
    } else {
      sound = null;
    }


    return(
      <>
        {sound}
      </>
    )
  }
}

export default SoundPlay;