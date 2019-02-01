import { connect } from 'react-redux';
import Discover from './discover';

const mapStateToProps = state => {
  let track = state.entities.tracks[1] ? state.entities.tracks[1] : null;
  let user;
  if(track && track.id){
    user = state.entities.users[track.id] || null;
  }

  let trackArtistPair = user && track ? [track, user] : null;

  return({
    trackArtistPair
  });
};


export default connect(null)(Discover); 