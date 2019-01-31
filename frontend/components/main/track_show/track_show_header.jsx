import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../tracks_upload/upload_image';

class TrackShowHeader extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    let artistName = this.props.artist ? this.props.artist.username : "";
    let title = this.props.track ? this.props.track.title : "";
    let artistId = this.props.artist ? this.props.artist.id : 1;
    let updateTime = this.props.updateTime || "";
    return(
      <div className="track-show-header">
        <div className="info-and-play-bar">
          <div className="track-info">
            <div className="artist-title">
              <Link to={`/users/${artistId}`}>{artistName}</Link>
              <h3>{title}</h3>
            </div>
            <div className="update-info">
              {updateTime}
              6 days ago placeholder
            </div>
          </div>
        </div>
        <UploadImage mainContext={this} />
      </div>
    )
  }
}

export default TrackShowHeader;