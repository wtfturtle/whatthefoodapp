import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from './actions';
import GoogleAuth from '../auth/GoogleAuth';
import './login.css';

class Signup extends PureComponent {

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
      <div className="login-background">
        <section className="login-pad maxwidth-wrap">
          <div className="login-container">
            <Link to="/auth/signin">⬅ Back</Link>
            <h4>Create New Account</h4>

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

            <GoogleAuth/>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  () => ({ 
    buttonText: 'Create Account',
    legendText: 'Sign Up' 
  }),
  { onSubmit: signup }
)(Signup);
