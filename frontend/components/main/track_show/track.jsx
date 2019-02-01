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
        <TrackShowHeaderContainer artist={this.props.artist} track={this.props.track} />
      </div>
    )
  }
}

export default Track;