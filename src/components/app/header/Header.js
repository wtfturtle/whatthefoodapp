import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../app.css';
import Error from '../errorloading/Error';
import { listenForUser, logout } from '../auth/actions';

class Header extends Component {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() { 
    const { error, logout, user } = this.props;

    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <Link to="/" className="no-line"><h1 className="logo">What The Food</h1></Link>
          
          <div>
            <label htmlFor="check" name="checkbox"></label>
            <input id="check" className="checkbox" type="checkbox"/>

            <div id="burger"><span></span><span></span><span></span></div>
            <nav id="main-menu">
              <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                {user 
                  ? <li><Link to="/" onClick={logout}>Log Out</Link></li>
                  : <div>
                    <li><Link to="/auth/signin">Log In</Link></li>
                    <li><Link to="/auth/signup">Sign Up</Link></li>
                  </div>
                }
              </ul>
            </nav>
          </div>
          {error && <Error error={error}/>}
        </section> 
      </header>
    );
  }
}

export default connect(
  state => ({ error: state.error,
    user: state.user }),
  { listenForUser, logout }
)(Header);