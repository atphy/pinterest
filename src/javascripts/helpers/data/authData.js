import firebase from 'firebase/app';
import 'firebase/auth';

import pinCards from '../../components/pinCards/pinCards';

const acctButtonBox = $('#acctButtonBox');
const signedIn = $('#signedIn');
const noUser = $('#noUser');
const signOut = $('#signOut');
const selectedBoard = $('#selectedBoard');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      acctButtonBox.addClass('hidden');
      signedIn.removeClass('hidden');
      noUser.addClass('hidden');
      signOut.removeClass('hidden');
      selectedBoard.removeClass('hidden');

      pinCards.buildPins();
    } else {
      acctButtonBox.removeClass('hidden');
      signedIn.addClass('hidden');
      noUser.removeClass('hidden');
      signOut.addClass('hidden');
      selectedBoard.addClass('hidden');
    }
  });
};

export default { checkLoginStatus };
