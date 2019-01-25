import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configuredStore from './store/store';
import * as session_actions from './actions/session_actions';
import { incrementStage } from './actions/modal_actions';
import { fetchTracks, postTrack, removeTrack  } from './actions/track_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: currentUser }
      }
    };
    store = configuredStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configuredStore();
  }
  window.signin = session_actions.signin;
  window.signout = session_actions.signout;
  window.signup = session_actions.signup;
  window.fetchAllUsers = session_actions.fetchAllUsers;
  window.sendStageErrors = session_actions.sendStageErrors;
  window.dispatch = store.dispatch;
  window.incrementStage = incrementStage;
  window.fetchTracks = fetchTracks;
  window.postTrack = postTrack;
  window.removeTrack = removeTrack;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});