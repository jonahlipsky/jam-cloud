import React from 'react';
import Sound from 'react-sound';
//react sound documentation: 
//https://github.com/leoasis/react-sound
//https://medium.com/@jerrysbusiness/playing-a-sound-file-in-a-react-project-bd0ad079ad93
//https://www.npmjs.com/package/react-sound



class SoundPlay extends React.Component {
  constructor(props){
    super(props);
    this.state = {position: 0, backPressed: this.props.backPressed};
  }

  handleSongPlaying(playingObject){
    this.setState({position: playingObject.position});
    if(this.props.backPressed && playingObject.position < 1500){
      this.props.goToPreviousTrack();
      this.setState({position: 0});
      this.props.toggleBack();
    } else if (this.props.backPressed){
      this.setState({ position: 0 });
      this.props.toggleBack();
    }
  }

  componentDidUpdate(){
    if(this.props.immediate){
      this.setState({position: 0});
      this.props.forcePlay();
      this.props.toggleImmediate();
    }
  }

  handleSongLoading(){

  }

  handleSongFinishedPlaying(){

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
      sound = (<Sound
        url={this.props.currentTrack.trackUrl}
        playStatus={status}
        position={this.state.position}
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