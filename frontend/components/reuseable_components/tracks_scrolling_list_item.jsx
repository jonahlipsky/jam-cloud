import React from 'react';

export default ({trackArtistPair, handlePlayCB}) => {
  return(
    <li key={trackArtistPair[0].id} onClick={handlePlayCB}>{`${trackArtistPair[0].title} - ${trackArtistPair[1].username}`}</li>
  )
}