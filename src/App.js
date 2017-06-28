import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';

import Home from './home/home';
import Login from './login/login';
import Register from './register/register';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Switch>
  </main>
)

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className="navigation">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
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
