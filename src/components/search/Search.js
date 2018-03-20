import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import Results from '../results/Results';
import { search } from '../../services/foursquareApi';
import { searchQuery } from './actions';
import { saveResults } from '../results/actions';

class Search extends Component {

  handleSearch = (query) => {
    this.props.searchQuery(query);
    search(query)
      .then(res => {
        this.props.saveResults(res.response.groups[0].items);
      }
      );
  };

  render() {

    const { results } = this.props;

    return (
      <div>
        <SearchForm onComplete={this.handleSearch}/>
        {results && <Results results={results}/>}
      </div>
    );
  }
}

export default connect (
  null,
  ({ searchQuery, saveResults })
)(Search);