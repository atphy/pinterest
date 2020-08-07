import newBoard from './newBoard';
import editBoard from './editBoard';

const addOrEditBoard = () => {
  newBoard.newBoardSelector();
  $('#existingBoards').on('change', () => {
    if (!$('#existingBoards').val()) {
      $('#submit-board').off();
      newBoard.newBoardSelector();
    } else {
      $('#submit-board').off();
      editBoard.boardEditSelectorChanged();
      editBoard.updateEditedBoardListener();
    }
  });
};

export default { addOrEditBoard };
