import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signup, signin } from './actions';
import './login.css';

class LoginForm extends PureComponent {

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
    const { error } = this.state;
    const { buttonText, legendText } = this.props;

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <fieldset>
            
            <legend>{legendText}</legend>

            <label htmlFor="email">
            Email: <input name="email" required placeholder="name@gmail.com"/>
            </label>
          
            <label htmlFor="password">
            Password: <input name="password" required placeholder="abc123"/>
            </label>
          
            <div>
              <button>{buttonText}</button>
            </div>

            <p style={{ color: 'red' }}>
              {error && error.message}
            </p>

          </fieldset>
        </form>
      </div>
    );
  }
}

export const Signup = connect(
  () => ({ 
    buttonText: 'Create Account',
    legendText: 'Sign Up' 
  }),
  { onSubmit: signup }
)(LoginForm);

export const Signin = connect(
  () => ({ 
    buttonText: 'Log In',
    legendText: 'Sign In'
  }),
  { onSubmit: signin }
)(LoginForm);
