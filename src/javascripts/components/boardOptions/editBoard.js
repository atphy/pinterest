import boardData from '../../helpers/data/boards';
import boardOptions from './boardOptions';

const editBoardForm = () => {
  boardData.getBoardById($('#existingBoards').val())
    .then((board) => {
      $('#boardName').val(board.data.name);
    });
};

const updateEditedBoard = () => {
  const boardId = $('#existingBoards').val();
  const updatedBoard = {
    name: $('#boardName').val(),
  };
  boardData.updateBoard(boardId, updatedBoard)
    .then(() => {
      boardOptions.buildBoardsForEditor();
      boardOptions.buildBoardsForSelector();
    });
};

const updateEditedBoardListener = () => {
  $('#submit-board').click(updateEditedBoard);
};

const boardEditSelectorChanged = () => {
  $('#existingBoards').on('change', () => {
    editBoardForm();
  });
};

export default { boardEditSelectorChanged, updateEditedBoardListener };
