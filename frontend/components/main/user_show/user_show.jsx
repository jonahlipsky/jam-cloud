import React from 'react';
import TrackWidget from '../../reuseable_components/widgets/track_widget';
import UserShowHeaderContainer from './user_show_header_container';
import UserShowBodyContainer from './user_show_body_container';

class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return(
      <div className="user-show-container main-content-area">
        <UserShowHeaderContainer />
        <UserShowBodyContainer />
        {/* <TrackWidget /> */}
      </div>
    )
  }
}

export default UserShow;