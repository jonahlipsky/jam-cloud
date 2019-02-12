import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configuredStore from './store/store';
import * as session_actions from './actions/session_actions';
import { incrementStage } from './actions/modal_actions';
import { fetchTracks, postTrack, removeTrack, updateTrack, sendRecentTrack  } from './actions/track_actions';
import { fetchTrackComments, createComment} from './actions/comment_actions';

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

  window.dispatch = store.dispatch;
  window.sendRecentTrack = sendRecentTrack;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});