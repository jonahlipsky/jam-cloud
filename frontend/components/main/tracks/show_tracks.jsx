import React from 'react';
import TracksDisplayContainer from './tracks_display_container';

export default (props) => {

  return(
  
    <div className="your-tracks-container">
      <h1 className="">Your Tracks</h1>
      <div className="show-tracks-container">
        <TracksDisplayContainer />
      </div>
    </div>
  )
};