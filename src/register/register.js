import React from 'react';
import { Link } from 'react-router-dom'

class Register extends React.Component {
  render() {
    return (
            <div class="qz-register">
                <h1>Register</h1>
                <form>
                  <label>Name</label>
                  <input className="form-control"/>
                  <label>Lastname</label>
                  <input className="form-control"/>
                  <label>Username</label>
                  <input className="form-control"/>
                  <label>Email</label>
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

export default Register;
