import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import Welcome from './welcome/welcome';
import Login from './login/login';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Welcome</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  </header>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
      )
  }
}

export default App;
