import { searchTerm, QUERY } from './reducers';
import { search } from '../../services/foursquareApi';
// 
export function findFood(query) {
  return (dispatch, getState) => {
    const { query } = getState();
    
  }
}
