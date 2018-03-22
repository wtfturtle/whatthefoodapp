import { NOTE_ADD, NOTE_LOAD } from './reducers';
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

export function loadNote() {
  return (dispatch, getState) => {

    const { uid, venueId } = getState().user;

    return dispatch ({
      type: NOTE_LOAD,
      payload: notesByUser.child(uid).child(venueId).once('value')
        .then(data => {
          const noteResults = data.val();

          const results = Object.keys(noteResults).map(key => {
            const note = results[key];
            return { key, note };
          });
          return results;
        })
    });
  };
}