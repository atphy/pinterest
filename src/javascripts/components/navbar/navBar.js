import firebase from 'firebase/app';
import 'firebase/auth';

import deletePins from '../pinCards/deletePins';
import deleteBoard from '../boardOptions/deleteBoard';
import editorBox from '../editorBox/editorBox';
import newBoard from '../boardOptions/newBoard';
import newPin from '../pinCards/newPin';
import editBoard from '../boardOptions/editBoard';

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
  editorBox.editBoardDeleteClicker();
  newBoard.newBoardSelector();
  newPin.newPinSelector();
  editBoard.updateEditedBoardListener();
};

const deleteCardsToggle = () => {
  $('.deleteButtonContainer').toggleClass('hidden');
  deletePins.deletePinClick();
  deleteBoard.deleteBoardClick();
};

const editorEvent = () => {
  $('#editorButton').click(editBoxEvent);
  $('#editorButton').click(deleteCardsToggle);
  $('#editorButton').click(editBoard.boardEditSelectorChanged);
};

export default { logoutEvent, editorEvent };
