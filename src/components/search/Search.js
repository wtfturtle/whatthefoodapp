import React, { Component } from 'react';
import { search } from '../../services/foursquareApi';
import SearchForm from './SearchForm';
import Results from '../results/Results';

export default class Search extends Component {

  render() {
    return (
      <div>
        <SearchForm/>
        <Results/>
      </div>
    )
  }
}
