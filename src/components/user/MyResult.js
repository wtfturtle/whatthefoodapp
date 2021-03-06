import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../results/result.css';
import { removeVenue } from '../results/actions';
import Add from '../buttons/Add';
import Remove from '../buttons/Remove';


class MyResult extends Component {

  render() {
    const { listKey } = this.props;
    const path = this.props.venue.photos.groups[0] ? this.props.venue.photos.groups[0].items[0] : null;
    
    const imageUrl = path ? `${path.prefix}original${path.suffix}` : 'https://visitmasoncityiowa.com/wp-content/uploads/2017/03/3318_EAT-GENERIC-.jpg';

    const { name } = this.props.venue;
    const { address } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { id } = this.props.venue;
    const { user, venueLoad } = this.props;

    return (
      <li className="result-li">
        <div className="img-wrap">
          <Link to={`/user/lists/${listKey}/${id}`}><img src={imageUrl} alt="restaurant"/></Link>
        </div>
        <h4><Link to={`/user/lists/${listKey}/${id}`}>{name}</Link></h4> 
        <p>Price: {message}</p> 
        <p>{address}</p>
        {user && 
          (venueLoad[id] ? 
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
)(MyResult);