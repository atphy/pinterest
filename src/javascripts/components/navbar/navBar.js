import firebase from 'firebase/app';
import 'firebase/auth';

import deletePins from '../pinCards/deletePins';

import './navbar.scss';

const logoutUser = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
};

const logoutEvent = () => {
  $('#signOut').click(logoutUser);
};

const editor = $('#firstColumn');

const editBoxEvent = () => {
  editor.toggleClass('hidden');
};

const deleteCardsToggle = () => {
  $('.deleteButtonContainer').toggleClass('hidden');
  deletePins.deletePinClick();
};

const editorEvent = () => {
  $('#editorButton').click(editBoxEvent);
  $('#editorButton').click(deleteCardsToggle);
};

export default { logoutEvent, editorEvent };
