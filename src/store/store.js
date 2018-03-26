import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { loading, error } from '../components/app/errorloading/reducers';
import { user } from '../components/app/auth/reducers';
import { searchTerm } from '../components/search/reducers';
import { listLoad, venueLoad, loadSaveResults } from '../components/user/reducers';
import { results } from '../components/results/reducers';
import { randomSearch } from '../components/random/reducers';
import { notes, star } from '../components/edit/reducers';

const reducer = combineReducers({
  loading,
  error,
  user,
  searchTerm,
  results,
  listLoad,
  venueLoad,
  randomSearch,
  notes,
  loadSaveResults,
  star
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    ) 
  )
);

export default store;