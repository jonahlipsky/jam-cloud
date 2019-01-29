import React from 'react';
import PlayBarControllerContainer from './play_bar_controller_container';
import QueueInformation from './queue_information_container';


class PlayBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="continuous-play-bar-background">
        <div className="continuous-play-bar-main-frame">
          <PlayBarControllerContainer />
          <QueueInformation />
        </div>
      </div>
    )
  }
}

export default PlayBar;