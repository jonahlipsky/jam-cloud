import { connect } from 'react-redux';
import TracksDisplay from './tracks_display';

const mapStateToProps = state => {
  let curUserId = state.session.id;
  let curUserTrackIds = state.entities.users[curUserId].track_ids;
  let tracks = [];
  let username = state.entities.users[curUserId].username;
  curUserTrackIds.forEach((trackId) => {
    let track = state.entities.tracks[trackId];
    if(track) tracks.push(track);
  });
  return({
    tracks,
    username
  });
};


export default connect(mapStateToProps)(TracksDisplay);