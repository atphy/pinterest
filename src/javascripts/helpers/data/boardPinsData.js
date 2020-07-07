import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsByBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardPins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const boardPinsObj = response.data;
      const boardPins = [];
      Object.keys(boardPinsObj).forEach((boardPin) => {
        boardPinsObj[boardPin].id = boardPin;
        boardPins.push(boardPinsObj[boardPin]);
      });
      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

export default { getPinsByBoard };
