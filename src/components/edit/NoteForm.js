import React, { Component } from 'react';

export default class NoteForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      note: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    })
      .then(() => {
        this.setState({ note: '' });
      });    
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, note } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input required name="note" value={note} onChange={this.handleChange}/>
        <button type="submit">{ id ? 'Update' : 'Add' }</button>
      </form>
    );
  }
}
