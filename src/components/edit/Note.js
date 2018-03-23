import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNote } from './actions';
import './note.css';
// import { updateNote, removeNote } from './actions';
// import NoteForm from './NoteForm';

class Note extends Component {

  // state = {
  //   editing: false
  // };

  // handleEdit = note => {
  //   this.props.updateNote(note);
  //   this.setState({ editing: false });
  // };

  // handleToggleEdit = () => {
  //   this.setState(prev => ({
  //     editing: !prev.editing
  //   }));
  // };

  render() {
    // remember to use the injected prop for dispatch, 
    // not the imported action creator
    // const { id, created, note, removeNote, count } = this.props;
    // const { editing } = this.state;
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
  // ({ commentsByNote }) => ({ commentsByNote }),
  // { updateNote, removeNote },
  // ({ commentsByNote }, actions, ownProps) => ({
  //   ...actions,
  //   ...ownProps,
  //   count: commentsByNote[ownProps.id].length
  // })
)(Note);