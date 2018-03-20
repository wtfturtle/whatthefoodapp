import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue } from './actions';

class Result extends Component {

  // TODO: addVenue not working on button click - will resolve once firebase all set. 
  render() {
    const path = this.props.venue.photos.groups[0].items[0];
    const imageUrl = `${path.prefix}250x250${path.suffix}`;
    const { name, id } = this.props.venue;
    const { address } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { user } = this.props;

    return (
      <li className="result-li">
        <img src={imageUrl} alt="restaurant"></img>src={imageUrl}
        <h2><Link to={`/results/${id}`}>{name}</Link></h2> 
        <p>Price: {message}</p> 
        <p>{address}</p>
        {user &&
          <button onClick={addVenue(this.id)}>Save</button>} 
        {/* button needs attention - see above */}
      </li>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { addVenue }
)(Result);