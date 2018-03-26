import { places } from './randomPlaces';
import { RANDOM_SEARCH } from './reducers';
import { saveResults } from '../results/actions';

function randomize() {
  return places[Math.floor(Math.random() * places.length)];
}

export function getRandom(term) {
  return dispatch => {
    dispatch({
      type: QUERY,
      payload: randomize()
    });

    dispatch(saveResults())
  }
}