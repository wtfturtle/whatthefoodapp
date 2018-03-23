import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <div>
              <h4 className="result-text">Results for {searchTerm}</h4>
              <p className="bread"><Link to="/">Home</Link> &nbsp;❯&nbsp; <Link to="/">{searchTerm}</Link></p>
              <ul className="result-ul">
                {results.map((result, index) => <Result key={index} {...result}/>)}
              </ul>
            </div>
            : <h2>Sorry, No Results for {searchTerm} </h2>
          )
        }

      </Fragment>
    );
  }
}

export default connect(

  state => ({ 
    loading: state.loading,
    searchTerm: state.searchTerm,
    results: state.results, 
    listResults: state.listLoad
  }),
  ({ loadList })
)(Results);