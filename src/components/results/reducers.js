export const RESULTS_SAVE = 'RESULTS_SAVE';
export const VENUE_ADD = 'VENUE_ADD';
export const VENUE_REMOVE = 'VENUE_REMOVE';

export function results(state = [], { type, payload }) {
  switch(type) {
    
    case RESULTS_SAVE: 
      return payload;

    default: 
      return state;
  }
}

export function userVenues(state = [], { type, payload }) {
  switch(type) {

    case VENUE_ADD:
      return [
        ...state,
        payload
      ];
    
    case VENUE_REMOVE:
      return state.filter(venue => venue.id !== payload);

    default:
      return state;
  }
}