import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './result.css';
import { addVenue } from './actions';

class Result extends Component {

  state = {
    clicked: false
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ clicked: true });
  };

  handleUnclick = event => {
    event.preventDefault();
    this.setState({ clicked: false });
  };

  handleAdd = (listId, venueId, name) => {
    this.props.addVenue(listId, venueId, name);
    this.setState({ clicked: false });
  };

  render() {

    const path = this.props.venue.photos.groups[0].items[0] || null;
    const imageUrl = `${path.prefix}original${path.suffix}` || null;
    const { name } = this.props.venue;
    const { address } = this.props.venue.location;
    const { message } = this.props.venue.price || 'Not Listed';
    const { id } = this.props.venue;
    const { user, lists, venueLoad } = this.props;
    const { clicked } = this.state;

    return (
      <li className="result-li">
        <h2><Link to={`/results/${id}`}>{name}</Link></h2> 
        <img src={imageUrl} alt="restaurant"></img>
        <p>Price: {message}</p> 
        <p>{address}</p>
        {user && 
          (venueLoad[id] ?
            <button>Remove</button> 
            : (clicked ? 
              <div>
                <button onClick={this.handleUnclick}>X</button>
                <ul>
                  {lists.map((list, index) => (
                    <li key={index}>
                      <button onClick={() => this.handleAdd(list.key, id, name)}>{list.name}</button>
                    </li>
                  ))}
                </ul>
              </div>
              : <button onClick={this.handleClick}>Save</button>
            )        
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
  { addVenue }
)(Result);