export const QUERY = 'QUERY';


export function searchTerm(state = '', { type, payload }) {
  switch(type) {

    case QUERY:
      return payload.query;
    
    default:
      return state;
  }
}