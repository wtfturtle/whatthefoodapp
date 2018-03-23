export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_LOAD = 'NOTE_LOAD';
export const SAVE_STAR = 'SAVE_STAR';

export function notes(state = [], { type, payload }) {
  switch(type) {
    
    case NOTE_ADD:
      return [
        ...state,
        payload
      ];
   
    case NOTE_LOAD:
      return [ 
        ...payload
      ];

    default:
      return state;
  }
}

export function star(state = {}, { type, payload }) {
  switch(type) {
    case SAVE_STAR:
      return {
        state,
        payload
      };
    default:
      return state;
  }
}