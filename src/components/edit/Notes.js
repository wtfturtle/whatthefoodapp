import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
// import Note from './Note';

class Notes extends Component {
  
  // componentDidMount() {
  //   const { user, loadNotes } = this.props;
  //   loadNotes(user);
  // }
  
  render() {
    const { id } = this.props;
    if(!id) return null;

    return (
      <div>
        <h4>Add Comment</h4>
        <section>
          <NoteForm id={id}/>
        </section>
        <ul>
          {/* {notes.map(note => <Note key={note.id} {...note}/>)} */}
        </ul>
      </div>);
  }
}


export default connect(
  state => ({ 
    results: state.results, 
    user: state.user,
    listResults: state.listLoad }),
  null
)(Notes);
