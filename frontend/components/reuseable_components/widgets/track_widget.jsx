import React from 'react';
import LikeIconContainer from '../like_icon/like_icon_container';

class TrackWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      widgetOptions: "&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&show_playcount=false&single_active=false&buying=false&liking=false",
      tracksWidgetUrlPrefix: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
    };
  }
  
  playCB(widget){
    let pushToQueue = function(){
      let trackId = this.props.track.id;
      if(this.props.firstInQueue != String(trackId)){
        this.props.pushToFrontOfQueue(trackId);
      } else if(this.props.soundStatusArray[0] != "PLAYING"){
        this.props.sendSoundStatus("PLAYING", this.props.track.id);
      }
    }.bind(this);
    widget.bind(SC.Widget.Events.PLAY, () => {
      let widgetElement = document.getElementById(`track${this.props.track.id}Widget`);
      SC.Widget(widgetElement).setVolume(0);
      pushToQueue();
    }); 
  }

  pauseCB(widget){
    let pause = function(){
      if(this.props.soundStatusArray[0] != "PAUSED"){
        this.props.sendSoundStatus("PAUSED", this.props.track.id);
      }
    }.bind(this);
    widget.bind(SC.Widget.Events.PAUSE, () => {
      pause();
    });
  }

  seekCB(widget){
    let seek = function(obj){
    if(String(this.props.soundStatusArray[1]) === String(this.props.track.id)
      && Math.abs(this.props.currentMilliseconds - obj.currentPosition) > 1500 ){
        window.seeking = true;
        this.props.sendCurrentPercentage(obj.relativePosition * 100);
        setTimeout(() => {
          window.seeking = false;
        }, 50);
    }}.bind(this);
    widget.bind(SC.Widget.Events.SEEK, obj => {
      seek(obj);
    });
  }

  setListeners(widget){
    this.playCB(widget); //CB for when widget is played
    this.pauseCB(widget); //CB for when the widget gets paused
    this.seekCB(widget); //CB for when the user seeks
  }
  
  componentDidUpdate(prevProps){
    //if the widget is not present, create the widget and save to state.
    if(!this.state.widget && this.props.track){
      let widgetElement = document.getElementById(`track${this.props.track.id}Widget`);
      let widget = SC.Widget(widgetElement);
      this.setState({widget});
      this.setListeners(widget);
    }
    //if the song is playing and sending progress updates, seek to that positions
    if(prevProps.currentMilliseconds != this.props.currentMilliseconds &&
      String(this.props.soundStatusArray[1]) === String(this.props.track.id) && 
      !window.seeking){ 
        this.state.widget.seekTo(this.props.currentMilliseconds);
    } 
    //if the sound status has changed and now it it equal to 'PAUSED', pause the widget
    if (this.state.widget && (prevProps.soundStatusArray[0] != this.props.soundStatusArray[0]) 
      && this.props.soundStatusArray[0] === "PAUSED"){
        this.state.widget.pause();
    } else if (parseInt(prevProps.firstInQueue) === this.props.track.id 
      && prevProps.firstInQueue != this.props.firstInQueue){
        this.state.widget.pause();
    } else if (this.state.widget && (prevProps.soundStatusArray[0] != this.props.soundStatusArray[0])
      && this.props.soundStatusArray[0] === "PLAYING" && prevProps.signal && window.handshake
      && parseInt(this.props.soundStatusArray[1]) === this.props.track.id ){
        window.handshake = false;
        this.state.widget.play();
    }
  }

  togglePlayStatus(){
    let soundStatusArray = this.props.soundStatusArray;
    if( soundStatusArray[0] === "PLAYING"){
        this.state.widget.play();
    } else if (soundStatusArray[0] === "PAUSED"){
        this.state.widget.pause();
    }
  }

  render(){
    let widget = "";
    if(this.props.track){
      let widgetIdentifier = this.props.track.widget_identifier;
      let id = `track${this.props.track.id}Widget`;
      let prefix = this.state.tracksWidgetUrlPrefix;
      let options = this.state.widgetOptions;
      widget = <iframe id={id} width="100%" height="166" scrolling="no" frameBorder="no" 
        allow="autoplay" src={`${prefix}${widgetIdentifier}${options}`}></iframe>
    }
    let followIcon = "";
    if(this.props.user){
      followIcon = <LikeIconContainer element={this.props.user} type={"User"}/>
    }
    return(
      <div className="widget-container">      
        {widget}
        <div className="widget-track-image-cover">
          <div className="widget-follow-cover" >
            {followIcon}
          </div>
        </div>
      </div>
    )
  }
}

export default TrackWidget;