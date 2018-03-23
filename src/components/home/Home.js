import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './home.css';
import Search from '../search/Search';
import Results from '../results/Results';
import Random from '../random/Random';

class Home extends Component {

  render() {

    return (
      <Fragment>  

        <div className="search-image">
          <div className="search-padding">
            <div className="search-container">
              <Search/>
              <Random/>
            </div>
          </div>
        </div>

        <section className="main-container maxwidth-wrap">
          <div className="body-padding">

          
            <Results/>
        
          </div>
        </section>
      </Fragment>
    );
  }
}

export default connect(
  null,
  null
)(Home);