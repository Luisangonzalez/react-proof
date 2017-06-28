import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div class="qz-register">
          <h1>Login</h1>
          <form>
            <label>User/Password</label>
            <input className="form-control"/>
            <label>Password</label>
            <input className="form-control"/>
            <button type="submit">Register</button>
          </form>
          <p> value</p>
          <p> status</p>
          <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Login;
