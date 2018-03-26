import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

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
  }),
  null
)(Rating);