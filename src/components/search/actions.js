import { QUERY } from './reducers';

export function saveQuery(term) {
  return {
    type: QUERY,
    payload: term
  };
}

