import React, { Component } from 'react';

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
      .then(() => {
        this.setState({
          query: '',
        });
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
          
          <legend className="inputs">Find Food</legend>

          <label htmlFor="query">
            <input name="query" value={query} onChange={this.handleChange} placeholder="Search restaurants"/>
          </label>

        </fieldset>

        <button type="submit">Search</button>
      </form>
    );
  }
}
