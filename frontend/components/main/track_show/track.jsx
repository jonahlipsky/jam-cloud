import React from 'react';
import TrackShowHeader from './track_show_header';

class Track extends React.component {
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div className="track-show-page">
        <TrackShowHeader />
      </div>
    )
  }
}

export default Track;