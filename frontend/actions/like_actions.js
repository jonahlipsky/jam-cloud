import * as LIKE_API_UTIL from '../util/like_api_util';

export const RECEIVE_NEW_LIKE = "RECEIVE_NEW_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

const receiveNewLike = like => ({
  type: RECEIVE_NEW_LIKE,
  like
});

const receiveDeleteLike = like => ({
  type: DELETE_LIKE,
  like
});

export const createLike = (likeableType, likeableId) => dispatch => {
  return LIKE_API_UTIL.createLike(likeableType, likeableId).then(
    like => dispatch(receiveNewLike(like))
  );
};

export const deleteLike = like => dispatch => {
  return LIKE_API_UTIL.deleteLike(like.id).then(
    () => dispatch(receiveDeleteLike(like))
  );
};