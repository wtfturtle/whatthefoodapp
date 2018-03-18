import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../auth/login.css';
import GoogleAuth from '../auth/GoogleAuth';
import { Signin } from '../auth/LoginForm';

export default class Login extends PureComponent {

  render() {

    return (
      <div>
        <div className="login-container">
          <h3>Please Sign In</h3>
          <Signin/>
          <Link to="/auth/signup">Create New Account</Link>
          <GoogleAuth/>
        </div>
      </div>
    );
  }
}