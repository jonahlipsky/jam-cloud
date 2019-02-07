import { connect } from 'react-redux';
import TrackShowBody from './track_show_body';
import { withRouter } from 'react-router';
import { createComment } from '../../../actions/comment_actions';
import { fetchTrack } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  let currentTrackId = ownProps.match.params.trackId;
  let currentTrack = state.entities.tracks[currentTrackId];
  let currentUserId = state.session.id;
  let currentUserProfilePicture = state.entities.users[currentUserId] ? state.entities.users[currentUserId].profilePicture : "";
  let parentComments = [];
  let comments = state.entities.comments;
  if(Object.keys(comments).length && currentTrack && currentTrack.comment_ids.length){
    currentTrack.comment_ids.forEach((commentId) => {
      let comment = comments[commentId];
      if(!comment.parent_comment_id){
        parentComments.push(comment);
      }
    });
  }

  let sessionId = state.session.id;

  return ({
    currentUserProfilePicture,
    comments,
    parentComments,
    sessionId
  });
};

const mapDispatchToProps = dispatch => ({
  createComment: (trackId, data) => dispatch(createComment(trackId, data)),
  fetchTrack: trackId => dispatch(fetchTrack(trackId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShowBody));