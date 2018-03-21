import { RESULTS_SAVE, VENUE_ADD, VENUE_REMOVE } from './reducers';
import { lists, places } from '../../services/firebaseDataApi';


export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

export function addVenue(listId, venueId, name) {
  return (dispatch) => {
    lists.child(listId).child(venueId).set(true); 
    places.child(venueId).child('name').set(name);
    dispatch({
      type: VENUE_ADD,
      payload: {
        venueId,
        name
      }
    });
  };
}

export function removeVenue(id) {
  return {
    type: VENUE_REMOVE,
    payload: id
  };
}

//TODO: editVenue