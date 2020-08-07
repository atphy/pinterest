import boardData from '../../helpers/data/boards';
import boardOptions from './boardOptions';
import boardSelector from './boardSelector';

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
      boardSelector.setBoardHeader();
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
