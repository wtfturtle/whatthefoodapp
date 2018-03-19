import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import Error from '../errorloading/Error';

class Header extends Component {

  render() { 
    const { error } = this.props;

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
                <li><Link to="/login">Log In</Link></li>
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
  state => ({ error: state.error }),
  null
)(Header);