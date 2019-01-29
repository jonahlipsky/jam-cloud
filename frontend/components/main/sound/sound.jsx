import React from 'react';
import Sound from 'react-sound';
//react sound documentation: 
//https://github.com/leoasis/react-sound
//https://medium.com/@jerrysbusiness/playing-a-sound-file-in-a-react-project-bd0ad079ad93
//https://www.npmjs.com/package/react-sound



class SoundPlay extends React.Component {
  constructor(props){
    super(props);
    // this.state = {status: Sound.status.PLAYING};
  }

  handleSongPlaying(playingObject){
    debugger
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
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
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