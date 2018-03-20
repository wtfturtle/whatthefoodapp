export const ADD_LIST = 'ADD_LIST';
export const LOAD_LIST = 'LOAD_LIST';

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
      return {
        payload
      };
    default:
      return state;
  }
}