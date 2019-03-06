import React from 'react';
import NavBarContainer from '../main/nav_bar/nav_bar_container';
import { Route, Switch } from 'react-router-dom';
import UploadContainer from './tracks_upload/upload_container';
import TrackContainer from './track_show/track_container';
import SignOut from '../route_actions/sign_out';
import DiscoverContainer from './discover/discover_container';
import UserShowContainer from './user_show/user_show_container';

export default (props) => {
  return(
    <>
      <NavBarContainer />
        <Switch>
          <Route exact path="/tracks/:trackId" component={TrackContainer}/>
          <Route exact path='/upload' component={UploadContainer} />
          <Route exact path='/you/tracks' component={UploadContainer} />
          <Route exact path='/discover' component={DiscoverContainer} />
          <Route exact path='/users/:userId' component={UserShowContainer} />
          <Route exact path='/signout/currentuser/immediate' component={SignOut} />
        </Switch>
    </>
  )
};