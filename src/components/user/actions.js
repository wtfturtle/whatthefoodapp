import { ADD_LIST } from './reducers';
import { db } from '../../services/firebase';
const users = db.ref('users');

export function addList(list) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    users.child(uid).child('lists').push(list);
    dispatch({
      type: ADD_LIST,
      payload: list
    });
  };
}