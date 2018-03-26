import { RESULTS_SAVE } from './reducers';
import { VENUE_ADD, VENUE_REMOVE } from '../user/reducers';
import { lists } from '../../services/firebaseDataApi';
import { search } from '../../services/foursquareApi';


export function saveResults() {
  return (dispatch, getState) => {
    const { searchTerm } = getState();
    
    dispatch({
      type: RESULTS_SAVE,
      payload: search(searchTerm)
    });
  } 
}

// use promise middleware to make these simpler...

export function addVenue(listKey, venueKey) {
  return {
    type: VENUE_ADD,
    payload: lists
      .child(listKey)
      .child(venueKey).set(true)
      .then(() => {
        venueKey,
        listKey
      })
  };
}

export function removeVenue(listId, venueId) {
  return {
    type: VENUE_REMOVE,
    payload: lists.child(listId)
      .child(venueId).remove()
      .then(() => venueId)
  };
}