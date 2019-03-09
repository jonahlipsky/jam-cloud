import { connect } from 'react-redux';
import LikeIcon from './like_icon';
import { createLike, deleteLike } from '../../../actions/like_actions';

const mapStateToProps = (state) => {
  let sessionUserId = state.session.id;
  let likedObjects = [];
  let likedObjectIds = {};
  if(sessionUserId){
    let user = state.entities.users[sessionUserId];
    let likeIds = user.liked_object_ids;
    likeIds.forEach(id => {
      state.entities.likes[id] ? likedObjects.push(state.entities.likes[id]) : null;
    }); 
  
    if(user){
      likedObjectIds.comments = user.liked_comment_ids;
      likedObjectIds.tracks = user.liked_track_ids;
      likedObjectIds.users = user.followed_user_ids;
    }
  }

  debugger
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