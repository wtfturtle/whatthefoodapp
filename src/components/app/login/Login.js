import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../auth/login.css';
import GoogleAuth from '../auth/GoogleAuth';
import { Signin } from '../auth/LoginForm';

export default class Login extends PureComponent {

  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    const { history, location } = this.props;

    const credentials = {
      email: elements.email.value,
      password: elements.password.value
    };

    const { from } = location.state || { from: { pathname: '/' } };
    
    this.props.onSubmit(credentials)
      .then(() => {
        setTimeout(() => {
          history.push(from);
        }, 100);
      })
      .catch(error => this.setState({ error }));
  };

  render() {

    return (
      <div className="login-background">
        <section className="login-pad maxwidth-wrap">
          <div className="login-container">
            <h4>Please Sign In</h4>
            <Signin onSubmit={this.handleSubmit}/>
            <Link to="/signup">Create New Account</Link>
            <GoogleAuth/>
          </div>
        </section>
      </div>
    );
  }
}