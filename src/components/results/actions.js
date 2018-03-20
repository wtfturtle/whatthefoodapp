import { RESULTS_SAVE, RESULTS_LOAD, VENUE_ADD } from './reducers';

// import { results } from '../search/Search';

export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

export function loadResults(results) {
  return {
    type: RESULTS_LOAD,
    payload: results
  };
}

export function addVenue(id) {
  return {
    type: VENUE_ADD,
    payload: id
  };
}

//TODO: removeVenue, editVenue