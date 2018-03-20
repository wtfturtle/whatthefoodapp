import { RESULTS_SAVE, VENUE_ADD, VENUE_REMOVE } from './reducers';

export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

export function addVenue(id) {
  return {
    type: VENUE_ADD,
    payload: id
  };
}

export function removeVenue(id) {
  return {
    type: VENUE_REMOVE,
    payload: id
  };
}

//TODO: editVenue