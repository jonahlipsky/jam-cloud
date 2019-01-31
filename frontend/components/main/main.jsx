import React from 'react';
import NavBarContainer from '../main/nav_bar/nav_bar_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import ContinuousPlayBar from './continuous_play_bar/play_bar_container';
import StreamContainer from '../stream/stream_container';
import UploadContainer from './tracks_upload/upload_container';

export default (props) => {
  return(
    <>
      <NavBarContainer />
        <Switch>
          <Route exact path='/upload' component={UploadContainer} />
          <Route exact path='/you/tracks' component={UploadContainer} />
          <Route exact path='/stream' component={StreamContainer} />
          <Route path = "tracks/:trackId" component={TrackShow}/>
        </Switch>
      <ContinuousPlayBar/>
    </>
  )
};