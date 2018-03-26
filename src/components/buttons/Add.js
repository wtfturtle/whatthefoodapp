import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVenue } from '../results/actions';
import { loadVenues } from '../user/actions';
import './button.css';

class Add extends Component {
  // name this by what it does, not what action makes it change
  state = {
    expanded: false
  };

  handleExpansion = expanded => {
    this.setState({ expanded });
  }

  handleClick = event => {
    event.preventDefault();
    this.handleExpansion(true);
  };

  handleUnclick = event => {
    event.preventDefault();
    this.handleExpansion(false);
  };

  handleAdd = (listId, venueId, name) => {
    // wait till async complete!
    this.props.addVenue(listId, venueId, name)
      .then(() => this.handleExpansion(false));
    
    // this needs to be part of adding a venue actions, not 
    // a seperate load call!
    this.props.loadVenues();
  };

  render() {

    const { id } = this.props.venue;
    const { lists } = this.props;
    const { expanded } = this.state;

    return (
      (expanded ?
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