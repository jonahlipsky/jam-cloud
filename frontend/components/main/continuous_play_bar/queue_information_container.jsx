import { connect } from 'react-redux';
import QueueInformation from './queue_information';

const mapStateToProps = state => {
  let trackArtist;
  let currentTrackId;
  let currentTrack;
  if(state.io.trackQueue.queue[0]){
    currentTrackId = state.io.trackQueue.queue[0]; //change this!
    currentTrack = state.entities.tracks[currentTrackId];
    trackArtist = state.entities.users[currentTrack.user_id].username;
  } else {
    currentTrack = "None";
    trackArtist = "None";
  }
  return({
    currentTrack,
    trackArtist
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(QueueInformation);