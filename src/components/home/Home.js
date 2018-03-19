import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {

  render() { 
    return (
      <section className="main-container maxwidth-wrap">
        Search Button<br/>
        Random Button

      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);