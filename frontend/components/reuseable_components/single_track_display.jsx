import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  // REFACTOR THIS IN TERMS OF A TUPLE TRACK ARTIST PAIR
  // E.G. [trackOBJECT, artistObject]

  let track = props.trackArtistPair[0];
  let artist = props.trackArtistPair[1];

  // let track = props.track;
  // let artist = props.artist;
  
  let imageUrl = track ? track.imageUrl : '';
  let title = track ? track.title : '';
  let artistName = artist ? artist.username : '';
  let trackId = track ? track.id : 1;
  let userId = artist ? artist.id : 1;

  return(
    <div className="single-track-display">
      <img src={imageUrl} />
      <div className="playButton"></div>
      <div className="single-track-artist-title">
        <Link className="title" to={`/tracks/${trackId}`}>{title}</Link>
        <Link className="artist-name" to={`/users/${userId}`}>{artistName}</Link>
      </div>
    </div>
  )
}