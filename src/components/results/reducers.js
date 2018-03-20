export const RESULTS_SAVE = 'RESULTS_SAVE';
export const RESULTS_LOAD = 'RESULTS_LOAD';
export const VENUE_ADD = 'VENUE_ADD';


export function results(state = [], { type, payload }) {
  switch(type) {
    case RESULTS_SAVE: 
      return payload;

    default: 
      return state;
  }
}

export function retrieve(state = [], { type, payload }) {
  switch(type) {
    case RESULTS_LOAD:
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

    default:
      return state;
  }
}