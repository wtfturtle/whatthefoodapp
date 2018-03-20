import { RESULTS_SAVE, RESULTS_LOAD } from './reducers';

// import { results } from '../search/Search';

export function saveResults(results) {
  return {
    type: RESULTS_SAVE,
    payload: results
  };

}
export function loadResults(results) {
  return {
    type: RESULTS_LOAD,
    payload: results
  };
}