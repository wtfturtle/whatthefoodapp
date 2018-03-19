import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../auth/login.css';
import { Signup } from '../auth/LoginForm';

export default class CreateLogin extends PureComponent {

  render() {

    return (
      <div className="login-background">
        <section className="login-pad maxwidth-wrap">
          <div className="login-container">
            <Link to="/login">⬅ Back</Link>
            <h4>Create New Account</h4>
            <Signup/>
          </div>
        </section>
      </div>
    );
  }
}