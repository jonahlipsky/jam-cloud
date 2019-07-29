import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_SEARCH_RESULTS:
      let users = merge({}, state.users);
      let tracks = merge({}, state.tracks);
      action.data.users.forEach(user => {
        users = merge(users, {[user.id]: user});
      });
      action.data.tracks.forEach(track => {
        tracks = merge(tracks, {[tracks.id]: track});
      });
      newState.users = users;
      newState.tracks = tracks;
      return newState;
    default:
      return({users: {}, tracks: {}});
  }
};