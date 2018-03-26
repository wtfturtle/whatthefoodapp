const clientID = 'TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD';
const clientSecret = '021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M';
const version = '&v=20180312';
const location = 'Portland,OR';


const BASE_URL = `https://api.foursquare.com/v2/venues/explore/?near=${location}`;
const END_URL = `&venuePhotos=1&client_id=${clientID}&client_secret=${clientSecret}${version}`;
const END_URL2 = `?client_id=${clientID}&client_secret=${clientSecret}${version}`;

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};

export function search({ query }) {
  const url = `${BASE_URL}&query=${query}${END_URL}`;
  
  return fetch(url).then(result => {
    // Shape the data here, not in presentation component!
    if(result.ok) return result.json().then(r => res.response.groups[0].items);
    return result.json().then(json => { throw json; });
  });
}

export function retrieve(venueId) {
  const url = `https://api.foursquare.com/v2/venues/${venueId}${END_URL2}`;
  return fetch(url).then(result => {
    if(result.ok) return result.json();
    return result.json().then(json => { throw json; });
  });
}

// full URL for searching: `https://api.foursquare.com/v2/venues/explore/?&near=Portland,OR&venuePhotos=1&client_id=${clientID}&client_secret=${clientSecret}`;