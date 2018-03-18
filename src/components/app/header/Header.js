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
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
            </ul>
          </nav>
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