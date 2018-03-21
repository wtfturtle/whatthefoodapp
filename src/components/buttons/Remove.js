import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeVenue } from '../results/actions';

class Remove extends Component {

  handleRemove = (venueId, listId) => {
    this.props.removeVenue(venueId, listId);
  };

  render() {

    const { venueLoad } = this.props;
    const { id } = this.props.venue;

    return (
      <button onClick={() => this.handleRemove(Object.keys(venueLoad[id])[0], id)}>Remove</button>
    );

  }
}

export default connect(
  state => ({
    results: state.results,
    lists: state.listLoad,
    venueLoad: state.venueLoad,
  }),
  { removeVenue }
)(Remove);