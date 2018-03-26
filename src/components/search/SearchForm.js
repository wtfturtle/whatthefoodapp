import React, { Component } from 'react';
import './search.css';

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    query: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      ...this.state
    })
    // async, wait to complete...
      .then(() => this.setState({ query: '' }));

  };

  handleChange = ({ target }) => {
    // you only have one input...
    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <fieldset>
          
          <legend className="inputs"></legend>

          <label htmlFor="query">
            <div className="search-flex">
              
              <input id="search-input" name="query" value={query} onChange={this.handleChange} placeholder="Search restaurants"/>
            
              <button type="submit">Search</button>
              
            </div>
          </label>

        </fieldset>

      </form>
    );
  }
}
