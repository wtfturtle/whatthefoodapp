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
import '../results/result.css';


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
      <section className="main-container maxwidth-wrap">
        <div className="body-padding">
          <Link className="back" to="/">⬅ Back to results</Link>
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
              {user && loadSaveResults &&
              (venueLoad[id][listKey] ? 
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
                (loadSaveResults.includes(id) && 
                  <div>
                    <Rating/>
                    <hr className="hr"/>
                    <Notes id={id}/>
                  </div> 
                ) 
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
    loadSaveResults: state.loadSaveResults,
    venueLoad: state.venueLoad
  }),
  { addVenue, removeVenue, editVenue, loadSaveList }
)(MyResultDetail);