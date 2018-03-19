import React, { Component } from 'react';
import { config } from './firebase';

const clientID = 'TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD';
const clientSecret = '021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M';

const BASE_URL = `https://api.foursquare.com/v2/venues/explore?client_id=${clientID}&client_secret=${clientSecret}&near=Portland,OR&`;
// const BASE_URL = `https://api.foursquare.com/v2/venues/explore?client_id=${clientID}&client_secret=${clientSecret}&near=Portland,OR&query=${query}&v=20180312`;
// add lat and long before query... '&ll=...'

// const get = url => fetch(url) 
//   .then(response => response.json())
//   .then(checkResponseData);

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};

export function search({ query }) {
  const url = `${BASE_URL}query=${query}&v=20180312`;

  return fetch(url).then(result => {
    if(result.ok) return result.json();
    return result.json().then(json => { throw json; });
  });
}
// const URL = 'https://wtfoodtracker.firebaseio.com';
// const USER_URL = `${URL}/`; //find user-specific url to query, to get a user's list of saved restaurants

