import React from 'react';
import TrackWidget from '../../reuseable_components/widgets/track_widget';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return(
      <div className="user-show-container main-content-area">
        <TrackWidget />
      </div>
    )
  }
}

export default UserShow;