import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from '../actions/session_actions';
import { REMOVE_TRACK, RECEIVE_TRACK, RECEIVE_RECENT_TRACK } from '../actions/track_actions';
import { DELETE_LIKE, RECEIVE_NEW_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let userId;
  let user;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newUser = merge({}, { id: action.currentUser.id, email: action.currentUser.email, 
        username: action.currentUser.username, track_ids: action.currentUser.track_ids } );
      return merge({}, state, { [action.currentUser.id]: newUser });
    case RECEIVE_ALL_USERS:
      action.users.forEach((user) => {
        let newUser = user;
        newState = merge(newState, {[user.id]: newUser});
      });
      return newState;
    case RECEIVE_RECENT_TRACK:
      let recent = action.recentTrack;
      if(!newState[recent.user_id].recently_played_track_ids.includes(recent.track_id)){
        newState[recent.user_id].recently_played_track_ids.push(recent.track_id);
      }
      return newState;
    case RECEIVE_TRACK:
      userId = action.track.user_id;
      newState[userId].track_ids.push(action.track.id);
      return newState;
    case REMOVE_TRACK:
      userId = action.user_id;
      let trackPosition = newState[userId].track_ids.indexOf(action.id);
      newState[userId].track_ids.splice(trackPosition, 1);
    case RECEIVE_NEW_LIKE:
      userId = action.like.user_id;
      user = newState[userId];
      let likeableId = action.like.likeable_id;
      user.liked_object_ids.push(action.like.id);
      if(action.like.likeable_type === "Track"){
        user.liked_track_ids.push(likeableId);
      }
      else if (action.like.likeable_type === "Comment"){
        user.liked_comment_ids.push(likeableId);
      } else if (action.like.likeable_type === "User"){
        user.followed_user_ids.push(likeableId);
        let followedUser = newState[likeableId];
        followedUser.follower_ids.push(action.like.user_id);
        newState[likeableId] = followedUser;
      }
      newState[userId] = user;
      return newState;
    case DELETE_LIKE:
      user = newState[action.like.user_id];
      let liked_object_ids = user.liked_object_ids.filter(id => {
        return (id != action.like.id);
      });
      if(action.like.likeable_type === "User"){
        user.followed_user_ids = user.followed_user_ids.filter(id => {
          return (id != action.like.likeable_id);
        });
      } 
      else if(action.like.likeable_type === "Track"){
        user.liked_track_ids = user.liked_track_ids.filter(id => {
          return (id != action.like.likeable_id);
        });
      } 
      else if(action.like.likeable_type === "Comment"){
        user.liked_comment_ids = user.liked_comment_ids.filter(id => {
          return (id != action.like.likeable_id);
        });
      };
      user.liked_object_ids = liked_object_ids;
      newState[user.id] = user;
      return newState;
    default:
      return state;
  }
};