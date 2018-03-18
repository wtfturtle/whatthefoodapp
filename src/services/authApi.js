import { auth } from './firebase';

export const onUserStateChange = handler => {
  auth.onAuthStateChanged(user => {
    if(user) user.name = user.email.split('@')[0];
    handler(user);
  });
};

export const onSignUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
export const onSignIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const onSignOut = () => {
  return auth.signOut();
};