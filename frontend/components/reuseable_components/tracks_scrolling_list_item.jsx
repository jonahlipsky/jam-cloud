import React from 'react';

export default ({trackUserPair, handlePlayCB}) => {
  return(
    <li key={trackUserPair[0].id} onClick={handlePlayCB}>{`${trackUserPair[0].title} - ${trackUserPair[1].username}`}</li>
  )
}