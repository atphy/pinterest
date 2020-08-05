import boardData from '../../helpers/data/boards';

const deleteBoard = () => {
  const boardId = $('#existingBoards').val();
  boardData.deleteBoard(boardId);
};

const deleteBoardClick = () => {
  $('#delete-board').click(deleteBoard);
};

export default { deleteBoardClick };
