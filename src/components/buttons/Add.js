import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVenue } from '../results/actions';
import { loadVenues } from '../user/actions';
import './button.css';

class Add extends Component {

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
          <button className="button" onClick={this.handleUnclick}>✘ Close</button>
          <ul className="list-ul">
            {lists.map((list, index) => (
              <li className="list-li" key={index}>
                <button className="button" onClick={() => this.handleAdd(list.key, id, name)}>{list.name}</button>
              </li>
            ))}
          </ul>
        </div>
        : <button className="button" onClick={this.handleClick}>Save</button>
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
)(Add);