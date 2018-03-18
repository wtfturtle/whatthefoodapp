import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../auth/login.css';
import GoogleAuth from '../auth/GoogleAuth';
import { Signin } from '../auth/Login';

export default class Login extends PureComponent {

  render() {

    return (
      <div>
        <h3>Please Sign In</h3>
        <div className="login-container">
          <Signin/>
          <Link to="/auth/signup">Create New Account</Link>
        </div>
        {/* <p>
          <Link to="/auth/signin">Sign In</Link> &nbsp;&nbsp;
          <Link to="/auth/signup">Sign Up</Link>
        </p> */}
        <GoogleAuth/>
      </div>
    );
  }
}