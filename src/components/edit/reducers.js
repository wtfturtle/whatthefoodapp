export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_LOAD = 'NOTE_LOAD';

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

