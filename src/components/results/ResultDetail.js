import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue, removeVenue, editVenue } from './actions';
import Rating from '../edit/Rating';
import Notes from '../edit/Notes';
import AddDetail from '../buttons/AddDetail';
import RemoveDetail from '../buttons/RemoveDetail';


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
    const { user, venueLoad } = this.props;

    const { searchTerm } = this.props;

    return (
      <section className="main-container maxwidth-wrap">
        <div className="body-padding">
          <Link className="back" to="/">⬅ Back to results</Link>
          <p className="bread"><Link to="/">Home</Link> &nbsp;❯&nbsp; <Link to="/">{searchTerm}</Link> &nbsp;❯&nbsp; {name}</p>
          <div className="detail-flex">
            
            <div>
              <img className="detail-img" src={imageUrl} alt={name}></img>
              <div>
                <div className="info-flex">
                  <h3>{name}</h3> 
                  <p className="top-pad"><Link to={url} alt={name} target="_blank" rel="author noopener noreferrer"><span className="weblink">Visit Online</span></Link></p>
                </div>
                <div className="info-flex subtop">
                  <div>
                    <span className="sub">Price</span>
                    <p>{message}</p> 
                  </div>
                  <div>
                    <span className="sub">Phone</span>
                    <p>{phone}</p>
                  </div>
                  <div>
                    <span className="sub">Address</span>
                    <p>{address}<br/>{city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="edit-detail">
              {user && 
                (venueLoad[id] ? 
                  <div>
                    <h4>Save to List</h4>
                    <RemoveDetail venue={result.venue}/> 
                  </div>
                  :  
                  <div>
                    <h4>Save to List</h4>
                    <AddDetail venue={result.venue}/>
                  </div>
                )        
              }
              <br/><hr className="hr"/>
              {user && 
                <div>
                  <Rating/>
                  <hr className="hr"/>
                  <Notes id={id}/>
                </div> 
              }
            </div>

          </div>
          <Link className="back" to="/">⬅ Back to results</Link>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user, 
    lists: state.listLoad,
    listResults: state.listLoad,
    results: state.results,
    venueLoad: state.venueLoad,
    searchTerm: state.searchTerm
  }),
  { addVenue, removeVenue, editVenue }
)(ResultDetail);