import { ADD_LIST, LOAD_LIST } from './reducers';

import { users } from '../../services/firebaseDataApi';
const usersRef = users();

// import { auth } from '../../services/firebase';
// const authRef = auth();



export function addList(list) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    console.log(uid);
    usersRef.child(uid).child('lists').push(list);
    dispatch({
      type: ADD_LIST,
      payload: list
    });
  };
}

export function loadList(id) {
  return {
    type: LOAD_LIST,
    payload: usersRef.child(id).child('lists').once('value')
      .then(data => {
        const listResults = data.val();
        if(!listResults) return [];

        return Object.keys(listResults).map(key => {
          const list = listResults[key];
          list.key = key;
          return list;
        });
      })
    
  };
}