import { RESULTS_SAVE, VENUE_ADD, VENUE_REMOVE } from './reducers';
import { lists } from '../../services/firebaseDataApi';


export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

export function addVenue(listId, venueId) {
  return (dispatch) => {
    lists.child(listId).child(venueId).set(true); 
    console.log(venueId);
    dispatch({
      type: VENUE_ADD,
      payload: {
        listId,
        venueId
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