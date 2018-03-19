import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../auth/login.css';
import GoogleAuth from '../auth/GoogleAuth';
import { Signin } from '../auth/LoginForm';

export default class Login extends PureComponent {

  render() {

    return (
      <div className="login-background">
        <section className="login-pad maxwidth-wrap">
          <div className="login-container">
            <h4>Please Sign In</h4>
            <Signin/>
            <Link to="/signup">Create New Account</Link>
            <GoogleAuth/>
          </div>
        </section>
      </div>
    );
  }
}