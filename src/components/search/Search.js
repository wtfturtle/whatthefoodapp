import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Results from '../results/Results';
import { search } from '../../services/foursquareApi';

export default class Search extends Component {

  handleSearch(query){
    search(query).then(
      response => {
        console.log(response);
      }
    );
  }

  render() {
    return (
      <div>
        <SearchForm onComplete={this.handleSearch}/>
        {/* <Results/> */}
      </div>
    )
  }
}
