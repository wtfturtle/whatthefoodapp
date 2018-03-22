import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './result.css';
import { loadList, venueLoad } from '../user/actions';
import Result from './Result';

class Results extends Component {

  render() {
    
    const { results, venueLoad } = this.props;

    return (
      <Fragment>

        {results ? 
          <ul className="result-ul">
            {results.map((result, index) => <Result key={index} {...result}/>)}
          </ul>
          : null
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
    results: state.results, 
    listResults: state.listLoad,
    venueLoad: state.venueLoad }),
  ({ loadList })
)(Results);