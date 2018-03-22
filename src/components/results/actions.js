import { RESULTS_SAVE } from './reducers';
import { VENUE_ADD, VENUE_REMOVE } from '../user/reducers';
import { lists } from '../../services/firebaseDataApi';

export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };
}

export function addVenue(listKey, venueKey) {
  return (dispatch) => {
    lists.child(listKey).child(venueKey).set(true); 
 
    dispatch({
      type: VENUE_ADD,
      payload: {
        venueKey,
        listKey
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