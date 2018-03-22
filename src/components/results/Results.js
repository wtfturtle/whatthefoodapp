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

        {/* {venueLoad ? 
          <ul className="result-ul">
            {venueLoad.map((result, index) => <Result key={index} {...result}/>)}
          </ul>
          : null
        } */}

      </Fragment>
    );
  }
}

export default connect(
  state => ({ 
    searchTerm: state.searchTerm,
    results: state.results, 
    listResults: state.listLoad,
    venueLoad: state.venueLoad }),
  ({ loadList })
)(Results);