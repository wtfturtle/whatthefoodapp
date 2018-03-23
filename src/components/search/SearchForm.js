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
        <fieldset className="search-box">
          
          <legend className="inputs"></legend>

          <label htmlFor="query">
            <input name="query" value={query} onChange={this.handleChange} placeholder="Search restaurants"/>
          </label>

        </fieldset>

        <button className="submit-button" type="submit">Search</button>
      </form>
    );
  }
}
