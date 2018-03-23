import { NOTE_ADD, NOTE_LOAD } from './reducers';
import { notesByUser } from '../../services/firebaseDataApi';

export function addNote(note, venueId) {
  return (dispatch, getState) => {
    
    
    const date = new Date().toLocaleString();
    const newDetail = { date, note };

    let { uid } = getState().user;
    notesByUser.child(uid).child(venueId).push().set(newDetail)
      .then(() => {
        // const newNote = { key: data.key, note };
        dispatch({
          type: NOTE_ADD,
          payload: newDetail
        });    
      });
  };
}

export function loadNote(id) {
  return (dispatch, getState) => {

    const { uid } = getState().user;

    return dispatch ({
      type: NOTE_LOAD,
      payload: notesByUser.child(uid).child(id).once('value')
        .then(data => {
          const noteResults = data.val();
          if(!noteResults) return [];

          const results = Object.keys(noteResults).map(key => {
            const note = noteResults[key];
            return { key, ...note };
          });
          return results;
        })
    });
  };
}