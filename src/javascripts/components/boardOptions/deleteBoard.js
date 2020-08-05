import boardData from '../../helpers/data/boards';
import boardSelector from './boardSelector';
import boardOptions from './boardOptions';

const deleteBoard = () => {
  const boardId = $('#existingBoards').val();
  boardData.deleteBoard(boardId)
    .then(() => {
      boardOptions.buildBoardsForEditor();
      boardOptions.buildBoardsForSelector();
      boardSelector.selectedBoardId = '';
      boardSelector.setBoardHeader();
    });
};

const deleteBoardClick = () => {
  $('#delete-board').click(deleteBoard);
};

export default { deleteBoardClick };
