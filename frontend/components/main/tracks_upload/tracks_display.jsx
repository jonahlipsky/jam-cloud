import React from 'react';
import TrackListItemContainer from './track_list_item_container';

class TracksDisplay extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let trackListItems = this.props.tracks.map((track) => {
      return <TrackListItemContainer key={track.id} track={track} username={this.props.username} />
    });
    return(
      <>
        <ul className="tracks-display-ul">
          {trackListItems}
        </ul>
      </>
    )
  }
}

export default TracksDisplay;