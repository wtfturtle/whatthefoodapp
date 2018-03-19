import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app/app.css';

class Home extends Component {

  render() {

    return (
      <section className="main-container maxwidth-wrap">

        Home

      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);