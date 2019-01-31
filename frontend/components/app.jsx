import SplashContainer from './splash/splash_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import Main from './main/main';

const App = (props) => (
  <div id="app">
    
    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} /> 
      <ProtectedRoute path='/' component={Main} />
    </Switch>
  </div>
)

export default App;