import { NOTE_ADD } from './reducers';
import { notesByUser } from '../../services/firebaseDataApi';

export function addNote(note, venueId) {
  return (dispatch, getState) => {
    
    let { uid } = getState().user;
    notesByUser.child(uid).child(venueId).push(note);
    dispatch({
      type: NOTE_ADD,
      payload: note, venueId
    });
  };
}