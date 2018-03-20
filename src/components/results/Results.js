import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import Result from './Result';

class Results extends Component {

  render() {

    const { results } = this.props;
    console.log(results);

    return (
      <Fragment>
        {results ? 
          <ul className="result-ul">
            {results.map((result, index) => <Result key={index} {...result}/>)}
          </ul>
          : null
        }
      </Fragment>
    );
  }
}

export default connect(
  ({ results }) => ({ results }),
  null
)(Results);