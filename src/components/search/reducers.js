export const QUERY = 'QUERY';

export function search(state = '', { type, payload }) {
  switch(type) {

    case QUERY:
      return payload;
    
    default:
      return state;
  }
}