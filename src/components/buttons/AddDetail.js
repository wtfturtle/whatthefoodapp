import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVenue } from '../results/actions';
import { loadVenues } from '../user/actions';

class AddDetail extends Component {

  state = {
    clicked: false
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ clicked: true });
  };

  handleUnclick = event => {
    event.preventDefault();
    this.setState({ clicked: false });
  };

  handleAdd = (listId, venueId, name) => {
    this.props.addVenue(listId, venueId, name);
    this.setState({ clicked: false });
    this.props.loadVenues();
  };

  render() {

    const { id } = this.props.venue;
    const { lists } = this.props;
    const { clicked } = this.state;

    return (
      (clicked ?
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
        : <button onClick={this.handleClick}>Save</button>
      )
    );
  }
}

export default connect(
  state => ({
    results: state.results,
    lists: state.listLoad,
    venueLoad: state.venueLoad,
  }),
  { addVenue, loadVenues }
)(AddDetail);