import React, { Component } from 'react';
import { config } from './firebase';

export const foursquare = require('react-foursquare')({
  clientID: 'TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD',
  clientSecret: '021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M'  
});

export const params = {
  'll': '37.7749,-122.4194',
  'query': 'Blue Bottle'
};

// export default class FoursquareDemo extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {    
//     foursquare.venues.getVenues(params)
//       .then(res=> {
//         this.setState({ items: res.response.venues });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <div>Items:</div>
//         { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
//       </div>
//     );
//   }
// }





// const URL2 = 'https://wtfoodtracker.firebaseio.com';
// const USER_URL = `${URL2}/`; //find user-specific url to query, to get a user's list of saved restaurants

