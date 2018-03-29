import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../app.css';
import Error from '../errorloading/Error';
import { logout } from '../auth/actions';

class Header extends Component {

  state = {
    menu: false
  };

  handleClick = () => {
    this.setState(prev => {
      return { menu: !prev.menu };
    });
    
  };

  handleLogout = () => {
    this.props.logout()
      .then(() => {
        this.setState(prev => {
          return { menu: !prev.menu };
        });
      });
  };

  render() { 
    const { error, user } = this.props;
    const { menu } = this.state;

    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <Link to="/" className="no-line"><h1 className="logo">What The Food</h1></Link>
          
          <div>
            <label htmlFor="check" name="checkbox"></label>
            <input id="check" className="checkbox" type="checkbox" onClick={this.handleClick} checked={menu}/>

            <div id="burger"><span></span><span></span><span></span></div>
            
            <nav id="main-menu">
              <Link to="/" className="no-line"><h1 className="mobile-logo">What The Food</h1></Link>
              <ul className="nav-ul">
                <li><Link to="/" onClick={this.handleClick}>Search</Link></li>
                {user 
                  ? <div className="flex-li">
                    <li><Link to="/user" onClick={this.handleClick}>{user && <span>Hello, {user.name}</span>}</Link></li>
                    <li className="flex-li-child"><Link to="/" onClick={this.handleLogout}>Log Out</Link></li>
                  </div>
                  : <div className="flex-li">
                    <li className="flex-li-child"><Link to="/auth/signin" onClick={this.handleClick}>Log In</Link></li>
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
  { logout }
)(Header);