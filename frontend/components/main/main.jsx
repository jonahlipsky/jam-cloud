import React from 'react';
import NavBarContainer from '../main/nav_bar/nav_bar_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import ContinuousPlayBar from './continuous_play_bar/play_bar_container';
export default (props) => {
  return(
    <>
      <NavBarContainer />
      <Route exact path='/upload' component={UploadContainer} />
      <Route exact path='/you/tracks' component={UploadContainer} />
      <ContinuousPlayBar/>
    </>
  )
};