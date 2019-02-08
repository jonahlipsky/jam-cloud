import * as COMMENT_API_UTIL from '../util/comment_api_util';

//action types
export const RECEIVE_TRACK_COMMENTS = "RECEIVE_TRACK_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";


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

const receiveRemoveComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS
});



//thunk actions

export const removeComment = comment => dispatch =>  {
  return COMMENT_API_UTIL.removeComment(comment.id).then( 
    () => dispatch(receiveRemoveComment(comment))
  );
};

export const createComment = (trackId, formData) => dispatch => {
  return COMMENT_API_UTIL.createComment(trackId, formData).then(
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
