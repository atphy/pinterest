import pinOptions from '../pinCards/pinOptions';
import editPin from '../pinCards/editPin';
import newPin from '../pinCards/newPin';

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

const addOrEditPin = () => {
  newPin.newPinSelector();
  $('#existingPins').on('change', () => {
    if (!$('#existingPins').val()) {
      $('#submit-pin').off();
      newPin.newPinSelector();
    } else {
      $('#submit-pin').off();
      editPin.updateEditedPinListener();
      editPin.pinEditSelectorChanged();
    }
  });
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
  addOrEditPin();
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
