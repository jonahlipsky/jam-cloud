import * as LIKE_API_UTIL from '../util/like_api_util';
export const RECEIVE_NEW_LIKE = "RECEIVE_NEW_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

const receiveNewLike = like => ({
  type: RECEIVE_NEW_LIKE,
  like
});

const receiveDeleteLike = like => ({
  type: DELETE_LIKE,
  like
});

export const fetchAllLikes = () => dispatch => {
  return LIKE_API_UTIL.fetchAllLikes().then(
    likes => dispatch(receiveAllLikes(likes)),
    errors => dispatch(receiveLikeErrors(errors))
  );
};

export const createLike = (likeableType, likeableId, sessionId) => dispatch => {
  return LIKE_API_UTIL.createLike(likeableType, likeableId, sessionId).then(
    like => dispatch(receiveNewLike(like)),
    errors => dispatch(receiveLikeErrors(errors))
  );
};

export const deleteLike = like => dispatch => {
  return LIKE_API_UTIL.deleteLike(like.id).then(
    () => dispatch(receiveDeleteLike(like)),
    errors => dispatch(receiveLikeErrors(errors))
  );
};