import React from 'react';

class TrackShowHeader extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let artistName = this.props.artist.username;
    let title = this.props.track.title
    return(
      <div className="track-show-header">
        <div className="artist-title">
          <Link to="/users/:userId" >
            {artistName}
          </Link>
          <h2>{title}</h2>
        </div>
      </div>
    )
  }
}

export default TrackShowHeader;