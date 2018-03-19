import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Results from '../results/Results';
import { search } from '../../services/foursquareApi';

export default class Search extends Component {

  handleSearch = (query) => {
    search(query)
      .then(res => {
        this.setState({ results: res.response.groups[0].items });
      }
      );
  };

  render() {

    const { results } = this.props;

    return (
      <div>
        <SearchForm onComplete={this.handleSearch}/>
        <Results results={results}/>
      </div>
    );
  }
}
