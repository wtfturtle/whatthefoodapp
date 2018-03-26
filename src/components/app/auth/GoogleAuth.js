import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { providers } from '../../../services/firebase';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class GoogleAuth extends PureComponent {

  componentDidMount() {
    const { origin } = window.location;
    const { history } = this.props;

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: `${origin}/home`,
      callbacks: { 
        signInSuccess: function(currentUser, credential, redirectUrl) {
          console.log(redirectUrl);
          setTimeout(() =>  history.push('/'), 100);
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render() {
    return <div id="firebaseui-auth-container"></div>;
  }
}

export default GoogleAuth;