import { RESULTS_SAVE, VENUE_ADD, VENUE_REMOVE } from './reducers';
import { lists, places } from '../../services/firebaseDataApi';


export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

//need to check if venue is already in places
export function addVenue(listId, venueId, name) {
  return (dispatch) => {
    lists.child(listId).child(venueId).set(true); 
    if(!places.child(venueId)) {
      places.child(venueId).child('name').set(name);
    }
    dispatch({
      type: VENUE_ADD,
      payload: {
        venueId,
        name,
        listId
      }
    });
  };
}

export function removeVenue(listId, venueId) {
  return (dispatch) => {
    lists.child(listId).child(venueId).remove();
    dispatch({
      type: VENUE_REMOVE,
      payload: venueId
    });
  };
}