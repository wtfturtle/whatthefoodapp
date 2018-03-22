import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './result.css';
import StarRatingComponent from 'react-star-rating-component';
// import { addVenue, removeVenue, editVenue } from './actions';

class Rating extends Component {

  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({ rating: nextValue });
  };


  render() {

    // TODO: add conditional (after user check) to see if rest. is saved. If so, show edit and remove buttons.
    // If user and rest saved, call component that shows user's input about rest. (Notes, rating, what list)
    // if editing, provide forms for editing data in those fields. 

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
  state => ({ user: state.user }),
  null
)(Rating);