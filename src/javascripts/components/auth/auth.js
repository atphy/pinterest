import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  const domString = '<button class="acctButton" id="acctButton">Sign In</button>';
  utils.printToDom('#acctButtonBox', domString);
  $('#acctButton').click(signMeIn);
};

export default { loginButton };
