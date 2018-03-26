import { NOTE_ADD, NOTE_LOAD } from './reducers';
import { venueNotesByUser } from '../../services/firebaseDataApi';

// Move functionality for current user into notesByUser, then this is much simpler:

export function addNote(note, venueId) {
  return {
    type: NOTE_ADD,
    // you can directly "push" the data to set
    payload: venueNotesByUser(venueId).push({
      date: new Date(), // maintain date data type
      note
    })
  };
}

const pivot = results => {
  if(!results) return [];

  return Object.keys(results).map(key => {
    const note = results[key];
    return { key, ...note };
  });
}

export function loadNotes(id) {
  return {
    type: NOTE_LOAD,
    payload: venueNotesByUser(id).once('value')
      .then(data => pivot(data.val())
  };
}