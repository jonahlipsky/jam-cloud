import SplashContainer from './splash_container';
import StreamContainer from './stream/stream_container';

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
    <header>
      <h1>Header</h1>
    </header>
    <Switch>
      <ProtectedRoute exact path='/discover' component={StreamContainer} />
      <AuthRoute exact path='/' component={SplashContainer} />
      <ProtectedRoute exact path='/stream' component={StreamContainer} />
    </Switch>
  </div>
)

export default App;