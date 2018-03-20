import { ADD_LIST, LOAD_LIST } from './reducers';

import { users, listByUser, lists } from '../../services/firebaseDataApi';



export function addList(list) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    console.log(uid);
    listByUser.child(uid).push(list);
    lists.child(uid).push(list);
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
      // payload: listByUser.child(uid).child('lists').once('value')
      payload: listByUser.child(uid).once('value')
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