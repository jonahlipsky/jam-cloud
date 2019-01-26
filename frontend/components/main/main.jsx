import React from 'react';
import NavBarContainer from '../main/nav_bar/nav_bar_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';

export default (props) => {
  return(
    <>
      <Route exact path='/upload' component={UploadContainer} />
      <Route exact path='/you/tracks' component={UploadContainer} />
    </>
  )
};