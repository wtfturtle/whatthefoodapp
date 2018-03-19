import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import Result from './Result';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  render() {

    const { results } = this.state;
    console.log(results);

    return (
      <Fragment>
        {results ? 
          <ul className="result-ul">
            {results.map(result => <Result key={result.id} {...result}/>)}
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