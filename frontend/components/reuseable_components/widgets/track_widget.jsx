import React from 'react'
import { connect } from 'react-redux';
import { pushToFrontOfQueue } from '../../../actions/sound_controller_actions';

const mapStateToProps = state => {
  let track = {id: 1, widgetIdentifier: "265422144"};

  return({
    track
  });
};

const mapDispatchToProps = dispatch => ({
  pushToFrontOfQueue: trackId => dispatch(pushToFrontOfQueue(trackId))
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
    debugger;
    widget.setVolume(0);
    let pushToQueue = function(){
      debugger
      let trackId = this.props.track.id;
      this.props.pushToFrontOfQueue(trackId);
    };
    pushToQueue = pushToQueue.bind(this);

    
    widget.bind(SC.Widget.Events.PLAY, () => {
      pushToQueue();
    }); 
  }
  
  componentDidUpdate(){
    if(!this.state.widget && this.props.track){
      let widget = SC.Widget(document.getElementById(`track${this.props.track.id}Widget`));
      this.setState({widget});
      this.setListeners(widget);
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