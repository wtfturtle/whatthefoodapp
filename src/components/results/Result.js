import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { removeVenue } from './actions';
import Add from '../buttons/Add';
import Remove from '../buttons/Remove';

class Result extends Component {

  render() {

    // These deep paths should be resolved prior to the presentation component...
    const path = this.props.venue.photos.groups[0] ? this.props.venue.photos.groups[0].items[0] : null;
    
    const imageUrl = path ? `${path.prefix}original${path.suffix}` : 'https://visitmasoncityiowa.com/wp-content/uploads/2017/03/3318_EAT-GENERIC-.jpg';

    // clean this up...
    const { user, venue, venueLoad } = this.props;
    const { id, name, location, price = 'Not Listed' } = venue;

    return (
      <li className="result-li">
        <div className="img-wrap">
          <Link to={`/results/${id}`}><img src={imageUrl} alt="restaurant"/></Link>
        </div>
        <h4><Link to={`/results/${id}`}>{name}</Link></h4> 
        <p>Price: {message}<br/>{address}</p>
        {user && 
          (venueLoad[id] ? 
            <Remove venue={venue}/> 
            :  
            <Add venue={venue}/>
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