import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './result.css';

class Result extends Component {

  render() {
    const { name, url } = this.props.venue;
    const { phone } = this.props.venue.contact || null;
    const { address } = this.props.venue.location;
    const { city } = this.props.venue.location;
    // const { message } = this.props.venue.price || null;
    const id = this.props.venue.referralId;

    return (
      <li className="result-li">
        <h2><Link to={`/results/${id}`}>{name}</Link></h2> 
        {/* {message ?
          <p>Price: {message}</p> 
          : null} */}
        <p>{address}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <small>{url}</small>
      </li>
    );
  }
}

export default connect(
  null,
  null
)(Result);