import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import Results from '../results/Results';
import { saveQuery } from './actions';
import { saveResults } from '../results/actions';

class Search extends Component {

  handleSearch = (query) => {
    this.props.saveQuery(query);
  };

  render() {

    const { results } = this.props;

    return (
      <div>
        <SearchForm onComplete={this.handleSearch}/>
        <Results/>
      </div>
    );
  }
}

export default connect (
  null,
  ({ saveQuery })
)(Search);