import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, removeNote } from './actions';
import NoteForm from './NoteForm';

class Note extends Component {

  state = {
    editing: false
  };

  handleEdit = note => {
    this.props.updateNote(note);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    // remember to use the injected prop for dispatch, 
    // not the imported action creator
    const { id, created, text, removeNote, count } = this.props;
    const { editing } = this.state;

    return (
      <li>
        {editing ? 
          <div>
            {/* <NoteForm id={id} text={text} onEdit={this.handleEdit}/>  */}
            <button onClick={this.handleToggleEdit}>cancel</button>
          </div>
          :
          <article>
            <p>
              {text}
              &nbsp;<button onClick={() => removeNote(id)}>X</button>
            </p>
            <time>{new Date(created).toLocaleDateString()}</time>
            <button onClick={this.handleToggleEdit}>✎</button>
          </article>
        }
        <p>{count} comment(s)</p>
       
      </li>
    );
  }
}

export default connect(
  ({ commentsByNote }) => ({ commentsByNote }),
  { updateNote, removeNote },
  ({ commentsByNote }, actions, ownProps) => ({
    ...actions,
    ...ownProps,
    count: commentsByNote[ownProps.id].length
  })
)(Note);