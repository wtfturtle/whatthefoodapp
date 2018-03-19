import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import Result from './Result';

class Results extends Component {

  render() {
    const { results } = this.props;

    return (
      <Fragment>
        <ul className="result-ul">
          {results.map(result => <Result key={result.id} {...result}/>)}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  null,
  null
)(Results);