import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVenue } from '../results/actions';

class Add extends Component {

  handleAdd = (listId, venueId, name) => {
    this.props.addVenue(listId, venueId, name);
    this.setState({ clicked: false });
  };

  render() {

    const { id } = this.props.venue;
    const { lists } = this.props;

    return (
      <div>
        <button onClick={this.handleUnclick}>X</button>
        <ul>
          {lists.map((list, index) => (
            <li key={index}>
              <button onClick={() => this.handleAdd(list.key, id, name)}>{list.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    results: state.results,
    lists: state.listLoad,
    venueLoad: state.venueLoad,
  }),
  { addVenue }
)(Add);