import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeVenue } from '../results/actions';
import { loadVenues } from '../user/actions';

class RemoveDetail extends Component {

  handleRemove = (venueId, listId) => {
    this.props.removeVenue(venueId, listId);
    this.props.loadVenues();
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
  { removeVenue, loadVenues }
)(RemoveDetail);