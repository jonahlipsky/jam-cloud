import React from 'react';

class ProgressBar extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let playBarMainFrame = $(".continuous-play-bar-main-frame")[0];
    let percentage = ((e.clientX - (playBarMainFrame.offsetLeft + 
      e.currentTarget.offsetLeft)) * 100) / e.currentTarget.offsetWidth;
    if(percentage > 100){
      console.log(`e.clientX: ${e.clientX}, playBarMainFrame.offsetLeft: ${playBarMainFrame.offsetLeft}
      e.currentTarget.offsetLeft: ${e.currentTarget.offsetLeft} e.currentTarget.offsetWidth: ${e.currentTarget.offsetWidth}`)
    }
    this.props.sendCurrentPercentage(percentage);
  }

  render(){

    
    return(
      <div className="progress-bar-container" >
        <p className="current-track-time">{this.props.currentTime}</p>
        <div className="progress-bar" onClick={this.handleClick}>
          <div id="track-progress" className="track-progress" ></div>
          <i id="track-progress-circle" className="fas fa-circle"></i>
          <div className="time-left"></div>
        </div>
        <p className="duration">{this.props.duration}</p>
      </div>
    )
  }
}

export default ProgressBar;