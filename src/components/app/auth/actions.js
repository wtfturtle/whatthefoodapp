import { onUserStateChanged, onSignUp, onSignIn, onSignOut } from '../../../services/authApi';
import { USER } from './reducers';
import { loadList, loadVenues } from '../../user/actions';


export function listenForUser() {
  return dispatch => {
    onUserStateChanged(user => {
      dispatch({
        type: USER,
        payload: user
      });
      dispatch(loadList())
        .then(() => dispatch(loadVenues()));
    });
  };
}

export function signup({ email, password }) {
  return () => onSignUp(email, password);
}

export function signin({ email, password }) {
  return () => onSignIn(email, password);
}

export function logout() {
  return () => onSignOut();
}