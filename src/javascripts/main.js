import 'bootstrap';
import '../styles/main.scss';

import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import navBar from './components/navbar/navBar';
import authData from './helpers/data/authData';
import editorBox from './components/editorBox/editorBox';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  navBar.logoutEvent();
  navBar.editorEvent();
  editorBox.editorBoardButton();
  editorBox.editorPinsButton();
};

init();
