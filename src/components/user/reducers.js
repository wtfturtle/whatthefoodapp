export const ADD_LIST = 'ADD_LIST';
export const LOAD_LIST = 'LOAD_LIST';
export const VENUE_LOAD = 'VENUE_LOAD';
export const SAVE_LOAD = 'SAVE_LOAD';
export const VENUE_ADD = 'VENUE_ADD';
export const VENUE_REMOVE = 'VENUE_REMOVE';

export function add(state = [], { type, payload }) {
  switch(type) {
    
    case ADD_LIST:
      return [
        ...state,
        payload
      ];

    default:
      return state;
  }
}

export function listLoad(state = [], { type, payload }) {
  switch(type) {

    case LOAD_LIST:
      return [
        ...payload
      ];
    default:
      return state;
  }
}

export function venueLoad(state = {}, { type, payload }) {
  switch(type) {
    case VENUE_REMOVE:
      state[payload] = null;
      return {
        ...state
      };
    case VENUE_ADD:
    case VENUE_LOAD:
      return {
        ...state,
        [payload.venueKey]: {
          ...state[payload.venueKey],
          [payload.listKey]: true
        }
      };
    default:
      return state;
  }
}

export function loadSaveResults(state = {}, { type, payload }) {
  switch(type) {
    case SAVE_LOAD:
      return {
        payload
      };
    default:
      return state;
  }
}