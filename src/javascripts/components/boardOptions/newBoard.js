import boardData from '../../helpers/data/boards';
import boardOptions from './boardOptions';

const addNewBoard = () => {
  const newBoardObj = {
    name: $('#boardName').val(),
  };
  boardData.addNewBoard(newBoardObj)
    .then(() => {
      boardOptions.buildBoardsForEditor();
      boardOptions.buildBoardsForSelector();
    });
};

const newBoardSelector = () => {
  if ($('#existingBoards').val() === '') {
    $('#submit-board').click(addNewBoard);
  }
};

export default { newBoardSelector };
