import SplashContainer from './splash/splash_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import Main from './main/main';
import ContinuousPlayBar from './main/continuous_play_bar/play_bar_container';

const App = (props) => (
  <div id="app">
    
    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} /> 
      <ProtectedRoute path='/' component={Main} />
    </Switch>
    <ContinuousPlayBar/>
  </div>
)

export default App;