import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import './result.css';

class Result extends Component {

  render() {
    const { name, url } = this.props.venue;
    const { phone } = this.props.venue.contact || null;
    const { address } = this.props.venue.location;
    const { city } = this.props.venue.location;

    console.log(address);
    return (
      <li className="result-li">
        {name} {url} {phone} {address} {city}
        {/* <Link to={`/results/${id}`}>{name}</Link> */}
      </li>
    );
  }
}

export default connect(
  null,
  null
)(Result);