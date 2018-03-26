import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNote } from './actions';
import './note.css';

class Note extends Component {

  render() {
    const { note } = this.props;

    return (
      <li className="notes-li">
        <p>{note.note}</p>
        <time>Added on: {note.date}</time>
      </li>
    );
  }
}

export default connect(
  state => ({
    noteResults: state.notes 
  }),
  { loadNote }
)(Note);