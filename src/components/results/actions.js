import { RESULTS_SAVE } from './reducers';
// import { results } from '../search/Search';

export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };

}