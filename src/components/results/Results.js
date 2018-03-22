import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import { loadList } from '../user/actions';
import Result from './Result';

class Results extends Component {

  render() {
    
    const { results } = this.props;

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
  state => ({ 
    results: state.results, 
    listResults: state.listLoad }),
  ({ loadList })
)(Results);