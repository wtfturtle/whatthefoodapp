import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import './result.css';

class Result extends Component {

  render() {
    // const { id, name } = this.props;

    return (
      <li className="result-li">
        {/* <Link to={`/restaurant/${id}`}>{name}</Link> */}
      </li>
    );
  }
}

export default connect(
  null,
  null
)(Result);