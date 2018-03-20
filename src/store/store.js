import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { loading, error } from '../components/app/errorloading/reducers';
import { user } from '../components/app/auth/reducers';
import { searchTerm } from '../components/search/reducers';
import { results, userVenues } from '../components/results/reducers';

// combine reducer
const reducer = combineReducers({
  loading,
  error,
  user,
  searchTerm,
  results,
  userVenues
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
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