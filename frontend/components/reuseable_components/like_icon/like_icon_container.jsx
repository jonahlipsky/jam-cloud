import { connect } from 'react-redux';
import LikeIcon from './like_icon';
import { createLike, deleteLike } from '../../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {

  let sessionUserId = state.session.id;
  let user = state.entities.users[sessionUserId];
  let likedObjects = user.liked_objects;
  let likedObjectIds = {};
  if(user){
    likedObjectIds.comments = user.liked_comment_ids;
    likedObjectIds.tracks = user.liked_track_ids;
    likedObjectIds.users = user.followed_user_ids;
  }

  return({
    likedObjectIds,
    likedObjects,
    sessionUserId
  });
};

const mapDispatchToProps = dispatch => ({
  createLike: (likeableType, likeableId) => dispatch(createLike(likeableType, likeableId)),
  deleteLike: like => dispatch(deleteLike(like))
});


export default connect(mapStateToProps, mapDispatchToProps)(LikeIcon);