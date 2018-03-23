import { places } from './randomPlaces';
import { RANDOM_SEARCH } from './reducers';

function randomize() {
  return places[Math.floor(Math.random() * places.length)];
}

export function getRandom() {
  return {
    type: RANDOM_SEARCH,
    payload: randomize()
  };
}