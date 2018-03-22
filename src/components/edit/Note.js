import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNote } from './actions';
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
    const { text } = this.props;

    return (
      <li>
        {/* {editing ? 
          <div>
            <NoteForm id={id} note={note} onEdit={this.handleEdit}/> 
            <button onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <article>
            <p>
              {note}
              &nbsp;<button onClick={() => removeNote(id)}>X</button>
            </p>
            <time>{new Date(created).toLocaleDateString()}</time>
            <button onClick={this.handleToggleEdit}>✎</button>
          </article>
        }
        <p>{count} comment(s)</p> */}

        {text}
       
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