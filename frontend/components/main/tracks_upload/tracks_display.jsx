import React from 'react';
import TrackListItemContainer from './track_list_item_container';

class TracksDisplay extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let trackListItems = this.props.tracks.map((track, i) => {
      return <TrackListItemContainer key={i} track={track} username={this.props.username} />
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