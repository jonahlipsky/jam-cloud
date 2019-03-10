import React from 'react';
import TrackShowHeaderContainer from './track_show_header_container';
import TrackShowBodyContainer from './track_show_body_container';


class Track extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTrackComments(this.props.track.id);
  }

  componentWillUnmount(){
    this.props.clearComments();
  }
  
  render(){
    return(
      <div className="track-show-page">
        <TrackShowHeaderContainer artist={this.props.artist} track={this.props.track} />
        <TrackShowBodyContainer artist={this.props.artist} track={this.props.track} />
      </div>
    )
  }
}

export default Track;