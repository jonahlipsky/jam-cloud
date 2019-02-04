import * as COMMENT_API_UTIL from '../util/comment_app_util';

//action types
export const RECEIVE_TRACK_COMMENTS = "RECEIVE_TRACK_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

//action creators
const receiveTrackComments = comments => ({
  type: RECEIVE_TRACK_COMMENTS,
  comments
});

const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});


//thunk actions

export const createComment = (trackId, comment) => dispatch => {
  return COMMENT_API_UTIL.createComment(trackId, comment).then(
    comment => dispatch(receiveNewComment(comment)),
    errors => dispatch(receiveCommentErrors(errors))
  );
};

export const fetchTrackComments = (trackId) => dispatch => {
  return COMMENT_API_UTIL.fetchTrackComments(trackId).then(
    comments => dispatch(receiveTrackComments(comments)),
    errors => dispatch(receiveCommentErrors(errors))
  );
};
