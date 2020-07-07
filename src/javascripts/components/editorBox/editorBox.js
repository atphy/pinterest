import './editorBox.scss';

const editBoards = $('#editBoards');
const editPins = $('#editPins');
const boardEditor = $('#boardEditor');
const pinEditor = $('#pinEditor');

const editBoardEvent = (e) => {
  e.preventDefault();
  editBoards.addClass('selectedBoardEditor');
  editBoards.removeClass('deselectedBoardEditor');
  editPins.removeClass('selectedPinEditor');
  editPins.addClass('deselectedPinEditor');
  boardEditor.removeClass('hidden');
  pinEditor.addClass('hidden');
};

const editorBoardButton = () => {
  $('#editBoards').click(editBoardEvent);
};

const editPinsEvent = (e) => {
  e.preventDefault();
  editPins.addClass('selectedPinEditor');
  editPins.removeClass('deselectedPinEditor');
  editBoards.removeClass('selectedBoardEditor');
  editBoards.addClass('deselectedBoardEditor');
  boardEditor.addClass('hidden');
  pinEditor.removeClass('hidden');
};

const editorPinsButton = () => {
  $('#editPins').click(editPinsEvent);
};

export default { editorBoardButton, editorPinsButton };
