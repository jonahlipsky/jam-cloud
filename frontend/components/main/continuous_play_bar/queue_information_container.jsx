import { connect } from 'react-redux';
import QueueInformation from './queue_information';
import { fetchUsers } from '../../../actions/session_actions';

const mapStateToProps = state => {
  let trackArtist;
  let currentTrackId;
  let currentTrack;
  if(state.io.trackQueue.queue[0]){
    currentTrackId = state.io.trackQueue.queue[0];
    currentTrack = state.entities.tracks[currentTrackId];
    trackArtist = (currentTrack && state.entities.users[currentTrack.user_id]) ? state.entities.users[currentTrack.user_id].username : "";
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
  fetchUsers: () => dispatch(fetchUsers())

});

export default connect(mapStateToProps, mapDispatchToProps)(QueueInformation);