const clientID = 'TBY4FBFNODABHX5VOK32VECUDGO5RMBOJ3GF113SFWLML0ZD';
const clientSecret = '021EF3LQK0AAKW2QW42VFVF3Z4FMZNOAMCNTZBIVBZMF3H0M';
const version = '&v=20180312';

const BASE_URL = 'https://api.foursquare.com/v2/venues/';
const SEARCH_URL = `explore/?client_id=${clientID}&client_secret=${clientSecret}&near=Portland,OR&venuePhotos=1${version}`;
// const GET_PHOTO_URL = `/photos?client_id=${clientID}&client_secret=${clientSecret}&v=20180312`;

// const getPhotoData = (id) => `${BASE_URL}${id}${GET_PHOTO_URL}${version}`; //will be used somewhere below, in a request. 

export const checkResponseData = data => {
  if(data.Response === 'True') return data;
  throw data.Error;
};

export function search({ query }) {
  const url = `${BASE_URL}${SEARCH_URL}query=${query}${version}`;

  return fetch(url).then(result => {
    if(result.ok) return result.json();
    return result.json().then(json => { throw json; });
  });
}

// export function getPhotoUrl(id) {
//   return fetch(getPhotoData(id))
//     .then(result => {
//       if(result.ok) return result.json();
//       return result.json().then(json => { throw json; });
//     })
//     .then(data => data.url)
// }


// const URL = 'https://wtfoodtracker.firebaseio.com';
// const USER_URL = `${URL}/`; //find user-specific url to query, to get a user's list of saved restaurants

