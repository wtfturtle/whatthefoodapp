import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, loadNotes } from './actions';
import NoteForm from '../common/NoteForm';
import Note from './Note';

class Notes extends Component {
  
  componentDidMount() {
    const { user, loadNotes } = this.props;
    loadNotes(user);
  }

  render() {
    const { notes, addNote, user } = this.props;
    return (
      <div>
        <h4>Add Comment</h4>
        <section>
          <NoteForm onEdit={note => addNote(user, note)}/>
        </section>
        <ul>
          {notes.map(note => <Note key={note.id} {...note}/>)}
        </ul>
      </div>);
  }
}


export default connect(
  // map state to props
  (state, props) => ({ user: props.match.params.user }),
  // map dispatch to props
  { addNote, loadNotes }
)(Notes);
