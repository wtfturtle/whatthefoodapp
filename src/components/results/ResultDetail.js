import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue, removeVenue, editVenue } from './actions';
import Rating from '../edit/Rating';
import Notes from '../edit/Notes';

class ResultDetail extends Component {

  render() {

    const { id } = this.props.match.params; 
    const { results } = this.props;

    const result = results.find(element => {
      return element.venue.id === id;
    });

    const path = result.venue.photos.groups[0].items[0] || null;
    
    const imageUrl = `${path.prefix}original${path.suffix}` || null;

    const { name, url } = result.venue;
    const { phone } = result.venue.contact || null;
    const { address } = result.venue.location;
    const { city } = result.venue.location;
    const { message } = result.venue.price || 'Not Listed';
    const { user } = this.props;

    // TODO: add conditional (after user check) to see if rest. is saved. If so, show edit and remove buttons.
    // If user and rest saved, call component that shows user's input about rest. (Notes, rating, what list)
    // if editing, provide forms for editing data in those fields. 

    return (
      <div>
        <Link to="/">⬅ Back</Link>

        <img src={imageUrl} alt="restaurant"></img>
        <h3>{name}</h3> 
        <p>Price: {message}</p> 
        <p><Link to={url} alt={name}>{url}</Link></p>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{city}</p>
        {user &&
          <button onClick={addVenue(this.id)}>Save</button>} 

        {user && 
          <div>
            <Rating/>
            <Notes id={id}/>
          </div>  
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user, 
    results: state.results }),
  { addVenue, removeVenue, editVenue }
)(ResultDetail);