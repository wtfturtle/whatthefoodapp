import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { removeVenue } from './actions';
import Add from '../buttons/Add';
import Remove from '../buttons/Remove';

class Result extends Component {

  render() {

    const path = this.props.venue.photos.groups[0].items[0] || null;
    const imageUrl = `${path.prefix}original${path.suffix}` || null;
    const { name } = this.props.venue;
    const { address } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { id } = this.props.venue;
    const { user, venueLoad } = this.props;

    return (
      <li className="result-li">
        <div className="img-wrap">
          <img src={imageUrl} alt="restaurant"></img>
        </div>
        <h4><Link to={`/results/${id}`}>{name}</Link></h4> 
        <p>Price: {message}</p> 
        <p>{address}</p>
        {user && 
          (venueLoad[id] ? // check if venue exists for user already. If so, give remove option:
            <Remove venue={this.props.venue}/> 
            :  
            <Add venue={this.props.venue}/>
          )        
        } 
      </li>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user,
    lists: state.listLoad,
    venueLoad: state.venueLoad
  }),
  { removeVenue }
)(Result);