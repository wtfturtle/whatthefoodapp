export const ADD_LIST = 'ADD_LIST';

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