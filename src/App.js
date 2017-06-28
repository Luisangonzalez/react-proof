import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import Welcome from './welcome/welcome';
import Login from './login/login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
