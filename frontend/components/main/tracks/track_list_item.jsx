import React from 'react';
import SoundPlay from '../sound/sound';

class TrackListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {sound: null}; 
    this.renderSound = this.renderSound.bind(this);
  }

  renderSound(e){
    this.setState({sound: <SoundPlay soundUrl={this.props.track.trackUrl} />})
  }

  render(){
    debugger
    let component;
    if(this.props.track){
      component = (<li key={this.props.track.id}>
        {this.state.sound}
        <img src={`${this.props.track.imageUrl}`} onClick={this.renderSound}/>
        <div className="title-author">
          <p className="current-username">{this.props.username}</p>
          <p>{this.props.track.title}</p>

        </div>
      </li>)
    } else {
      component = "";
    }

    return(
      <>
        {component}
      </>
    )
  }
}

export default TrackListItem