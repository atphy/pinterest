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
const deleteCard = $('#deleteButtonContainer');

const editBoxEvent = () => {
  editor.toggleClass('hidden');
  deleteCard.toggleClass('hidden');
};

const editorEvent = () => {
  $('#editorButton').click(editBoxEvent);
};

export default { logoutEvent, editorEvent };
