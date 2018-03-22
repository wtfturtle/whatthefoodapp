export const RESULTS_SAVE = 'RESULTS_SAVE';

export function results(state = [], { type, payload }) {
  switch(type) {
    
    case RESULTS_SAVE: 
      return payload;

    default: 
      return state;
  }
}