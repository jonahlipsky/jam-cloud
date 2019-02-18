import React from 'react';
export default ({nFollowedUsers, nFollowers, nTracks}) => {
  return(
    <>
      <div className="user-follow-stats">
        <div className="user-stat">
          <p>Followers</p>
          <p>{nFollowers}</p>
        </div>
        <div className="user-stat">
          <p>Following</p>
          <p>{nFollowedUsers}</p>
        </div>
        <div className="user-stat">
          <p>Tracks</p>
          <p>{nTracks}</p>
        </div>
      </div>
    </>
  )
}

