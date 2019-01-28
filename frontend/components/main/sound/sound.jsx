import React from 'react';
import Sound from 'react-sound';

class SoundPlay extends React.Component {
  constructor(props){
    super(props);
  }

  handleSongPlaying(){
    // debugger
  }

  handleSongLoading(){
    // debugger
  }

  handleSongFinishedPlaying(){
    // debugger
  }

  render() {
    return(
      <Sound
      url={this.props.soundUrl}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    )
  }
}

export default SoundPlay;