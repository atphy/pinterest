import boardsData from '../../helpers/data/boards';
import utils from '../../helpers/utils';

const buildBoardsForEditor = () => {
  boardsData.getBoards()
    .then((boards) => {
      console.warn('it also works', boards);
      let domString = '<option value="New">--New Board--</option>';
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
      let domString = '';
      boards.forEach((board) => {
        domString += `
          <li><a href="${board.id}">${board.name}</a></li>
        `;
      });
      utils.printToDom('#boardSelector', domString);
    })
    .catch((err) => console.error('broken', err));
};

export default { buildBoardsForEditor, buildBoardsForSelector };
