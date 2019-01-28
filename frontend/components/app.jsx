import SplashContainer from './splash/splash_container';
import StreamContainer from './stream/stream_container';
import NavBarContainer from './main/nav_bar/nav_bar_container';
import UploadContainer from './main/tracks/upload_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import Main from './main/main';

const App = (props) => (
  <div id="app">
    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} /> 
      <ProtectedRoute path='/' component={Main} />
      
      {/* <ProtectedRoute exact path='/stream' component={StreamContainer} /> */}
    </Switch>
  </div>
)

export default App;