import pinOptions from '../pinCards/pinOptions';
import editPin from '../pinCards/editPin';

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
  pinOptions.buildPinsForEditor();
  editPin.pinEditSelectorChanged();
  editPin.updateEditedPinListener();
};

const editorPinsButton = () => {
  $('#editPins').click(editPinsEvent);
};

const editBoardDeleteChecker = () => {
  if ($('#existingBoards').val()) {
    $('#delete-board').removeClass('hidden');
  } else {
    $('#delete-board').addClass('hidden');
  }
};

const editBoardDeleteClicker = () => {
  $('#existingBoards').change(editBoardDeleteChecker);
};

export default { editorBoardButton, editorPinsButton, editBoardDeleteClicker };
