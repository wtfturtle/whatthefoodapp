export const NOTE_ADD = 'NOTE_ADD';

export function notes(state = [], { type, payload }) {
  switch(type) {
    
    case NOTE_ADD:
      return [
        ...state,
        payload
      ];
   
    default:
      return state;
  }
}