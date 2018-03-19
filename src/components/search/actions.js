import { QUERY } from './reducers';

export function searchQuery(term) {
  return {
    type: QUERY,
    payload: term
  };
}

