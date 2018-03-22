import { db } from './firebase';

export const users = db.ref('users');
// user key

export const listByUser = db.ref('listByUser');
// user key
  // list1:name

export const lists = db.ref('lists');
// list1
  // place1
  // place2

export const places = db.ref('places');
// place1
  // name
  // address
  // phone

export const notesByUser = db.ref('notesByUser');


export const notes = db.ref('notes');