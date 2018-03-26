import { QUERY } from './reducers';
import { saveResults } from '../results/actions';

export function saveQuery(term) {
  return dispatch => {
    dispatch({
      type: QUERY,
      payload: term
    });

    dispatch(saveResults())
  }
}

