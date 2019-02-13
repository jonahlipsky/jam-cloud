import React from 'react'
import { connect } from 'react-redux';
import { pushToFrontOfQueue, 
  sendSoundStatus } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let track = {id: 1, widgetIdentifier: "265422144"};
  let soundStatusArray = state.io.trackQueue.soundStatus;
  let firstInQueue = state.io.trackQueue.queue ? state.io.trackQueue.queue[0] : ""

  return({
    track,
    soundStatusArray,
    firstInQueue
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
      tracksWidgetUrlPrefix: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/",
      soundStatus: "PAUSED"
    };
  }

  setListeners(widget){
    widget.setVolume(0);
    let pushToQueue = function(){
      let trackId = this.props.track.id;
      if(this.props.firstInQueue != String(trackId)){
        debugger
        this.props.pushToFrontOfQueue(trackId);
        // this.props.sendSoundStatus("PLAYING", this.props.track.id);
      } else {
        this.props.sendSoundStatus("PLAYING", this.props.track.id);
      }
    };
    pushToQueue = pushToQueue.bind(this);
    widget.bind(SC.Widget.Events.PLAY, () => {
      pushToQueue();
    }); 

    let pause = function(){
      debugger
      if(this.props.soundStatusArray[0] != "PAUSED"){
        this.props.sendSoundStatus("PAUSED", this.props.track.id);
      }
      this.setState({soundStatus: "PAUSED"});
    
    };
    pause = pause.bind(this);

    widget.bind(SC.Widget.Events.PAUSE, () => {
      pause();
    });
  }
  
  componentDidUpdate(prevProps){
    if(!this.state.widget && this.props.track){
      let widgetElement = document.getElementById(`track${this.props.track.id}Widget`);
      let widget = SC.Widget(widgetElement);
      this.setState({widget});
      this.setListeners(widget);
    } else if(prevProps.soundStatusArray != this.props.soundStatusArray){
      this.togglePlayStatus();
    }
  }

  togglePlayStatus(){
    let trackId = String(this.props.track.id);
    let soundStatusArray = this.props.soundStatusArray;
    // debugger
    if( trackId === soundStatusArray[1] && soundStatusArray[0] === "PLAYING" && 
      this.state.soundStatus != "PLAYING"){
        this.state.widget.play();
        this.setState({soundStatus: "PLAYING"});
    } else if (trackId === soundStatusArray[1] && soundStatusArray[0] === "PAUSED"
      && this.state.soundStatus != "PAUSED"){
        this.state.widget.pause();
        this.setState({soundStatus: "PAUSED"});
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