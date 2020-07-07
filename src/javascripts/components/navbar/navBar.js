import firebase from 'firebase/app';
import 'firebase/auth';

import './navbar.scss';

const logoutUser = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
};

const logoutEvent = () => {
  $('#signOut').click(logoutUser);
};

const editor = $('#firstColumn');

const editBoxEvent = (e) => {
  e.preventDefault();
  editor.toggleClass('hidden');
};

const editorEvent = () => {
  $('#editorButton').click(editBoxEvent);
};

export default { logoutEvent, editorEvent };
