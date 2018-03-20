export const RANDOM_SEARCH = 'RANDOM_SEARCH';

export function randomSearch(state = '', { type, payload }) {
  switch(type) {
    case RANDOM_SEARCH:
      return payload;
      
    default:
      return state;
  }
}