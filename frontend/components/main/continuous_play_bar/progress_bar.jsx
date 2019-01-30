import React from 'react';

class ProgressBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const progressStyle = {
      width: `${this.props.percentageComplete}%`
    };

    const timeLeft = {
      wdith: `${100 - this.props.percentageComplete}%`
    };

    return(
      <div className="progress-bar-container">
        <p className="current-track-time">{this.props.currentTime}</p>
        <div className="progress-bar">
          <div className="track-progress" style={progressStyle}></div>
          <div className="time-left" style={timeLeft}></div>
        </div>
        <p className="duration">{this.props.duration}</p>
      </div>
    )
  }
}

export default ProgressBar;