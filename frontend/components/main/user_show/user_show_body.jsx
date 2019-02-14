import React, { Component } from 'react';
import TrackWidget from '../../reuseable_components/widgets/track_widget';

class UserShowBody extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let widgets = this.props.userTracks.map(track => {
      if(track.widget_identifier){
        return(
          <li>
            <TrackWidget track={track} />
          </li>
        )
      } else {
        return null
      }
    });
    return(
      <>
      <ul className='user-show-track-widgets'>
        {widgets}
      </ul>
      </>
    )
  }
}

export default UserShowBody;