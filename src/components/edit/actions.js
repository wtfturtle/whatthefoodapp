import { NOTE_ADD, NOTE_LOAD } from './reducers';
import notesApi from '../../services/notesApi';


export const doLoadNotes = api => () => {
  return {
    type: NOTE_LOAD,
    payload: api.load()
  };
};

export function loadNotes(user) {
  return {
    type: NOTE_LOAD,
    payload: notesApi.load(user)
  };
}

export function addNote(user, note) {
  return {
    type: NOTE_ADD,
    payload: notesApi.add(user, note)
  };
}