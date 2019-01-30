import React from 'react';
import PlayBarControllerContainer from './play_bar_controller_container';
import QueueInformationContainer from './queue_information_container';


class PlayBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="continuous-play-bar-background">
        <div className="continuous-play-bar-main-frame">
          <PlayBarControllerContainer />
          <QueueInformationContainer />
        </div>
      </div>
    )
  }
}

export default PlayBar;