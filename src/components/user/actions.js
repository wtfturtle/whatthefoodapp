import { ADD_LIST, LOAD_LIST } from './reducers';

import { users } from '../../services/firebaseDataApi';

// import { auth } from '../../services/firebase';
// const authRef = auth();



export function addList(list) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    console.log(uid);
    users.child(uid).child('lists').push(list);
    dispatch({
      type: ADD_LIST,
      payload: list
    });
  };
}

export function loadList() {
  return (dispatch, getState) => {
    
    const { uid } = getState().user;

    dispatch ({ 
      type: LOAD_LIST,
      payload: users.child(uid).child('lists').once('value')
        .then(data => {
          const listResults = data.val();
          if(!listResults) return [];

          const results = Object.keys(listResults).map(key => {
            const name = listResults[key];
            return { key, name };
          });
          return results;
        })
    });
  };
}