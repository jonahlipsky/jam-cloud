import React from 'react';
import TrackListItem from './track_list_item';

class TracksDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracks();
  }

  render(){
    let trackListItems = this.props.tracks.map((track) => {
      // debugger

      return <TrackListItem track={track} username={this.props.username} />
    });
    return(
      <ul className="tracks-display-ul">
        {trackListItems}
      </ul>
    )
  }
}

export default TracksDisplay;