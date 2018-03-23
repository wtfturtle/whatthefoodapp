import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../results/result.css';
import { addVenue, removeVenue, editVenue, loadSaveList } from './actions';
import { retrieve } from '../../services/foursquareApi';
import Rating from '../edit/Rating';
import Notes from '../edit/Notes';
import AddDetail from '../buttons/AddDetail';
import RemoveDetail from '../buttons/RemoveDetail';


class MyResultDetail extends Component {

  state = {
    result: {}
  };

  componentDidMount() {
    const { id, listKey } = this.props.match.params;
    this.props.loadSaveList(listKey) ;
    retrieve(id).then(data => {
      this.setState({ result: data.response });
    });
  }

  render() {

    if(!this.state.result.venue) return null;
    if(!this.props.venueLoad[this.props.match.params.id]) return null;
    const { result } = this.state;

    const path = result.venue.photos.groups[0].items[0] || null;
    
    const imageUrl = `${path.prefix}original${path.suffix}` || null;

    const { id, listKey } = this.props.match.params;
    const { name, url } = result.venue;
    const { phone } = result.venue.contact || null;
    const { address } = result.venue.location;
    const { city } = result.venue.location;
    const { message } = result.venue.price || 'Not Listed';
    const { user, loadSaveResults, venueLoad } = this.props;

    return (
      <div>
        <div>
          <div>
            <Link to="/">⬅ Back</Link>
            <img src={imageUrl} alt="restaurant"></img>
          </div>

          <div>
            <h3>{name}</h3> 
            <p>Price: {message}</p> 
            <p><a href={url} alt={name}>{url}</a></p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{city}</p>
            {user && loadSaveResults &&
              (venueLoad[id][listKey] ? 
                <RemoveDetail venue={result.venue}/> 
                :  
                <AddDetail venue={result.venue}/>
              )        
            } 
          </div>
        </div>

        {user && 
          (loadSaveResults.includes(id) && 
            <div>
              <Rating/>
              <Notes id={id}/>
            </div> 
          ) 
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user, 
    lists: state.listLoad,
    listResults: state.listLoad,
    results: state.results,
    loadSaveResults: state.loadSaveResults,
    venueLoad: state.venueLoad
  }),
  { addVenue, removeVenue, editVenue, loadSaveList }
)(MyResultDetail);