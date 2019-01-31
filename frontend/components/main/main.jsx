import React from 'react';
import NavBarContainer from '../main/nav_bar/nav_bar_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import ContinuousPlayBar from './continuous_play_bar/play_bar_container';
import StreamContainer from '../stream/stream_container';
import UploadContainer from './tracks_upload/upload_container';
import TrackContainer from './track_show/track_container';
import SignOut from '../route_actions/sign_out';

export default (props) => {
  return(
    <>
      <NavBarContainer />
        <Switch>
          <Route exact path="/tracks/:trackId" component={TrackContainer}/>
          <Route exact path='/upload' component={UploadContainer} />
          <Route exact path='/you/tracks' component={UploadContainer} />
          <Route exact path='/stream' component={StreamContainer} />
          <Route exact path='/signout/currentuser/immediate' component={SignOut} />
        </Switch>
      <ContinuousPlayBar/>
    </>
  )
};