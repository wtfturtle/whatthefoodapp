import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';

class NoteForm extends Component {
  
  state = {
    note: ''
  };
  

  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.props;
    const { note } = this.state;
    this.props.addNote(note, id);
    this.setState({ 
      note: '' 
    });
  };

  handleChange = ({ target }) => {
    this.setState({ note: target.value });
  };

  render() {
    const { id } = this.props;
    const { note } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input required name="note" value={note} onChange={this.handleChange}/>
        <button type="submit">{ id ? 'Add' : 'Update' }</button>
      </form>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { addNote }
)(NoteForm);