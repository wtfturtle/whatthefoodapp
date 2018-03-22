import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../app/app.css';
import Search from '../search/Search';
import Results from '../results/Results';
import Random from '../random/Random';

class Home extends Component {

  render() {

    return (
      <section className="main-container maxwidth-wrap">
        <div className="body-padding">
          <Search/>
          <Random/>
          <Results/>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(Home);