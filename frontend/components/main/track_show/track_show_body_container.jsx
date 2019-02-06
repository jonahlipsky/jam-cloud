import { connect } from 'react-redux';
import TrackShowBody from './track_show_body';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  // let currentTrackId = ownProps.match.params.trackId;
  // let currentTrack = state.entities.tracks[currentTrackId];
  let currentUserId = state.session.id;
  let currentUserProfilePicture = state.entities.users[currentUserId] ? state.entities.users[currentUserId].profilePicture : "";
  // let parentComments = [];
  // let childComments = [];
  let trackComments = state.entities.comments;

  // if(currentTrack){
  //   currentTrack.comment_ids.forEach(commentId => {
  //     debugger
  //     let comment = state.entities.comments[commentId];
  //     if(!comment.parent_comment_id){
  //       parentComments.push(comment);
  //     } else {
  //       childComments.push(comment);
  //     }
  //   });
  // }

  return ({
    currentUserProfilePicture,
    trackComments
  });
};

export default withRouter(connect(mapStateToProps)(TrackShowBody));