import React from 'react';
import TrackShowHeaderContainer from './track_show_header_container';

class Track extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchTracks();
    this.props.fetchUsers();
  }

  render(){
    return(
      <div className="track-show-page">
        <div>
          <h1>{this.props.title}</h1>
          <TrackShowHeaderContainer artist={this.props.artist} track={this.props.track} />
        </div>
      </div>
    )
  }
}

export default Track;