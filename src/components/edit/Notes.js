import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { loadNote } from './actions';
import Note from './Note';
import './note.css';

class Notes extends Component {

  componentDidMount() {
    this.props.loadNote(this.props.id);
  }

  render() {
    const { id, noteResults } = this.props;
    if(!id) return null;

    return (
      <div>
        <h4>Add Comment</h4>
        <section>
          <NoteForm id={id}/>
        </section>
        
        {noteResults 
          ?
          <ul className='notes-ul'>
            {noteResults.map((note, index) => <Note id={id} key={index} note={note}/>)}
          </ul>
          :
          <p></p>
        }
      </div>
    );
  }
}


export default connect(
  state => ({ 
    results: state.results, 
    user: state.user,
    listResults: state.listLoad,
    noteResults: state.notes }),
  { loadNote }
)(Notes);
