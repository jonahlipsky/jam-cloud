import { connect } from 'react-redux';
import TrackShowBody from './track_show_body';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let currentTrackId = ownProps.match.params.trackId;
  let currentTrack = state.entities.tracks[currentTrackId];
  let currentUserId = state.session.id;
  let currentUserProfilePicture = state.entities.users[currentUserId] ? state.entities.users[currentUserId].profilePicture : "";
  let parentComments = [];
  let comments = state.entities.comments;
  if(Object.keys(comments).length && currentTrack && currentTrack.comment_ids.length){
    currentTrack.comment_ids.forEach((commentId) => {
      let comment = comments[commentId]
      if(!comment.parent_comment_id){
        parentComments.push(comment)
      }
    });
  }

  return ({
    currentUserProfilePicture,
    comments,
    parentComments
  });
};

export default withRouter(connect(mapStateToProps)(TrackShowBody));