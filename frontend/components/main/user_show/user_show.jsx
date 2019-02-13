import React from 'react';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  play(obj){
    debugger
  }
  // componentDidUpdate(){
  //   debugger
  // }

  componentDidMount(){
    let playlistWidget = SC.Widget(document.getElementById('playlist-widget'));
    let track1widget = SC.Widget(document.getElementById('track1widget'));
    this.setState({playlistWidget, 
      track1widget});


    let playFunc = function(obj){
      this.play(obj);
    };
    playFunc = playFunc.bind(this);
    playlistWidget.bind(SC.Widget.Events.PLAY, () => {
      let songTimesInfo = [];
      playlistWidget.getPosition(milliseconds => {
        songTimesInfo.push(milliseconds);
      });
      playlistWidget.getDuration(milliseconds => {
        songTimesInfo.push(milliseconds);
      });
      playFunc(songTimesInfo);
    }); 
  }

  render(){
    return(
      <div className="user-show-container main-content-area">

        <iframe id='playlist-widget' width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/227482806&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <iframe id='track1widget' width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/564253167%3Fsecret_token%3Ds-2AzP6&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true"></iframe>
      </div>
    )
  }
}

export default UserShow;