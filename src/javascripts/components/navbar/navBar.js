import firebase from 'firebase/app';
import 'firebase/auth';

const logoutUser = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
};

const logoutEvent = () => {
  $('#signOut').click(logoutUser);
};

export default { logoutEvent };
