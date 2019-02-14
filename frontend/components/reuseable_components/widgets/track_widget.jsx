import React from 'react'
import { connect } from 'react-redux';
import { pushToFrontOfQueue, 
  sendSoundStatus } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let track = {id: 1, widgetIdentifier: "265422144"};
  let soundStatusArray = state.io.trackQueue.soundStatus;
  let firstInQueue = state.io.trackQueue.queue ? state.io.trackQueue.queue[0] : ""
  let percentageComplete = state.io.trackQueue.percentageComplete;
  let duration = state.io.trackQueue.duration;
  let currentMilliseconds = percentageComplete * duration / 100;
  console.log(currentMilliseconds);
  debugger
  return({
    track,
    soundStatusArray,
    firstInQueue,
    currentMilliseconds
  });
};

const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId)),
  sendSoundStatus: (status, trackId) => dispatch(sendSoundStatus(status, trackId))
});

class TrackWidget extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      widgetOptions: "&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
      tracksWidgetUrlPrefix: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
    };
  }
  

  setListeners(widget){
    debugger

    let pushToQueue = () => {
      let trackId = this.props.track.id;
      if(this.props.firstInQueue != String(trackId)){
        this.props.pushToFrontOfQueue(trackId);
      } else if(this.props.soundStatusArray[0] != "PLAYING"){
        this.props.sendSoundStatus("PLAYING", this.props.track.id);
      }
    };
    pushToQueue = pushToQueue.bind(this);

    widget.bind(SC.Widget.Events.PLAY, () => {
      debugger
      let widgetElement = document.getElementById(`track${this.props.track.id}Widget`);
      SC.Widget(widgetElement).setVolume(0);
      pushToQueue();
    }); 

    let pause = function(){
      if(this.props.soundStatusArray[0] != "PAUSED"){
        debugger
        this.props.sendSoundStatus("PAUSED", this.props.track.id);
      }
    };
    pause = pause.bind(this);
    widget.bind(SC.Widget.Events.PAUSE, () => {
      // debugger
      pause();
    });
  }
  
  componentDidUpdate(prevProps){
    //check if ids are in the right format to be checked
    if(!this.state.widget && this.props.track){
      let widgetElement = document.getElementById(`track${this.props.track.id}Widget`);
      let widget = SC.Widget(widgetElement);
      this.setState({widget});
      this.setListeners(widget);
    }

    if(prevProps.currentMilliseconds != this.props.currentMilliseconds){
      
      this.state.widget.seekTo(this.props.currentMilliseconds);
    } 
    if (this.state.widget && (prevProps.soundStatusArray[0] != this.props.soundStatusArray[0]) && 
        this.props.soundStatusArray[0] === "PAUSED"){
      this.togglePlayStatus();
    }
  }

  togglePlayStatus(){
    debugger
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
      let widgetIdentifier = this.props.track.widgetIdentifier;
      let id = `track${this.props.track.id}Widget`;
      let prefix = this.state.tracksWidgetUrlPrefix;
      let options = this.state.widgetOptions;
      widget = <iframe id={id} width="100%" height="166" scrolling="no" frameBorder="no" 
        allow="autoplay" src={`${prefix}${widgetIdentifier}${options}`}></iframe>
    }
    return(
      <>
        {widget}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackWidget)