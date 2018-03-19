import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app/app.css';
import Search from '../search/Search';

class Home extends Component {

  render() {

    return (
      <section className="main-container maxwidth-wrap">
        Home
        <Search/>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);