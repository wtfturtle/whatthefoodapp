import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './result.css';
import StarRatingComponent from 'react-star-rating-component';
// import { addVenue, removeVenue, editVenue } from './actions';
// import { loadStar } from '../user/actions';

class Rating extends Component {



  constructor() {
    super();

    this.state = {
      rating: ''
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating: nextValue });
    // this.props.loadStar(this.state.rating);
  };


  render() {

    const { rating } = this.state;

    return (
      <div>
        <h4>Rate this Place</h4>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ 
    user: state.user,
    // venueLoad: state.venueLoad
  }),
  null
)(Rating);