import React from 'react';
export default ({nRecentlyPlayedTracks, lastWeekListens, lastDayListens}) => {
  let play = nRecentlyPlayedTracks === 1 ? "play" : "plays";
  return(
    <>
      <div className="discover-listen-stats">
        <div className="discover-stats-title">
          Stats
        </div>
        <div className="last-day-and-week">
          <div className="listen-stat">
            <p>Plays last 24 hours</p>
            <h2>{lastDayListens}</h2>
          </div>
          <div className="listen-stat">
            <p>Plays last 7 days</p>
            <h2>{lastWeekListens}</h2>
          </div>
        </div>
        <p>{nRecentlyPlayedTracks} {play} in total</p>
      </div>
    </>
  )
}

