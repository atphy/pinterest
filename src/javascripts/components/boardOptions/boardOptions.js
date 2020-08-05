/* eslint-disable no-console */
import boardsData from '../../helpers/data/boards';
import utils from '../../helpers/utils';
import boardSelector from './boardSelector';

const buildBoardsForEditor = () => {
  boardsData.getBoards()
    .then((boards) => {
      let domString = '<option value="">--New Board--</option>';
      boards.forEach((board) => {
        domString += `
        <option value="${board.id}">${board.name}</option>
      `;
      });
      utils.printToDom('#existingBoards', domString);
    })
    .catch((err) => console.error('broken', err));
};

const buildBoardsForSelector = () => {
  boardsData.getBoards()
    .then((boards) => {
      let domString = '<li class="boardOptions">All Pins</li>';
      boards.forEach((board) => {
        domString += `
          <li class="boardOptions" value="${board.id}" id="${board.id}">${board.name}</li>
        `;
      });
      utils.printToDom('#boardSelector', domString);
      boardSelector.displayBoardSelectNameClicker();
    })
    .catch((err) => console.error('broken', err));
};

export default { buildBoardsForEditor, buildBoardsForSelector };
