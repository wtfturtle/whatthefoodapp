import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { loadNote } from './actions';
import Note from './Note';

class Notes extends Component {
  
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
          <ul>
            {noteResults.map((note, index) => <Note key={index} text={note}/>)}
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
