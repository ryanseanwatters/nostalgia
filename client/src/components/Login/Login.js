import { NavLink } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <div className="Login">  
      <div className="Login-tagline">
        the nostalgia of spotify wrapped but for everything else in your life
      </div>
      <NavLink to="/today" className="Login-google-sign-in">
        sign in with google
      </NavLink> 
    </div>
  );
}

export default Login;
