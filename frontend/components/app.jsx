import SplashContainer from './splash/splash_container';
import StreamContainer from './stream/stream_container';
import NavBarContainer from './main/nav_bar/nav_bar_container';
import UploadContainer from './main/upload/upload_container';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';


const App = (props) => (
  <div>
    <Switch>
      <ProtectedRoute  path='/' component={NavBarContainer} />
      {/* <AuthRoute exact path='/' component={SplashContainer} /> */} 
      <ProtectedRoute exact path='/stream' component={StreamContainer} />
    </Switch>
  </div>
)

export default App;