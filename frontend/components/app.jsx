import SplashContainer from './splash/splash_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Main from './main/main';
import ContinuousPlayBar from './main/continuous_play_bar/play_bar';

const App = (props) => (
  <div id="app">
    <MediaQuery query="(max-device-width: 1224px)">
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query="(min-device-width: 1225px)">  
      <Switch>
        <AuthRoute exact path='/' component={SplashContainer} /> 
        <ProtectedRoute path='/' component={Main} />
      </Switch>
      <ContinuousPlayBar/>
    </MediaQuery>
  </div>
)

export default App;