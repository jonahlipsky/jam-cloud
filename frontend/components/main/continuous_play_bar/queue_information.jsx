import React from 'react';

class QueueInformation extends React.Component{
  constructor(props){
    super(props);
  } 
  
  render(){
    let imageUrl = this.props.currentTrack.imageUrl;
    let trackArtist = this.props.trackArtist;
    let title = this.props.currentTrack.title;
    return(
      <div className="queue-information">
        <img src={imageUrl} />
        <div className="queue-info-author-title">
          <p className="track-artist">{`${trackArtist}`.toUpperCase()}</p>
          <p>{title}</p>
        </div>
      </div>
    )
  }
}

export default QueueInformation