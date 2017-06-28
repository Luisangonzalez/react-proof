import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
        <header>
          <h1>Login</h1>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/roster'>Roster</Link></li>
              <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Login;


// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/roster'>Roster</Link></li>
//         <li><Link to='/schedule'>Schedule</Link></li>
//       </ul>
//     </nav>
//   </header>
// )
