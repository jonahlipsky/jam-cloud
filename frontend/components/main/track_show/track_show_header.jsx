import React from 'react';
import { Link } from 'react-router';

class TrackShowHeader extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let artistName = this.props.artist;
    let title = this.props.title;
    let artistId = this.props.artist ? this.props.artist.id : 1;
    
    return(
      <div className="track-show-header">
        <div className="artist-title">
          <h2>{title}</h2>
        </div>
      </div>
    )
  }
}

export default TrackShowHeader;