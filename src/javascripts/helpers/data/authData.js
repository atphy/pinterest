import firebase from 'firebase/app';
import 'firebase/auth';

import pinCards from '../../components/pinCards/pinCards';
import boardOptions from '../../components/boardOptions/boardOptions';
import navBar from '../../components/navbar/navBar';

const acctButtonBox = $('#acctButtonBox');
const signedIn = $('#signedIn');
const noUser = $('#noUser');
const signOut = $('#signOut');
const selectedBoard = $('#selectedBoard');
const editorButton = $('#editorButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      acctButtonBox.addClass('hidden');
      signedIn.removeClass('hidden');
      noUser.addClass('hidden');
      signOut.removeClass('hidden');
      selectedBoard.removeClass('hidden');
      editorButton.removeClass('hidden');

      pinCards.buildPins();
      boardOptions.buildBoardsForEditor();
      boardOptions.buildBoardsForSelector();
      navBar.editorEvent();
    } else {
      acctButtonBox.removeClass('hidden');
      signedIn.addClass('hidden');
      noUser.removeClass('hidden');
      signOut.addClass('hidden');
      selectedBoard.addClass('hidden');
      editorButton.addClass('hidden');
    }
  });
};

export default { checkLoginStatus };
