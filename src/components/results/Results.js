import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import { loadList } from '../user/actions';
import Result from './Result';

class Results extends Component {

  render() {
    
    const { results, searchTerm } = this.props;

    return (
      <Fragment>
        {searchTerm &&
          (results[0] ? 
            <ul className="result-ul">
              {results.map((result, index) => <Result key={index} {...result}/>)}
            </ul>
            : <h2>Sorry, No Results for {searchTerm} </h2>
          )
        }
      </Fragment>
    );
  }
}

export default connect(
  state => ({ 
    searchTerm: state.searchTerm,
    results: state.results, 
    listResults: state.listLoad }),
  ({ loadList })
)(Results);