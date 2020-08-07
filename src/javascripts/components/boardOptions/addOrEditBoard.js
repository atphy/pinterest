import newBoard from './newBoard';
import editBoard from './editBoard';

const addOrEditBoard = () => {
  newBoard.newBoardSelector();
  console.warn($('#existingBoards').val());
  $('#existingBoards').on('change', () => {
    if (!$('#existingBoards').val()) {
      $('#submit-board').off();
      console.warn($('#existingBoards').val());
      newBoard.newBoardSelector();
    } else {
      $('#submit-board').off();
      console.warn($('#existingBoards').val());
      editBoard.boardEditSelectorChanged();
      editBoard.updateEditedBoardListener();
    }
  });
};

export default { addOrEditBoard };
