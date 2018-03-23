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
    });
      
    this.setState({
      query: '',
    });

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
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
