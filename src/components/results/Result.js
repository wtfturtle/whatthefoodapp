import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue } from './actions';

class Result extends Component {

  handleAdd(event){ // needs work!
    event.preventDefault();
    addVenue(event.target);
  }

  render() {
    const { name, url } = this.props.venue;
    const { phone } = this.props.venue.contact || null;
    const { address } = this.props.venue.location;
    const { city } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { referralId } = this.props;
    const { user } = this.props;

    return (
      <li className="result-li">
        <h2><Link to={`/results/${referralId}`}>{name}</Link></h2> 
        <p>Price: {message}</p> 
        <p>{address}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <small>{url}</small>
        {user &&
          <button onSubmit={this.handleAdd}>Save</button>} 
        {/* button needs attention */}
      </li>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { addVenue }
)(Result);

// use referral ID to access single restaurant for detail page. Add save button under condition of user logged in. 