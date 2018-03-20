const clientID = 'TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD';
const clientSecret = '021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M';
const version = '&v=20180312';

// const BASE_URL = `https://api.foursquare.com/v2/venues/explore/?&near=Portland,OR&venuePhotos=1&client_id=${clientID}&client_secret=${clientSecret}`;

const BASE_URL = 'https://api.foursquare.com/v2/venues/explore/?near=Portland,OR&';
const END_URL = `&venuePhotos=1&client_id=${clientID}&client_secret=${clientSecret}${version}`;

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};

export function search({ query }) {
  const url = `${BASE_URL}query=${query}${END_URL}`;
  
  return fetch(url).then(result => {
    if(result.ok) return result.json();
    return result.json().then(json => { throw json; });
  });
}
// const URL = 'https://wtfoodtracker.firebaseio.com';

// `https://api.foursquare.com/v2/venues/client_id=TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD&client_secret=021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M&near=Portland,OR&query=${query}&v=20180312`;