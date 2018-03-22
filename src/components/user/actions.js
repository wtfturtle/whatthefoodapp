import { ADD_LIST, LOAD_LIST, VENUE_LOAD, SAVE_LOAD } from './reducers';
import { listByUser, users, lists } from '../../services/firebaseDataApi';

export function addList(list) {
  return (dispatch, getState) => {
    let { uid } = getState().user;
    listByUser.child(uid).push(list);
    dispatch({
      type: ADD_LIST,
      payload: list
    });
  };
}

export function loadList() {
  return (dispatch, getState) => {
    
    const { uid, email } = getState().user;
    
    // create initial user node, child and email 
    users.child(uid).child('email').set(email);
    
    return dispatch ({ 
      type: LOAD_LIST,
      payload: listByUser.child(uid).once('value')
        .then(data => {
          const listResults = data.val();
          
          if(!listResults) {
            listByUser.child(uid).push('default'); //add default list here
            return;
          } else {
            const results = Object.keys(listResults).map(key => {
              const name = listResults[key];
              return { key, name };
            });
            return results;
          }
        })
    });
  };
}

export function loadVenues() {
  return (dispatch, getState) => {
    
    const { listLoad } = getState();
    
    listLoad.forEach(({ key }) => {
      lists.child(key).once('value')
        .then(data => {
          const val = data.val();
          return val ? 
            Object.keys(val) : [];
        }
        )
        .then(venueKeys => {
          venueKeys.forEach(venueKey => {
            dispatch ({
              type: VENUE_LOAD,
              payload: {
                listKey: key,
                venueKey
              } 
            });
          });
        });
    });
  };
}

export function loadSaveList(listKey) {
  return dispatch => {
    return dispatch ({
      type: SAVE_LOAD,
      payload: 
        lists.child(listKey).once('value')
          .then(data => {
            const saveResults = data.val();
            if(!saveResults) return [];
            return Object.keys(saveResults); 
          } 
          )
    });
  };
}