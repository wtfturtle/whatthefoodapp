import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue } from './actions';

class Result extends Component {

  // TODO: addVenue not working on button click. 
  render() {
    const { name } = this.props.venue;
    const { address } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { id } = this.props.venue;
    const { user } = this.props;

    return (
      <li className="result-li">
        <h2><Link to={`/results/${id}`}>{name}</Link></h2> 
        <p>Price: {message}</p> 
        <p>{address}</p>
        {user &&
          <button onClick={addVenue(this.id)}>Save</button>} 
        {/* button needs attention */}
      </li>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { addVenue }
)(Result);