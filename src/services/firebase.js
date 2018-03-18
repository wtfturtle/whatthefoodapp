import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyAjefFYwLUAwT0aOKVW7026bicIxp3-bJc',
  authDomain: 'wtfoodtracker.firebaseapp.com',
  databaseURL: 'https://wtfoodtracker.firebaseio.com',
  projectId: 'wtfoodtracker',
  storageBucket: 'wtfoodtracker.appspot.com',
  messagingSenderId: '746626901536'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;