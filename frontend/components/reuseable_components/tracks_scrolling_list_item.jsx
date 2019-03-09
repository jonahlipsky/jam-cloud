import React from 'react';
import LikeIconContainer from '../../components/reuseable_components/like_icon/like_icon_container';

export default ({trackArtistPair, handlePlayCB}) => {
  return(
    <li key={trackArtistPair[0].id} onClick={handlePlayCB}>{`${trackArtistPair[0].title} - ${trackArtistPair[1].username}`}
      <LikeIconContainer element={trackArtistPair[0]} type={"Track"}/>
    </li>
  )
}